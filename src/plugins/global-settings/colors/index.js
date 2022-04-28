//import './color-palette-updater'
//import './store';

import './editor.scss';

import classnames from 'classnames'
import {
	Fragment, useState, useMemo, useEffect
} from '@wordpress/element'
import { select, dispatch, useSelect, withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { ColorPicker, Popover, BaseControl, Button, ButtonGroup } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

import { cloneDeep, isPlainObject, get, uniqueId, map } from 'lodash'

import { wcbCreateColor, wcbGetRgb } from '../../../utils'

import { models } from '@wordpress/api';

const WCBColorOption = props => {
	const {
		color,
		name,
	} = props

	if ( props.locked ) {
		return (
			<div className="components-circular-option-picker__option-wrapper wcb-global-settings__color-picker-disabled-color">
				<div className="components-circular-option-picker__option" style={ { backgroundColor: color, color } }>
				</div>
			</div>
		)
	}

	return (
		<Fragment>
			<div className="components-circular-option-picker__option-wrapper">
				<Button
					className="components-circular-option-picker__option"
					label={ name }
					style={ { backgroundColor: color, color } }
					onClick={ () => props.onClick( color ) }
					onMouseDown={ event => event.preventDefault() } // Prevents the onFocusOutside from triggering when clicking the button.
				/>
				{ props.children }
			</div>
		</Fragment>
	)
}

WCBColorOption.defaultProps = {
	color: '#f5f5f5',
	name: __( 'Untitled', 'woostify-block' ),
	locked: false,
	onClick: () => {},
}

const WCBAddColorButton = props => (
	<Button
		{ ...props }
		isSecondary
		className="wcb-global-settings-color-picker__add-icon"
		label={ __( 'Add New Color', 'woostify-block' ) }
		icon={ 'plus-alt2' }
	/>
)

let saveTimeout = null

const WCBGlobalColors = props => {
	const [ selectedIndex, setSelectedIndex ] = useState( null )

	const [ isSaving, setIsSaving ] = useState( false )
	const [ wcbColors, setWCBColors] = useState( wcb_params.global_colors )
	const [ currColors, setCurrColors ] = useState( props.baseColors )
	const [ showMessage, setShowMessage ] = useState( false )
	
	const saveConfig = () => {
		if ( false === isSaving ) {
			setIsSaving( true )
			const config = wcbColors;
			const settingModel = new models.Settings( { wcb_global_colors: config } );
			settingModel.save().then( response => {
				setIsSaving( false )
				setWCBColors( config )
				wcb_params.global_colors = JSON.stringify( config );
				props.updateSettings( { colors: currColors } );
			} );
		}
	}

	// Called when adding a new color.
	const handleOnAddColor = () => {
		if ( isSaving ) {
			return;
		}
		
		const color = wcbCreateColor()

		const newIndex = ( currColors && Array.isArray( currColors ) ) ? currColors.length + 1 : 1
		const slugId = Math.floor( Math.random() * new Date().getTime() ) % 100000

		wcbColors.push( {
			color,
			name: __( 'Color' ) + ' ' + ( newIndex ),
			slug: `wcb-global-color-${ slugId }`,
		} );
		currColors.push( {
			color,
			name: __( 'Color' ) + ' ' + ( newIndex ),
			slug: `wcb-global-color-${ slugId }`,
			rgba: wcbGetRgb( color )
		} );
		setWCBColors( wcbColors )
		setCurrColors( currColors );
		saveConfig();
	}

	const classNames = classnames(
		'wcb-global-settings-color-picker',
		'components-circular-option-picker',
		'editor-color-palette-control__color-palette',
		props.className
	)

	return (
		<Fragment>
		<BaseControl className={ classNames }>
		{ currColors.map( ( color, index ) => {
			if ( ! isPlainObject( color ) ) {
				return null
			}

			return (
				<WCBColorOption
				key={ index }
				color={ color.color }
				name={ color.name }
				locked={ ! ( color.slug || '' ).startsWith( 'wcb-' ) }
				onClick={ () => setSelectedIndex( selectedIndex !== index ? index : null ) }
				>

				</WCBColorOption>
			)
		} ) }
		<WCBAddColorButton onClick={ handleOnAddColor } />
		</BaseControl>
		</Fragment>
	)
}

export default compose( [
	withSelect( ( select, ownProps ) => {
		const { getSettings } = select( 'core/block-editor' );
		const settings = getSettings();
		return {
			baseColors: get( settings, [ 'colors' ], [] ),
			disableCustomColors: settings.disableCustomColors !== undefined ? settings.disableCustomColors : false,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			updateSettings,
		} = dispatch( 'core/block-editor' );
		return {
			updateSettings,
		};
	} ),
] )( WCBGlobalColors );