import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

import { Tooltip, Button, Dashicon, Popover } from '@wordpress/components';

var classNames = require('classnames')
class WoostifyBaseControl extends Component {
	constructor( props ) {
		super( ...arguments );
		this.props = props;

		this.deviceButtonRef = React.createRef();

		this.state = {
			isMouseHover: false,
			isOpenResponsiveToggle: false,
			selectedDevice: '',
		};

		this.handleOnClickOutside = this.handleOnClickOutside.bind( this );
	}

	componentDidMount() {
		document.addEventListener( 'click', this.handleOnClickOutside );
	}

	componentWillUnmount() {
		// Remove event listener for click.
		document.removeEventListener( 'click', this.handleOnClickOutside );
	}
	
	handleOnClickOutside( ev ) {
		// Do not do anything if the Media Manager is open.
		if ( window.wp?.media?.frame?.el?.clientHeight ) {
			return;
		}

		if ( this.state.isOpenResponsiveToggle ) {
			const closest = ev.target?.closest( '.wb-base-control-responsive-toggle' )
			if ( closest !== this.deviceButtonRef.current ) {
				this.setState({ isOpenResponsiveToggle: false });
			}
		}
	}

	capitalizeFirstLetter( string ) {
		return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
	}

	render() {
		const {
			label,
			help,
			units,
			responsive,
			onResponsiveToggleClick,
			onUnitClick,
			selectedDevice,
			selectedUnit,
			children,
		} = this.props;

		const toggleBtnClassName = classNames( 'wb-base-control-responsive-toggle', { 'is-open': this.state.isOpenResponsiveToggle } )

		

		const getResponsiveToggleOffset = () => {
			const index = responsive.findIndex( el => el.value === selectedDevice )
			return index / responsive.length * 100
		}

		return (
			<div className="components-base-control components-woostify-base-control">
				<div className="wb-control-label">
					<div className="wb-base-control__label">{ label }</div>
					{ !! responsive && Array.isArray( responsive ) && (
						<div className="wb-base-control__responsive">
							<div 
							className={ toggleBtnClassName }
							ref={this.deviceButtonRef}
							>
								<div 
								className="wb-base-control-toggle__wrapper"
								style={ { transform: `translateY( ${ getResponsiveToggleOffset() }%)` } }
								>
									{ responsive.map( ( v, i ) => {
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
												onMouseEnter={ () => this.setState({ isMouseHover: v }) }
												onMouseLeave={ () => this.setState({ isMouseHover: false }) }
											>
												<Button
													className={ this.capitalizeFirstLetter(v) === selectedDevice ? 'is-active' : '' }
													onClick={ () => {
														if ( ! this.state.isOpenResponsiveToggle ) {
															this.setState({ isOpenResponsiveToggle: true })
														} else {
															onResponsiveToggleClick(
																this.capitalizeFirstLetter(v)
															);
															this.setState({ isOpenResponsiveToggle: false, selectedDevice: this.capitalizeFirstLetter(v) })
														}
													} }
												>
													<Dashicon icon={ device } />
												</Button>
												{ tooltip && this.state.isMouseHover === v &&
													<Popover
														position='middle right'
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
						</div>
					) }
					{ !! units && Array.isArray( units ) && (
						<div className="wb-base-control__units">
							{ units.map( ( unit ) => {
								return (
									<Button
										key={ unit }
										className={ 'units--' + unit }
										isSmall
										isPrimary={ selectedUnit === unit }
										onClick={ () => onUnitClick( unit ) }
									>
										{ unit }
									</Button>
								);
							} ) }
						</div>
					) }
				</div>
				<div className="wb-base-content">{ children }</div>
				{ !! help && (
					<div className="wb-base-help">
						<p className="components-base-control__help">
							{ help }
						</p>
					</div>
				) }
			</div>
		);
	}
}

export default WoostifyBaseControl;
