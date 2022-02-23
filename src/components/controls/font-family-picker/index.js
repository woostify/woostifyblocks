import googleFonts from './google-fonts.json';

import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

class WoostifyFontFamilyPicker extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			fontFamily: this.props.selectedFont || '',
		};
	}

	render() {
		const { selectedFont, onSelectFont } = this.props;

		const fonts = [
			{ value: '', label: __( 'Select font', 'generateblocks' ) },
			{ value: 'Arial', label: 'Arial' },
			{ value: 'Helvetica', label: 'Helvetica' },
			{ value: 'Times New Roman', label: 'Times New Roman' },
			{ value: 'Georgia', label: 'Georgia' },
		];

		Object.keys( googleFonts ).forEach( ( k ) => {
			fonts.push( { value: k, label: k } );
		} );

		return (
			<Fragment>
				<SelectControl
					label="Font Family"
					value={ this.state.fontFamily }
					onChange={ ( newFont ) => {
						this.setState( { fontFamily: newFont } );
						onSelectFont( newFont );
					} }
				>
					{ fonts.map( ( option, index ) => (
						<option
							key={ `${ option.label }-${ option.value }-${ index }` }
							value={ option.value }
						>
							{ option.label }
						</option>
					) ) }
				</SelectControl>
			</Fragment>
		);
	}
}

export default WoostifyFontFamilyPicker;
