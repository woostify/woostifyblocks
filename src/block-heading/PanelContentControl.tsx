import { FormToggle, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { EditProps } from "../block-container/Edit";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { WcbBlokcHeadingAttrs } from "./attributes";

const PanelContentControl: FC<EditProps<WcbBlokcHeadingAttrs>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = attributes.general_content;
	const TEXT_ALIGNMENT =
		textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

	//
	const handleChangeTextAlignment = (select: CSSProperties["textAlign"]) => {};
	const handleChangeTag = (select: keyof JSX.IntrinsicElements) => {};
	const toggleSubHeading = (checked: React.FormEvent<HTMLInputElement>) => {};
	const toggleSeparator = (checked: React.FormEvent<HTMLInputElement>) => {};
	//

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={false}
			title={__("Content", "wcb")}
		>
			<MyTextAlignControl
				textAlignment={TEXT_ALIGNMENT}
				onChange={handleChangeTextAlignment}
			/>
			{/*  */}
			<MyHeadingTagControl tag={undefined} onChange={handleChangeTag} />
			{/*  */}
			<div className="flex justify-between items-center">
				<p>{__("Sub heading", "wcb")}</p>
				<FormToggle
					// checked={isHiddenOnDesktop}
					onChange={toggleSubHeading}
				/>
			</div>
			{/*  */}
			<div className="flex justify-between items-center">
				<p>{__("Separator", "wcb")}</p>
				<FormToggle
					// checked={isHiddenOnDesktop}
					onChange={toggleSeparator}
				/>
			</div>
		</PanelBody>
	);
};

export default PanelContentControl;
