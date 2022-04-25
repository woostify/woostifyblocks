import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { SelectControl, RangeControl } from '@wordpress/components';

import WoostifyFontFamilyPicker from '../font-family-picker';
import WoostifyBaseControl from '../base';

import { getDeviceSuffix } from '../../get-device-type';

import { useState, useEffect, useCallback } from 'react';

const WCBTypographyControl = (props) => {
	return (
		<Fragment>
			<WoostifyFontFamilyPicker
				selectedFont={props.fontFamily}
				onChange={props.onChangeFontFamily}
				value={props.fontFamily}
			/>
		</Fragment>
	);
};

export default WCBTypographyControl;
