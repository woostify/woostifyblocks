import {
	Fragment, useState, useMemo,
} from '@wordpress/element'
import {
	select, dispatch, useSelect,
} from '@wordpress/data'
import { ColorPicker, Popover, BaseControl, Button, ButtonGroup } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

import { cloneDeep, isPlainObject } from 'lodash'

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

	const _colors = useSelect( select => select( 'core/block-editor' ).getSettings().colors ) || []
	const colors = Array.isArray( _colors ) ? _colors : []

	/**
	 * Function used to update the colors in @wordpress/data,
	 *
	 * @param {Array} newColors colors passed.
	 */
	const handleUpdateColors = newColors => {
		const updatedColors = newColors.filter( color => color.slug.match( /^wcb-global-color/ ) )

		// Update the blocks in our page.
		//updateFallbackBlockAttributes( updatedColors )

		// Save settings.
		clearTimeout( saveTimeout )
		saveTimeout = setTimeout( () => {
			const settings = new models.Settings( { wcb_global_colors: [ updatedColors ] } ) // eslint-disable-line camelcase
			settings.save()
		}, 300 )
		
		dispatch( 'core/block-editor' ).updateSettings( { colors: newColors } )
	}

	// Called when adding a new color.
	const handleOnAddColor = () => {
		const newIndex = ( colors && Array.isArray( colors ) ) ? colors.length + 1 : 1
		const slugId = Math.floor( Math.random() * new Date().getTime() ) % 100000
		const color = wcbCreateColor()

		const updatedColors = [
			...select( 'core/block-editor' ).getSettings().colors,
			{
				name: sprintf( __( 'Custom Color %s', 'woostify-block' ), newIndex ),
				slug: `wcb-global-color-${ slugId }`,
				color,
				rgb: wcbGetRgb( color ),
			},
		]

		// Update the colors.
		handleUpdateColors( updatedColors )

		setSelectedIndex( newIndex - 1 )
	}

	return (
		<Fragment>
		<BaseControl>
		{ colors.map( ( color, index ) => {
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

export default WCBGlobalColors