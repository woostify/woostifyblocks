import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl, RangeControl } from '@wordpress/components';

import WoostifyFontFamilyPicker from '../font-family-picker';
import WoostifyBaseControl from '../base';

class WoostifyTypographyControl extends Component {
	constructor(props) {
		super(...arguments);

		this.state = {
			selectedFontWeight: '',
			selectedTextTransform: '',
			selectedFontStyle: '',
			selectedLineHeight: '',
			selectedLineHeightTablet: '',
			selectedLineHeightMobile: '',
			selectedFontSize: '',
			selectedFontSizeTablet: '',
			selectedFontSizeMobile: '',
			selectedLetterSpacing: '',
			selectedLetterSpacingTablet: '',
			selectedLetterSpacingMobile: '',
		};
	}

	getDeviceSuffix() {
		let deviceSuffix = '';
		let currDevice = this.props.deviceType;
		if ('Tablet' === currDevice) {
			deviceSuffix = 'Tablet';
		}
		if ('Mobile' === currDevice) {
			deviceSuffix = 'Mobile';
		}

		return deviceSuffix;
	}

	render() {
		const {
			attributes,
			setAttributes,
			attrFontFamily,
			attrFontWeight,
			attrTextTransform,
			attrFontStyle,
			deviceType,
			setDeviceType,
			attrLineHeight,
			attrLineHeightUnit,
			attrFontSize,
			attrFontSizeUnit,
			fontSizeUnits,
			lineHeightUnits,
			attrLetterSpacing,
		} = this.props;

		const fontWeightList = [
			{ label: '100', value: '100' },
			{ label: '200', value: '200' },
			{ label: '300', value: '300' },
			{ label: '400', value: '400' },
			{ label: '500', value: '500' },
			{ label: '600', value: '600' },
			{ label: '700', value: '700' },
			{ label: '800', value: '800' },
			{ label: '900', value: '900' },
			{ label: __('Default', 'woostify-block'), value: '' },
			{ label: __('Normal', 'woostify-block'), value: 'normal' },
			{ label: __('Bold', 'woostify-block'), value: 'bold' },
		];

		const textTransformList = [
			{ label: __('Default', 'woostify-block'), value: '' },
			{ label: __('Uppercase', 'woostify-block'), value: 'uppercase' },
			{ label: __('Lowercase', 'woostify-block'), value: 'lowercase' },
			{
				label: __('Capitalize', 'woostify-block'),
				value: 'capitalize',
			},
			{ label: __('Normal', 'woostify-block'), value: 'none' },
		];

		return (
			<Fragment>
				<WoostifyFontFamilyPicker
					{...this.props}
					selectedFont={attributes[attrFontFamily]}
					onChangeFontFamily={(val) => {
						setAttributes({ [attrFontFamily]: val });
					}}
				/>
				<WoostifyBaseControl
					label={__('Size', 'woostify-block')}
					responsive={['desktop', 'tablet', 'mobile']}
					units={fontSizeUnits || ['px', 'em']}
					selectedDevice={deviceType}
					selectedUnit={
						attributes[attrFontSizeUnit + this.getDeviceSuffix()]
					}
					onResponsiveToggleClick={(device) => setDeviceType(device)}
					onUnitClick={(unit) => {
						setAttributes({
							[attrFontSizeUnit + this.getDeviceSuffix()]: unit,
						});
					}}
				>
					<RangeControl
						value={
							this.state[
								'selectedFontSize' + this.getDeviceSuffix()
							] ||
							attributes[attrFontSize + this.getDeviceSuffix()]
						}
						min={0}
						onChange={(val) => {
							this.setState({
								['selectedFontSize' + this.getDeviceSuffix()]:
									val,
							});
							setAttributes({
								[attrFontSize + this.getDeviceSuffix()]: val,
							});
						}}
						max={200}
						allowReset={true}
					/>
				</WoostifyBaseControl>
				<SelectControl
					value={
						this.state.selectedFontWeight ||
						attributes[attrFontWeight]
					}
					label={__('Weight', 'woostify-block')}
					options={fontWeightList}
					onChange={(val) => {
						this.setState({ selectedFontWeight: val });
						setAttributes({ [attrFontWeight]: val });
					}}
				/>
				<SelectControl
					value={
						this.state.selectedTextTransform ||
						attributes[attrTextTransform]
					}
					label={__('Transform', 'woostify-block')}
					options={textTransformList}
					onChange={(val) => {
						this.setState({ selectedTextTransform: val });
						setAttributes({ [attrTextTransform]: val });
					}}
				/>
				<SelectControl
					value={
						this.state.selectedFontStyle ||
						attributes[attrFontStyle]
					}
					label={__('Style', 'woostify-block')}
					options={[
						{ label: __('Default', 'woostify-block'), value: '' },
						{
							label: __('Normal', 'woostify-block'),
							value: 'normal',
						},
						{
							label: __('Italic', 'woostify-block'),
							value: 'italic',
						},
						{
							label: __('Oblique', 'woostify-block'),
							value: 'oblique',
						},
					]}
					onChange={(val) => {
						this.setState({ selectedFontStyle: val });
						setAttributes({ [attrFontStyle]: val });
					}}
				/>
				<WoostifyBaseControl
					label={__('Line-Height', 'woostify-block')}
					responsive={['desktop', 'tablet', 'mobile']}
					units={lineHeightUnits || ['px', 'em']}
					selectedDevice={deviceType}
					selectedUnit={
						attributes[attrLineHeightUnit + this.getDeviceSuffix()]
					}
					onResponsiveToggleClick={(device) => setDeviceType(device)}
					onUnitClick={(unit) => {
						console.log(unit);
						setAttributes({
							[attrLineHeightUnit + this.getDeviceSuffix()]: unit,
						});
					}}
				>
					<RangeControl
						value={
							this.state[
								'selectedLineHeight' + this.getDeviceSuffix()
							] ||
							attributes[attrLineHeight + this.getDeviceSuffix()]
						}
						min={0}
						onChange={(val) => {
							this.setState({
								['selectedLineHeight' + this.getDeviceSuffix()]:
									val,
							});
							setAttributes({
								[attrLineHeight + this.getDeviceSuffix()]: val,
							});
						}}
						max={200}
						allowReset={true}
					/>
				</WoostifyBaseControl>
				<WoostifyBaseControl
					label={__('Letter Spacing', 'woostify-block')}
					responsive={['desktop', 'tablet', 'mobile']}
					selectedDevice={deviceType}
					onResponsiveToggleClick={(device) => setDeviceType(device)}
				>
					<RangeControl
						value={
							this.state[
								'selectedLetterSpacing' + this.getDeviceSuffix()
							] ||
							attributes[
								attrLetterSpacing + this.getDeviceSuffix()
							]
						}
						min={0}
						onChange={(val) => {
							this.setState({
								['selectedLetterSpacing' +
								this.getDeviceSuffix()]: val,
							});
							setAttributes({
								[attrLetterSpacing + this.getDeviceSuffix()]:
									val,
							});
						}}
						max={100}
						step={0.1}
						allowReset={true}
					/>
				</WoostifyBaseControl>
			</Fragment>
		);
	}
}

export default WoostifyTypographyControl;
