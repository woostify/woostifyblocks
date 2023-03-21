import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import { WCB_PRODUCTS_PANEL_FEATURED_IMAGE } from "./WcbProductsPanelFeaturedImage";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE {
	marginBottom: HasResponsive<string>;
	backgroundOverlay: string;
	border: MyBorderControlData;
}

export const WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE =
	{
		marginBottom: { Desktop: "0.75rem" },
		backgroundOverlay: "#FFFFFFE6",
		border: MY_BORDER_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE;
	setAttr__: (data: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE) => void;
	imagePosition: WCB_PRODUCTS_PANEL_FEATURED_IMAGE["featuredImagePosition"];
}

const WcbProductsPanel_StyleFeaturedImage: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
	imagePosition = "",
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { marginBottom, backgroundOverlay } = panelData;

	const { currentDeviceValue: MARGIN_BOTTOM } = getValueFromAttrsResponsives(
		marginBottom,
		deviceType
	);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Product image", "wcb")}
		>
			<div className="space-y-5">
				{/* {imagePosition === "background" && (
					<MyColorPicker
						label={__("Background overlay", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								backgroundOverlay: color,
							});
						}}
						color={backgroundOverlay}
					/>
				)} */}

				{imagePosition !== "background" && (
					<>
						<MyDisclosure defaultOpen label="Border">
							<MyBorderControl
								borderControl={panelData.border}
								setAttrs__border={(value) => {
									setAttr__({
										...panelData,
										border: value,
									});
								}}
							/>
						</MyDisclosure>
						<MyUnitControl
							onChange={(value) => {
								setAttr__({
									...panelData,
									marginBottom: {
										...marginBottom,
										[deviceType]: value,
									},
								});
							}}
							value={MARGIN_BOTTOM || ""}
							units={MY_GAP_UNITS}
							label={__("Margin bottom", "wcb")}
							hasResponsive
							className="flex-col space-y-2"
						/>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanel_StyleFeaturedImage;
