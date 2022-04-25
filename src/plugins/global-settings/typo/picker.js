import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import WoostifyButtonPopoverControl from '../../../components/controls/button-popover';
import WCBTypographyControl from '../../../components/controls/typography';

const WCBTypoPicker = (props) => {
	const { value } = props;

	// On style change, gather all the styles then trigger the onChange.
	const handleOnChangeSetting = (style, value) => {
		const newStyles = {
			...props.value,
			[style]: value,
		};
		props.onChange(newStyles);
	};

	return (
		<Fragment>
			<WoostifyButtonPopoverControl popoverHeading={null}>
				<WCBTypographyControl
					fontFamily={value.fontFamily}
					onChangeFontFamily={(value) =>
						handleOnChangeSetting('fontFamily', value)
					}
				/>
			</WoostifyButtonPopoverControl>
		</Fragment>
	);
};

export default WCBTypoPicker;
