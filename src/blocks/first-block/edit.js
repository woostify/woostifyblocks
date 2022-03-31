import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	PanelColorSettings,
	RichText,
} from '@wordpress/block-editor';
import {
	Placeholder,
	TextControl,
	PanelBody,
	BaseControl,
	Button,
	RangeControl,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import { useState, useEffect } from 'react';
import { withSelect, withDispatch } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import WoostifyBaseControl from '../../components/controls/base';
import WoostifyDimensionsControl from '../../components/controls/dimensions';
import WoostifyButtonPopoverControl from '../../components/controls/button-popover';
import WoostifyFontFamilyPicker from '../../components/controls/font-family-picker';
import WoostifyTypographyControl from '../../components/controls/typography';

import './editor.scss';

function Edit( props ) {
	const [ selectedDevice, setSelectedDevice ] = useState( 'Desktop' );
	const [ columns, setColumns ] = useState( 2 );

	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	useEffect( () => {
		setAttributes( {
			uniqueId: clientId.substr( 2, 9 ).replace( '-', '' ),
		} );
	} );

	const getDeviceType = () => {
		let currDeviceType = props.deviceType
			? props.deviceType
			: selectedDevice;

		return currDeviceType;
	};

	const getDeviceSuffix = () => {
		let deviceSuffix = '';
		let currDevice = getDeviceType();
		if ( 'Tablet' === currDevice ) {
			deviceSuffix = 'Tablet';
		}
		if ( 'Mobile' === currDevice ) {
			deviceSuffix = 'Mobile';
		}

		return deviceSuffix;
	};

	const setDeviceType = ( deviceType ) => {
		if ( props.deviceType ) {
			props.setDeviceType( deviceType );
			setSelectedDevice( deviceType );
		}
	};

	let lineHeightCSS =
		attributes[ 'lineHeight' + getDeviceSuffix() ] +
		attributes[ 'lineHeightUnit' + getDeviceSuffix() ];
	let fontSizeCSS =
		attributes[ 'fontSize' + getDeviceSuffix() ] +
		attributes[ 'fontSizeUnit' + getDeviceSuffix() ];
	let letterSpacingCSS =
		attributes[ 'letterSpacing' + getDeviceSuffix() ] + 'px';

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'General Settings', 'woostify-block' ) }>
					<WoostifyBaseControl
						label={ __( 'Background Color', 'woostify-block' ) }
						help={ __(
							'Vestibulum ullamcorper mauris at ligula',
							'woostify-block'
						) }
						units={ [ 'px', 'rem', '%' ] }
						responsive={ [ 'desktop', 'tablet', 'mobile' ] }
						selectedDevice={ getDeviceType() }
						selectedUnit={
							attributes[ 'bgUnit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'bgUnit' + getDeviceSuffix() ]: unit,
							} )
						}
					>
						<RangeControl
							value={ columns }
							min={ 2 }
							onChange={ ( value ) => setColumns( value ) }
							max={ 10 }
						/>
					</WoostifyBaseControl>

					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'normal',
								title: 'Normal',
								className: 'tab-one',
							},
							{
								name: 'active',
								title: 'Active',
								className: 'tab-two',
							},
						] }
					>
						{ ( tab ) => (
							<PanelBody>
								{ 'normal' === tab.name && (
									<WoostifyBaseControl
										label={ __(
											'Background Color',
											'woostify-block'
										) }
										help={ __(
											'Vestibulum ullamcorper mauris at ligula',
											'woostify-block'
										) }
										units={ [ 'px', 'rem', '%' ] }
										responsive={ [
											'desktop',
											'tablet',
											'mobile',
										] }
										selectedDevice={ getDeviceType() }
										selectedUnit={
											attributes[
												'bgUnit' + getDeviceSuffix()
											]
										}
										onResponsiveToggleClick={ ( device ) =>
											setDeviceType( device )
										}
										onUnitClick={ ( unit ) =>
											setAttributes( {
												[ 'bgUnit' +
												getDeviceSuffix() ]: unit,
											} )
										}
									>
										<RangeControl
											value={ columns }
											min={ 2 }
											onChange={ ( value ) =>
												setColumns( value )
											}
											max={ 10 }
										/>
									</WoostifyBaseControl>
								) }
								{ 'active' === tab.name && (
									<WoostifyBaseControl
										label={ __(
											'Text Color',
											'woostify-block'
										) }
										responsive={ [
											'desktop',
											'tablet',
											'mobile',
										] }
										units={ [ 'px', 'rem' ] }
										selectedDevice={ getDeviceType() }
										selectedUnit={
											attributes[
												'textColorUnit' +
													getDeviceSuffix()
											]
										}
										onResponsiveToggleClick={ ( device ) =>
											setDeviceType( device )
										}
										onUnitClick={ ( unit ) =>
											setAttributes( {
												[ 'textColorUnit' +
												getDeviceSuffix() ]: unit,
											} )
										}
									>
										<ColorPalette
											onChange={ ( val ) =>
												setAttributes( {
													text_color: val,
												} )
											}
										/>
									</WoostifyBaseControl>
								) }
							</PanelBody>
						) }
					</TabPanel>

					<WoostifyButtonPopoverControl
						popoverHeading={ __( 'Typography', 'woostify-block' ) }
					>
						<WoostifyTypographyControl
							{ ...props }
							attrFontFamily={ 'fontFamily' }
							attrFontWeight={ 'fontWeight' }
							attrTextTransform={ 'fontTransform' }
							attrFontStyle={ 'fontStyle' }
							attrLineHeight={ 'lineHeight' }
							attrLineHeightUnit={ 'lineHeightUnit' }
							attrLetterSpacing={ 'letterSpacing' }
							attrFontSize={ 'fontSize' }
							attrFontSizeUnit={ 'fontSizeUnit' }
							fontSizeUnits={ [ 'px', 'em', 'rem' ] }
							lineHeightUnits={ [ 'px', 'em' ] }
						/>
					</WoostifyButtonPopoverControl>

					<WoostifyBaseControl
						label={ __( 'Text Color', 'woostify-block' ) }
						responsive={ [ 'desktop', 'tablet', 'mobile' ] }
						units={ [ 'px', 'rem' ] }
						selectedDevice={ getDeviceType() }
						selectedUnit={
							attributes[ 'textColorUnit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'textColorUnit' + getDeviceSuffix() ]: unit,
							} )
						}
					>
						<ColorPalette
							onChange={ ( val ) =>
								setAttributes( { text_color: val } )
							}
						/>
					</WoostifyBaseControl>
					<WoostifyBaseControl
						{ ...props }
						label={ __( 'Padding', 'woostify-block' ) }
						responsive={ [ 'desktop', 'tablet', 'mobile' ] }
						units={ [ 'px', 'rem' ] }
						selectedDevice={ getDeviceType() }
						selectedUnit={
							attributes[ 'paddingUnit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'paddingUnit' + getDeviceSuffix() ]: unit,
							} )
						}
					>
						<WoostifyDimensionsControl
							{ ...props }
							type={ 'padding' }
							attrTop={ 'paddingTop' + getDeviceSuffix() }
							attrRight={ 'paddingRight' + getDeviceSuffix() }
							attrBottom={ 'paddingBottom' + getDeviceSuffix() }
							attrLeft={ 'paddingLeft' + getDeviceSuffix() }
						/>
					</WoostifyBaseControl>
					<WoostifyBaseControl
						label={ __( 'Margin', 'woostify-block' ) }
						responsive={ [ 'desktop', 'tablet', 'mobile' ] }
						units={ [ 'px', 'rem' ] }
						selectedDevice={ getDeviceType() }
						selectedUnit={
							attributes[ 'marginUnit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'marginUnit' + getDeviceSuffix() ]: unit,
							} )
						}
					>
						<WoostifyDimensionsControl
							{ ...props }
							type={ 'margin' }
							attrTop={ 'marginTop' + getDeviceSuffix() }
							attrRight={ 'marginRight' + getDeviceSuffix() }
							attrBottom={ 'marginBottom' + getDeviceSuffix() }
							attrLeft={ 'marginLeft' + getDeviceSuffix() }
							labelTop={ __( 'T-Left', 'woostify-block' ) }
							labelRight={ __( 'T-Right', 'woostify-blocks' ) }
							labelBottom={ __( 'B-Right', 'woostify-block' ) }
							labelLeft={ __( 'B-Left', 'woostify-block' ) }
							disableInputs={ [
								'marginLeft' + getDeviceSuffix(),
								'marginRight' + getDeviceSuffix(),
							] }
						/>
					</WoostifyBaseControl>
				</PanelBody>
			</InspectorControls>
			<div
				className="woostify-block"
				id={ `woostify-block-${ uniqueId }` }
			>
				<style>
					{ `#woostify-block-${ uniqueId } .woostify-block-text {
							font-family: ${ attributes.fontFamily };
							font-weight: ${ attributes.fontWeight };
							text-transform: ${ attributes.fontTransform };
							font-style: ${ attributes.fontStyle };
							line-height: ${ lineHeightCSS };
							font-size: ${ fontSizeCSS };
							letter-spacing: ${ letterSpacingCSS };
							backgroundColor: ${attributes.bg_color},
							color: ${attributes.text_color},
						}` }
				</style>
				<RichText
					tagName="h2"
					className="woostify-block-text"
					value={ attributes.message }
					onChange={ ( val ) => setAttributes( { message: val } ) }
				/>
			</div>
		</div>
	);
}

export default compose( [
	withDispatch( ( dispatch ) => ( {
		setDeviceType( type ) {
			const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } =
				dispatch( 'core/edit-post' ) || false;

			if ( ! setPreviewDeviceType ) {
				return;
			}

			setPreviewDeviceType( type );
		},
	} ) ),
	withSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType: getPreviewDeviceType } =
			select( 'core/edit-post' ) || false;

		if ( ! getPreviewDeviceType ) {
			return {
				deviceType: null,
			};
		}

		return {
			deviceType: getPreviewDeviceType(),
		};
	} ),
] )( Edit );
