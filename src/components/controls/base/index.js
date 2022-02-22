import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

import { Tooltip, Button, Dashicon } from '@wordpress/components';

class WoostifyBaseControl extends Component {
	constructor( props ) {
		super( ...arguments );
		this.props = props;

		this.state = {
			showDevices: false,
		};
	}

	capitalizeFirstLetter( string ) {
		return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
	}

	showDevices() {
		this.setState( { showDevices: ! this.state.showDevices } );
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

		let currDeviceTooltip = __( 'Desktop', 'woostify-block' );
		if ( 'tablet' === selectedDevice.toLowerCase() ) {
			currDeviceTooltip = __( 'Tablet', 'woostify-block' );
		}
		if ( 'mobile' === selectedDevice.toLowerCase() ) {
			currDeviceTooltip = __( 'Mobile', 'woostify-block' );
		}

		return (
			<div className="components-base-control components-woostify-base-control">
				<div className="wb-control-label">
					<div className="wb-base-control__label">{ label }</div>
					{ !! responsive && Array.isArray( responsive ) && (
						<div className="wb-base-control__responsive">
							<Tooltip text={ currDeviceTooltip }>
								<Button
									className="wb-current-device"
									onClick={ () => this.showDevices() }
								>
									<Dashicon
										icon={
											'Mobile' === selectedDevice
												? 'smartphone'
												: selectedDevice.toLowerCase()
										}
									/>
								</Button>
							</Tooltip>
							{ this.state.showDevices && (
								<div className="wb-base-control-toggle__wrapper">
									{ responsive.map( ( v, i ) => {
										let device =
											'mobile' === v ? 'smartphone' : v;
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
											<Tooltip text={ tooltip }>
												<Button
													isPressed={
														this.capitalizeFirstLetter(
															v
														) === selectedDevice
															? true
															: false
													}
													onClick={ () => {
														this.showDevices();
														onResponsiveToggleClick(
															this.capitalizeFirstLetter(
																v
															)
														);
													} }
												>
													<Dashicon icon={ device } />
												</Button>
											</Tooltip>
										);
									} ) }
								</div>
							) }
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
