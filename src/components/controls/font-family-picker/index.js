import googleFonts from './google-fonts.json';

import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

class WoostifyFontFamilyPicker extends Component {
	constructor(props) {
		super(...arguments);

		this.state = {
			fontFamily: this.props.selectedFont || '',
		};
	}

	render() {
		const { selectedFont, onChangeFontFamily } = this.props;

		const systemFonts = [
			{ value: 'Arial', label: 'Arial' },
			{ value: 'Helvetica', label: 'Helvetica' },
			{ value: 'Times New Roman', label: 'Times New Roman' },
			{ value: 'Georgia', label: 'Georgia' },
		];

		const googleFontsList = [];

		Object.keys(googleFonts).forEach((k) => {
			googleFontsList.push({ value: k, label: k });
		});

		return (
			<Fragment>
				<SelectControl
					label={__('Font Family', 'woostify-block')}
					value={this.state.fontFamily}
					onChange={(newFont) => {
						this.setState({ fontFamily: newFont });
						onChangeFontFamily(newFont);
					}}
				>
					<option value="">
						{__('Select font', 'woostify-block')}
					</option>
					{systemFonts.length > 0 && (
						<optgroup label={__('System fonts', 'woostify-block')}>
							{systemFonts.map((option, index) => (
								<option
									key={`${option.label}-${option.value}-${index}`}
									value={option.value}
								>
									{option.label}
								</option>
							))}
						</optgroup>
					)}
					{googleFontsList.length > 0 && (
						<optgroup label={__('Google fonts', 'woostify-block')}>
							{googleFontsList.map((option, index) => (
								<option
									key={`${option.label}-${option.value}-${index}`}
									value={option.value}
								>
									{option.label}
								</option>
							))}
						</optgroup>
					)}
				</SelectControl>
			</Fragment>
		);
	}
}

export default WoostifyFontFamilyPicker;
