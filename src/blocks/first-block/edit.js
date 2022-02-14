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
} from '@wordpress/components';
import { useState, useEffect } from 'react';
import { withSelect, withDispatch } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import WoostifyBaseControl from '../../components/controls/base';

import './editor.scss';

function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const [ selectedDevice, setSelectedDevice ] = useState();
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
			deviceSuffix = '_tablet';
		}
		if ( 'Mobile' === currDevice ) {
			deviceSuffix = '_mobile';
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
					<BaseControl label={ __( 'Button', 'woostify-block' ) }>
						{ 'Desktop' === getDeviceType() && (
							<Button variant="secondary">Desktop</Button>
						) }
						{ 'Tablet' === getDeviceType() && (
							<Button variant="secondary">Tablet</Button>
						) }
						{ 'Mobile' === getDeviceType() && (
							<Button variant="secondary">Mobile</Button>
						) }
					</BaseControl>
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
							attributes[ 'bg_unit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'bg_unit' + getDeviceSuffix() ]: unit,
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
							attributes[ 'text_color_unit' + getDeviceSuffix() ]
						}
						onResponsiveToggleClick={ ( device ) =>
							setDeviceType( device )
						}
						onUnitClick={ ( unit ) =>
							setAttributes( {
								[ 'text_color_unit' + getDeviceSuffix() ]: unit,
							} )
						}
					>
						<ColorPalette
							onChange={ ( val ) =>
								setAttributes( { text_color: val } )
							}
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
				{ attributes.bg_unit +
					',' +
					attributes.bg_unit_tablet +
					',' +
					attributes.bg_unit_mobile }
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
