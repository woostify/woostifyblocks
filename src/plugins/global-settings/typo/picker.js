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
			<WoostifyButtonPopoverControl
				buttonLabel={props.label}
				popoverHeading={null}
			>
				<WCBTypographyControl
					fontSizeUnits={['px', 'em', 'rem']}
					fontSize={value.fontSize}
					fontSizeTablet={value.fontSizeTablet}
					fontSizeMobile={value.fontSizeMobile}
					fontSizeUnit={value.fontSizeUnit}
					fontSizeUnitTablet={value.fontSizeUnitTablet}
					fontSizeUnitMobile={value.fontSizeUnitMobile}
					fontFamily={value.fontFamily}
					onChangeFontFamily={(value) =>
						handleOnChangeSetting('fontFamily', value)
					}
					onChangeFontSize={(value) =>
						handleOnChangeSetting('fontSize', value)
					}
					onChangeFontSizeTablet={(value) =>
						handleOnChangeSetting('fontSizeTablet', value)
					}
					onChangeFontSizeMobile={(value) =>
						handleOnChangeSetting('fontSizeMobile', value)
					}
					onChangeFontSizeUnit={(value) =>
						handleOnChangeSetting('fontSizeUnit', value)
					}
					onChangeFontSizeUnitTablet={(value) =>
						handleOnChangeSetting('fontSizeUnitTablet', value)
					}
					onChangeFontSizeUnitMobile={(value) =>
						handleOnChangeSetting('fontSizeUnitMobile', value)
					}
				/>
			</WoostifyButtonPopoverControl>
		</Fragment>
	);
};

export default WCBTypoPicker;
