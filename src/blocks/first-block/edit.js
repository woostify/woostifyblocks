import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	Placeholder,
	TextControl,
	PanelBody,
	BaseControl,
	Button,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import { useState, useEffect } from 'react';
import { withSelect, withDispatch } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import WoostifyBaseControl from '../../components/controls/base';
import WoostifyDimensionsControl from '../../components/controls/dimensions';

import './editor.scss';

const { Visualizer } = BoxControl;

function Edit( props ) {
	const [ selectedDevice, setSelectedDevice ] = useState( 'Desktop' );
	const [ values, setValues ] = useState( {
		top: '50px',
		left: '10%',
		right: '10%',
		bottom: '50px',
	} );

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
						<ColorPalette
							onChange={ ( val ) =>
								setAttributes( { bg_color: val } )
							}
						/>
					</WoostifyBaseControl>
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
							device={ getDeviceType() }
							type={ 'padding' }
							attrTop={ 'paddingTop' }
							attrRight={ 'paddingRight' }
							attrBottom={ 'paddingBottom' }
							attrLeft={ 'paddingLeft' }
							attrUnit={ 'paddingUnit' }
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
							device={ getDeviceType() }
							type={ 'margin' }
							attrTop={ 'marginTop' + getDeviceSuffix() }
							attrRight={ 'marginRight' + getDeviceSuffix() }
							attrBottom={ 'marginBottom' + getDeviceSuffix() }
							attrLeft={ 'marginLeft' + getDeviceSuffix() }
							attrUnit={ 'marginUnit' + getDeviceSuffix() }
						/>
					</WoostifyBaseControl>
				</PanelBody>
			</InspectorControls>
			<div
				className="woostify-block"
				id={ `woostify-block-${ uniqueId }` }
			>
				<TextControl
					value={ attributes.message }
					onChange={ ( val ) => setAttributes( { message: val } ) }
					style={ {
						backgroundColor: attributes.bg_color,
						color: attributes.text_color,
					} }
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
