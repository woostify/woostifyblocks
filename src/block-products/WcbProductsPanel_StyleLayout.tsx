import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyDimensionsNoMarginControl from "../components/controls/MyDimensionsControl/MyDimensionsNoMarginControl";
import {
	MyDimensionsNoMarginControlData,
	MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import HelpText from "../components/controls/HelpText";
import MyDisclosure from "../components/controls/MyDisclosure";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export interface WCB_PRODUCTS_PANEL_STYLE_LAYOUT
	extends MyDimensionsNoMarginControlData {
	textAlignment: TextAlignment;
	backgroundColor: string;
	numberOfColumn: HasResponsive<number>;
	// peekAfter - The value of the future viewports which have to be visible in the current view
	peekAfter: HasResponsive<string>;
	isEqualHeight: boolean;
	swithToScrollSnapX: ResponsiveDevices | "None";
}

export const WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO: WCB_PRODUCTS_PANEL_STYLE_LAYOUT =
	{
		...MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
		textAlignment: "center",
		backgroundColor: "",
		padding: {
			Desktop: {
				bottom: "",
				top: "",
				left: "",
				right: "",
			},
		},
		numberOfColumn: { Desktop: 3, Mobile: 2, Tablet: 2 },
		peekAfter: { Desktop: "2rem", Tablet: "2rem", Mobile: "2rem" },
		swithToScrollSnapX: "None",
		isEqualHeight: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	setAttr__: (data: WCB_PRODUCTS_PANEL_STYLE_LAYOUT) => void;
}

const WcbProductsPanel_StyleLayout: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: currentNumberOfColumn } =
		getValueFromAttrsResponsives(panelData.numberOfColumn, deviceType);
	const { currentDeviceValue: currentPeekAfter } = getValueFromAttrsResponsives(
		panelData.peekAfter,
		deviceType
	);

	const { textAlignment, backgroundColor, colunmGap, padding, rowGap } =
		panelData;

	const SNAPX_POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_STYLE_LAYOUT["swithToScrollSnapX"]
	>[] = [
		{ name: "Desktop", icon: "Desktop" },
		{ name: "Tablet", icon: "Tablet" },
		{ name: "Mobile", icon: "Mobile" },
		{ name: "None", icon: "None" },
	];
	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: selected,
		});
	};

	const handleChangeBgColor = (color: string) => {
		setAttr__({
			...panelData,
			backgroundColor: color,
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={textAlignment}
					onChange={handleChangeTextAlignment}
					hasResponsive={false}
				/>

				<MyColorPicker
					label={__("Background color", "wcb")}
					onChange={handleChangeBgColor}
					color={backgroundColor}
				/>

				{/*  */}
				<RangeControl
					label={
						<MyLabelControl hasResponsive>
							{__("Columns", "wcb")}
						</MyLabelControl>
					}
					value={currentNumberOfColumn || 1}
					onChange={(number) => {
						setAttr__({
							...panelData,
							numberOfColumn: {
								...panelData.numberOfColumn,
								[deviceType]: number || 2,
							},
						});
					}}
					min={1}
					max={6}
					required
				/>

				<MyDisclosure label="Swith to scroll-snap-x" defaultOpen>
					<div>
						<MyRadioGroup
							label="Swith to scroll-snap-x"
							onChange={(selected) =>
								setAttr__({
									...panelData,
									swithToScrollSnapX: selected as any,
								})
							}
							value={panelData.swithToScrollSnapX}
							plans={SNAPX_POSTION_PLANS}
							hasResponsive={false}
							isWrap={false}
						/>
						<HelpText>
							{__(
								"Device selection to start switching from layout GRID to layout is a scroll able row.",
								"wcb"
							)}
						</HelpText>
					</div>
					{/*  */}

					{panelData.swithToScrollSnapX !== "None" && (
						<div>
							<MySpacingSizesControl
								hasResponsive
								onChange={(value) => {
									setAttr__({
										...panelData,
										peekAfter: {
											...panelData.peekAfter,
											[deviceType]: value,
										},
									});
								}}
								value={currentPeekAfter || "0"}
								label={__("Peek After", "wcb")}
							/>
							<HelpText>
								{__(
									"The value of the future viewports which have to be visible in the current view.",
									"wcb"
								)}
							</HelpText>
						</div>
					)}
				</MyDisclosure>

				<MyDimensionsNoMarginControl
					dimensionControl={{ colunmGap, padding, rowGap }}
					setAttrs__dimensions={(data) => {
						setAttr__({
							...panelData,
							...data,
						});
					}}
					paddingLabel={__("Padding content", "wcb")}
				/>

				<ToggleControl
					label={__("Equal height", "wcb")}
					checked={panelData.isEqualHeight}
					onChange={(checked) => {
						setAttr__({ ...panelData, isEqualHeight: checked });
					}}
					help={__(
						"The product cards will have the same height, suitable when you set the border or background",
						"wcb"
					)}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanel_StyleLayout;
