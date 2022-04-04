import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Popover } from '@wordpress/components';
import { useState, useCallback, memo, useMemo, useRef, useEffect } from '@wordpress/element'

var classNames = require('classnames')

import wb_helpers from '../../helpers';

const IconToggleControl = props => {
    const {
		value,
		options,
		labelPosition = 'right',
	} = props

    const [ isMouseHover, setIsMouseHover ] = useState( false )
	const [ isOpenContent, setIsOpenContent ] = useState( false )
	const buttonRef = useRef( null )

	const toggleOffset = useMemo( () => {
		const index = props.options.findIndex( el => el.value === value )
		return index / options.length * 100
	}, [ options, value ] )

	// Close the toggle content if the user clicks outside.
	const handleOnClickOutside = useCallback( event => {
		// Do not do anything if the Media Manager is open.
		if ( window.wp?.media?.frame?.el?.clientHeight ) {
			return;
		}

		if ( isOpenContent ) {
			const closest = event.target?.closest( '.wb-base-control-responsive-toggle' )
			if ( closest !== buttonRef.current ) {
				setIsOpenContent( false );
			}
		}
	} )

	// Assign the outside click listener.
	useEffect( () => {
		document.body.addEventListener( 'click', handleOnClickOutside )
		return () => document.body.removeEventListener( 'click', handleOnClickOutside )
	}, [ handleOnClickOutside ] )

	if ( options.length <= 1 ) {
		return null
	}

	const toggleBtnClassName = classNames( 'wb-base-control-responsive-toggle', { 'is-open': isMouseHover } )

	return (
		<div 
		className={ toggleBtnClassName }
		ref={this.deviceButtonRef}
		>
			<div 
			className="wb-base-control-toggle__wrapper"
			style={ { transform: `translateY( ${ toggleOffset }%)` } }
			>
			{ options.map( ( v, i ) => {
				let device = 'mobile' === v ? 'smartphone' : v;
				let tooltip = __(
					'Desktop',
					'woostify-block'
				);
				if ( 'tablet' === v ) {
					tooltip = __(
						'Tablet',
						'woostify-block'
					);
				}
				if ( 'mobile' === v ) {
					tooltip = __(
						'Mobile',
						'woostify-block'
					);
				}
				return (
					<div
						onMouseEnter={ () => setIsMouseHover( v ) }
						onMouseLeave={ () => setIsMouseHover( false ) }
					>
						<Button
							className={ wb_helpers.capitalizeFirstLetter(v) === options.value ? 'is-active' : '' }
							onClick={ () => {
								if ( ! isOpenContent ) {
									setIsOpenContent( true );
								} else {
									onResponsiveToggleClick(
										wb_helpers.capitalizeFirstLetter(v)
									);
									setIsOpenContent( false );
									props.onChange( v );
								}
							} }
						>
							<Dashicon icon={ device } />
						</Button>
						{ tooltip && this.state.isMouseHover === v &&
							<Popover
								position={ `middle ${labelPosition}`}
								className='wb-responsive-toggle-popover'
							>
							{tooltip}
							</Popover>
						}
					</div>
				);
			} ) }
			</div>
		</div>
	)
}
export default memo( IconToggleControl )