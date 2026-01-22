import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties, Fragment } from "react";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	FONT_SIZES_DEMO,
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "./types";
import {
	CustomSelectControl,
	FontSizePicker,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import SelectFontAppearance, {
	FONT_APPEARANCE_OPTIONS,
} from "../SelectFontAppearance";
import MyTextDecorationControl from "../MyTextDecorationControl/MyTextDecorationControl";
import MyTextTransformControl from "../MyTextTransformControl/MyTextTransformControl";
import WcbFontFamilyPicker from "../WcbFontFamilyPicker/WcbFontFamilyPicker";
import MyDisclosure from "../MyDisclosure";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";

interface Props {
	className?: string;
	typographyControl: MyTypographyControlData;
	setAttrs__typography: (data: MyTypographyControlData) => void;
	label?: string;
	disclosureDefaultOpen?: boolean;
}

const MyTypographyControl: FC<Props> = ({
	className = "space-y-5",
	typographyControl = TYPOGRAPHY_CONTROL_DEMO,
	setAttrs__typography = () => {},
	label = "Typography",
	disclosureDefaultOpen,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		fontSizes: fontSizesProps,
		appearance,
		textDecoration,
		textTransform,
		lineHeight: lineHeightProps,
		letterSpacing: letterSpacingProps,
		fontFamily,
	} = typographyControl;

	const { currentDeviceValue: FONT_SIZE } = getValueFromAttrsResponsives(
		fontSizesProps,
		deviceType
	);

	const { currentDeviceValue: LINE_HEIGHT } = getValueFromAttrsResponsives(
		lineHeightProps,
		deviceType
	);

	const { currentDeviceValue: LETTER_SPACING } = getValueFromAttrsResponsives(
		letterSpacingProps,
		deviceType
	);

	//
	const handleChangeFontFamily = (newFont?: string) => {
		setAttrs__typography({
			...typographyControl,
			fontFamily: newFont,
		});
	};

	const handleChangeFontAppearance = (
		value?: CustomSelectControl.Option | null
	) => {
		setAttrs__typography({
			...typographyControl,
			appearance: value || FONT_APPEARANCE_OPTIONS[0],
		});
	};
	const handleChangeTextDecoration = (
		value?: CSSProperties["textDecoration"]
	) => {
		setAttrs__typography({
			...typographyControl,
			textDecoration: value,
		});
	};
	const handleChangeTextTransform = (
		value?: CSSProperties["textTransform"]
	) => {
		setAttrs__typography({
			...typographyControl,
			textTransform: value,
		});
	};
	const handleChangeLineHeight = (value?: CSSProperties["lineHeight"]) => {
		setAttrs__typography({
			...typographyControl,
			lineHeight: {
				...lineHeightProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeLetterSpacing = (
		value?: CSSProperties["letterSpacing"]
	) => {
		setAttrs__typography({
			...typographyControl,
			letterSpacing: {
				...letterSpacingProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeFontSize = (newFontSize?: string) => {
		setAttrs__typography({
			...typographyControl,
			fontSizes: {
				...fontSizesProps,
				[deviceType]: newFontSize,
			},
		});
	};
	//
	const renderFontFamily = () => {
		return (
			<div>
				<WcbFontFamilyPicker
					selectedFont={fontFamily}
					onChangeFontFamily={handleChangeFontFamily}
				/>
			</div>
		);
	};
	//
	const renderFontsizePicker = () => {
		return (
			<div className="relative">
				<MyLabelControl
					className="flex absolute right-8 -top-0.5 z-10"
					hasResponsive
					children=""
				/>
				<FontSizePicker
					// @ts-ignore
					__nextHasNoMarginBottom
					// @ts-ignore
					fontSizes={FONT_SIZES_DEMO}
					// @ts-ignore
					value={FONT_SIZE}
					fallbackFontSize={16}
					// @ts-ignore
					onChange={handleChangeFontSize}
				/>
			</div>
		);
	};

	const renderAppearance = () => {
		return (
			<SelectFontAppearance
				onChange={({ selectedItem }) =>
					handleChangeFontAppearance(selectedItem)
				}
				value={appearance}
			/>
		);
	};

	const renderLineHeight = () => {
		return (
			<div className="flex justify-between space-x-3 items-center">
				<MyLabelControl
					hasResponsive
					className="flex-shrink-0"
					children={__("Line height", "boostify-blocks")}
				/>
				<NumberControl
					onChange={handleChangeLineHeight}
					value={LINE_HEIGHT}
					step={0.1}
					min={0}
					max={100}
					placeholder={__("1.5", "boostify-blocks")}
				/>
			</div>
		);
	};

	const renderLetterSpacing = () => {
		return (
			<div className="flex justify-between space-x-3 items-center">
				<MyLabelControl
					hasResponsive
					className="flex-shrink-0"
					children={__("Letter spacing", "boostify-blocks")}
				/>
				<UnitControl
					onChange={handleChangeLetterSpacing}
					value={LETTER_SPACING}
					units={[
						{ value: "px", label: "px", default: 0 },
						{ value: "%", label: "%", default: 0 },
						{ value: "em", label: "em", default: 0 },
					]}
				/>
			</div>
		);
	};

	return (
		<MyDisclosure defaultOpen={disclosureDefaultOpen} label={label}>
			<div className={className}>
				{renderFontFamily()}
				{renderFontsizePicker()}
				{renderAppearance()}
				<MyTextDecorationControl
					value={textDecoration}
					onChange={handleChangeTextDecoration}
				/>
				<MyTextTransformControl
					value={textTransform}
					onChange={handleChangeTextTransform}
				/>
				{renderLineHeight()}
				{renderLetterSpacing()}
			</div>
		</MyDisclosure>
	);
};

export default MyTypographyControl;
