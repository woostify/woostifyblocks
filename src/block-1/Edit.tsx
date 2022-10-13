import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { Blokc1Attrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import WithBackgroundSettings from "../components/WithBackgroundSettings";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import "./editor.scss";
import getBorderStyleBySettings from "../components/controls/MyBorderControl/getBorderStyleBySettings";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export type EditProps<T> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
};

const Edit: FC<EditProps<Blokc1Attrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	useEffect(() => {
		setAttributes({
			uniqueId: clientId.substring(2, 9).replace("-", ""),
		});
	}, []);
	//

	const renderPanelColor = () => {
		return (
			<PanelBody initialOpen={false} className="" title={__("Color", "wcb")}>
				<MyColorPicker
					onChange={(color) => setAttributes({ styles_color: color })}
					color={attributes.styles_color}
				/>
			</PanelBody>
		);
	};

	const renderPanelBackground = () => {
		return (
			<PanelBody initialOpen={false} title={__("Background", "wcb")}>
				<MyBackgroundControl
					backgroundControl={attributes.styles_background}
					setAttrs__backgroundControl={(data) =>
						setAttributes({ styles_background: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderPanelBorder = () => {
		// const borderStyles = getBorderStyleBySettings({
		// 	deviceType,
		// 	...attributes.styles_border,
		// });

		return (
			<PanelBody
				initialOpen={false}
				className="space-y-2.5"
				title={__("Border", "wcb")}
			>
				<MyBorderControl
					borderControl={attributes.styles_border}
					setAttrs__border={(data) => setAttributes({ styles_border: data })}
				/>
			</PanelBody>
		);
	};

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "Styles":
				return (
					<>
						{renderPanelBackground()}
						{renderPanelColor()}
						{renderPanelBorder()}
					</>
				);

			default:
				return <div></div>;
		}
	};

	return (
		<div {...useBlockProps()}>
			<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />
			<WithBackgroundSettings
				backgroundControlAttrs={attributes.styles_background}
			>
				<RichText
					tagName="h2"
					className="wcb-text "
					value={attributes.message}
					onChange={(val) => setAttributes({ message: val })}
				/>
			</WithBackgroundSettings>
		</div>
	);
};

export default Edit;
