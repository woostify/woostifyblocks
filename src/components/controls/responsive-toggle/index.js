import { getDeviceType } from '../../get-device-type';

import IconToggleControl from './../icon-toggle';

import { __ } from '@wordpress/i18n';
import { useCallback, memo, useMemo } from '@wordpress/element';

import { dispatch } from '@wordpress/data';

const DEVICE_TYPES = {
	desktop: 'Desktop',
	tablet: 'Tablet',
	mobile: 'Mobile',
};

const DEVICE_TYPES_OPTIONS = [
	{
		label: __('Desktop', 'woostify-block'),
		value: 'desktop',
		icon: 'desktop',
	},
	{
		label: __('Tablet', 'woostify-block'),
		value: 'tablet',
		icon: 'tablet',
	},
	{
		label: __('Mobile', 'woostify-block'),
		value: 'mobile',
		icon: 'smartphone',
	},
];

const ResponsiveToggle = (props) => {
	const deviceType = getDeviceType();

	const setDeviceType = useCallback((device) => {
		const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } =
			dispatch('core/edit-post');

		setPreviewDeviceType(DEVICE_TYPES[device]);
	}, []);

	const devices = useMemo(() => {
		return DEVICE_TYPES_OPTIONS.filter(({ value }) =>
			props.devices?.includes(value)
		);
	}, [props.devices]);

	if (devices <= 1) {
		return null;
	}

	if (!deviceType) {
		return null;
	}

	return (
		<IconToggleControl
			value={deviceType}
			options={devices}
			onChange={(device) => setDeviceType(device)}
			buttonsLabel={true}
		/>
	);
};
export default memo(ResponsiveToggle);