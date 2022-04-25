import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl, RangeControl } from '@wordpress/components';

import WoostifyFontFamilyPicker from '../font-family-picker';
import WoostifyBaseControl from '../base';

import { getDeviceSuffix } from '../../get-device-type';
import ResponsiveDisplay from '../../responsive-display';

import { useState, useEffect, useCallback } from 'react';

const WCBTypographyControl = (props) => {
	const [selectedFontWeight, setSelectedFontWeight] = useState('');
	const [selectedTextTransform, setSelectedTextTransform] = useState('');
	const [selectedFontStyle, setSelectedFontStyle] = useState('');
	const [selectedLineHeight, setSelectedLineHeight] = useState({
		selectedLineHeight: '',
		selectedLineHeightTablet: '',
		selectedLineHeightMobile: '',
	});
	const [selectedFontSize, setSelectedFontSize] = useState({
		selectedFontSize: '',
		selectedFontSizeTablet: '',
		selectedFontSizeMobile: '',
	});
	const [selectedLetterSpacing, setSelectedLetterSpacing] = useState({
		selectedLetterSpacing: '',
		selectedLetterSpacingTablet: '',
		selectedLetterSpacingMobile: '',
	});

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

	const {
		attributes,
		setAttributes,
		attrFontFamily,
		attrFontWeight,
		attrTextTransform,
		attrFontStyle,
		attrLineHeight,
		attrLineHeightUnit,
		attrFontSize,
		attrFontSizeUnit,
		fontSizeUnits,
		lineHeightUnits,
		attrLetterSpacing,
	} = props;

	return (
		<Fragment>
			<WoostifyFontFamilyPicker
				selectedFont={props.fontFamily}
				onChange={props.onChangeFontFamily}
			/>
			<ResponsiveDisplay>
				<WoostifyBaseControl
					label={__('Size', 'woostify-block')}
					responsive={['desktop', 'tablet', 'mobile']}
					units={props.fontSizeUnits || ['px', 'em']}
					selectedUnit={props.fontSizeUnit}
					onUnitClick={props.onChangeFontSizeUnit}
				>
					<RangeControl
						value={props.fontSize}
						min={0}
						onChange={(val) => {
							setSelectedFontSize({
								...selectedFontSize,
								['selectedFontSize']: val,
							});
							props.onChangeFontSize;
						}}
						max={200}
						allowReset={true}
					/>
				</WoostifyBaseControl>
			</ResponsiveDisplay>
		</Fragment>
	);
};

export default WCBTypographyControl;
