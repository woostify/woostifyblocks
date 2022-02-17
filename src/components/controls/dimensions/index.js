import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';

import { Tooltip, Button, Dashicon } from '@wordpress/components';

class WoostifyDimensionsControl extends Component {
	constructor( props ) {
		super( ...arguments );
		this.props = props;
		this.state = {
			isLinkedValues: false,
		};

		this.onReset = this.onReset.bind( this );
		this.onChangeAttr = this.onChangeAttr.bind( this );
		this.onChangeAttr = this.onChangeAttr.bind( this );
		this.onChangeLinkedValues = this.onChangeLinkedValues.bind( this );
	}

	onReset( type ) {
		this.props.setAttributes( { [ this.props[ type ] ]: '' } );
	}

	onChangeAttr( value, attr ) {
		this.props.setAttributes( { [ this.props[ attr ] ]: value } ); // eslint-disable-line dot-notation
		this.setLinkedValues( value );
	}

	setLinkedValues( value ) {
		if ( this.state.isLinkedValues ) {
			this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: value } );
			this.props.setAttributes( {
				[ this.props[ 'attrBottom' ] ]: value,
			} );
			this.props.setAttributes( {
				[ this.props[ 'attrRight' ] ]: value,
			} );
			this.props.setAttributes( { [ this.props[ 'attrLeft' ] ]: value } );
		}
	}

	onChangeLinkedValues() {
		this.setState( { isLinkedValues: ! this.state.isLinkedValues } );
	}

	render() {
		const {
			attributes,
			type = 'margin',
			attrTop,
			attrRight,
			attrBottom,
			attrLeft,
			attrUnit,
			labelTop = __( 'Top', 'woostify-block' ),
			labelRight = __( 'Right', 'woostify-block' ),
			labelBottom = __( 'Bottom', 'woostify-block' ),
			labelLeft = __( 'Left', 'woostify-block' ),
			device,
		} = this.props;

		const onChangeInputValue = ( event, attr ) => {
			let newValue = event.target.value;

			if ( 'padding' === type ) {
				// No negative values allowed here.
				newValue = newValue.toString().replace( /-/g, '' );
			}

			if ( '' === newValue ) {
				this.onReset( attr );
				return;
			}

			this.onChangeAttr( newValue, attr );
		};

		return (
			<Fragment>
				<div className="wb-dimensions-control-inputs">
					<input
						className="wb-dimensions-control-input-number"
						type="number"
						value={
							attributes[ attrTop ] ? attributes[ attrTop ] : ''
						}
						min={ type === 'padding' ? 0 : undefined }
						data-attribute={ type }
						onChange={ ( val ) =>
							onChangeInputValue( val, 'attrTop' )
						}
					/>
					<input
						className="wb-dimensions-control-input-number"
						type="number"
						value={
							attributes[ attrRight ]
								? attributes[ attrRight ]
								: ''
						}
						min={ type === 'padding' ? 0 : undefined }
						data-attribute={ type }
						onChange={ ( val ) =>
							onChangeInputValue( val, 'attrRight' )
						}
					/>
					<input
						className="wb-dimensions-control-input-number"
						type="number"
						value={
							attributes[ attrBottom ]
								? attributes[ attrBottom ]
								: ''
						}
						min={ type === 'padding' ? 0 : undefined }
						data-attribute={ type }
						onChange={ ( val ) =>
							onChangeInputValue( val, 'attrBottom' )
						}
					/>
					<input
						className="wb-dimensions-control-input-number"
						type="number"
						value={
							attributes[ attrLeft ] ? attributes[ attrLeft ] : ''
						}
						min={ type === 'padding' ? 0 : undefined }
						data-attribute={ type }
						onChange={ ( val ) =>
							onChangeInputValue( val, 'attrLeft' )
						}
					/>
					<Tooltip
						text={ __( 'Link values together', 'woostify-block' ) }
					>
						<Button
							isSmall
							isPrimary={ this.state.isLinkedValues }
							onClick={ this.onChangeLinkedValues }
						>
							<Dashicon icon="admin-links" />
						</Button>
					</Tooltip>
				</div>
				<div className="wb-dimensions-control-labels">
					<span className="wb-dimensions-control-input-label">
						{ labelTop }
					</span>
					<span className="wb-dimensions-control-input-label">
						{ labelRight }
					</span>
					<span className="wb-dimensions-control-input-label">
						{ labelBottom }
					</span>
					<span className="wb-dimensions-control-input-label">
						{ labelLeft }
					</span>
					<span className="wb-dimensions-control-input-label blank"></span>
				</div>
			</Fragment>
		);
	}
}

export default WoostifyDimensionsControl;
