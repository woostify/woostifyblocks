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
import { 
	useState,
	useEffect,
} from 'react';
import {
	withSelect,
	withDispatch,
} from '@wordpress/data';

import {
	compose,
} from '@wordpress/compose';

import WoostifyBaseControl from '../../components/controls/base';

import './editor.scss';

function Edit( props ) {
	const { attributes, setAttributes, isSelected } = props;
	const [ selectedDevice, setSelectedDevice ] = useState();

	useEffect(() => {
	});

	
	const getDeviceType = () => {
		let currDeviceType = props.deviceType ? props.deviceType : selectedDevice;

		return currDeviceType;
	}

	const setDeviceType = ( deviceType ) => {
		if ( props.deviceType ) {
			props.setDeviceType( deviceType );
			setSelectedDevice( deviceType );
		}
	}
	
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( "General Settings", "woostify-block" ) }>
					{ 'Desktop' === getDeviceType() && (
						<Button variant="secondary">Desktop</Button>
					) }
					{ 'Tablet' === getDeviceType() && (
						<Button variant="secondary">Tablet</Button>
					) }
					{ 'Mobile' === getDeviceType() && (
						<Button variant="secondary">Mobile</Button>
					) }
					<WoostifyBaseControl 
					label={ __( "Test", "woostify-block" ) }
					units={["px", "em"]}
					responsive={["desktop", "tablet", "mobile"]}
					selectedDevice={ getDeviceType() }
					onClick={ ( device ) => {
						setDeviceType( device );
					} }
					>
						<ColorPalette
							onChange={ (val) => setAttributes( {bg_color: val}) }
						/>
					</WoostifyBaseControl>
				</PanelBody>
			</InspectorControls>
			<TextControl
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
				style={ {
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				} }
			/>
        </div>
	);
}

export default compose( [
	withDispatch( ( dispatch ) => ( {
		setDeviceType( type ) {
			const {
				__experimentalSetPreviewDeviceType: setPreviewDeviceType,
			} = dispatch( 'core/edit-post' ) || false;

			if ( ! setPreviewDeviceType ) {
				return;
			}

			setPreviewDeviceType( type );
		},
	} ) ),
	withSelect( ( select ) => {
		const {
			__experimentalGetPreviewDeviceType: getPreviewDeviceType,
		} = select( 'core/edit-post' ) || false;

		if ( ! getPreviewDeviceType ) {
			return {
				deviceType: null,
			};
		}

		return {
			deviceType: getPreviewDeviceType(),
		};
	} ),
] ) ( Edit );
