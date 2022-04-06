import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl, RangeControl } from '@wordpress/components';

import WoostifyFontFamilyPicker from '../font-family-picker';
import WoostifyBaseControl from '../base';

import { getDeviceSuffix } from '../../get-device-type';

import { useState, useEffect, useCallback } from 'react';

const WoostifyTypographyControl = (props) => {
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

	const deviceSuffix = getDeviceSuffix();

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
				{...props}
				selectedFont={attributes[attrFontFamily]}
				onChangeFontFamily={(val) => {
					setAttributes({ [attrFontFamily]: val });
				}}
			/>
			<WoostifyBaseControl
				label={__('Size', 'woostify-block')}
				responsive={['desktop', 'tablet', 'mobile']}
				units={fontSizeUnits || ['px', 'em']}
				selectedUnit={attributes[attrFontSizeUnit + deviceSuffix]}
				onUnitClick={(unit) => {
					setAttributes({
						[attrFontSizeUnit + deviceSuffix]: unit,
					});
				}}
			>
				<RangeControl
					value={
						selectedFontSize['selectedFontSize' + deviceSuffix] ||
						attributes[attrFontSize + deviceSuffix]
					}
					min={0}
					onChange={(val) => {
						setSelectedFontSize({
							...selectedFontSize,
							['selectedFontSize' + deviceSuffix]: val,
						});
						setAttributes({ [attrFontSize + deviceSuffix]: val });
					}}
					max={200}
					allowReset={true}
				/>
			</WoostifyBaseControl>
			<SelectControl
				value={selectedFontWeight || attributes[attrFontWeight]}
				label={__('Weight', 'woostify-block')}
				options={fontWeightList}
				onChange={(val) => {
					setSelectedFontWeight(val);
					setAttributes({ [attrFontWeight]: val });
				}}
			/>
			<SelectControl
				value={selectedTextTransform || attributes[attrTextTransform]}
				label={__('Transform', 'woostify-block')}
				options={textTransformList}
				onChange={(val) => {
					setSelectedTextTransform(val);
					setAttributes({ [attrTextTransform]: val });
				}}
			/>
			<SelectControl
				value={selectedFontStyle || attributes[attrFontStyle]}
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
					setSelectedFontStyle(val);
					setAttributes({ [attrFontStyle]: val });
				}}
			/>
			<WoostifyBaseControl
				label={__('Line-Height', 'woostify-block')}
				responsive={['desktop', 'tablet', 'mobile']}
				units={lineHeightUnits || ['px', 'em']}
				selectedUnit={attributes[attrLineHeightUnit + deviceSuffix]}
				onUnitClick={(unit) => {
					setAttributes({
						[attrLineHeightUnit + deviceSuffix]: unit,
					});
				}}
			>
				<RangeControl
					value={
						selectedLineHeight[
							'selectedLineHeight' + deviceSuffix
						] || attributes[attrLineHeight + deviceSuffix]
					}
					min={0}
					onChange={(val) => {
						setSelectedLineHeight({
							...selectedLineHeight,
							['selectedLineHeight' + deviceSuffix]: val,
						});
						setAttributes({
							[attrLineHeight + deviceSuffix]: val,
						});
					}}
					max={200}
					allowReset={true}
				/>
			</WoostifyBaseControl>
			<WoostifyBaseControl
				label={__('Letter Spacing', 'woostify-block')}
				responsive={['desktop', 'tablet', 'mobile']}
			>
				<RangeControl
					value={
						selectedLetterSpacing[
							'selectedLetterSpacing' + deviceSuffix
						] || attributes[attrLetterSpacing + deviceSuffix]
					}
					min={0}
					onChange={(val) => {
						setSelectedLetterSpacing({
							...selectedLetterSpacing,
							['selectedLetterSpacing' + deviceSuffix]: val,
						});
						setAttributes({
							[attrLetterSpacing + deviceSuffix]: val,
						});
					}}
					max={100}
					step={0.1}
					allowReset={true}
				/>
			</WoostifyBaseControl>
		</Fragment>
	);
};

export default WoostifyTypographyControl;
