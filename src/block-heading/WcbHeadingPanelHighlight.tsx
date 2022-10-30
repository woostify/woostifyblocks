import {
	FormToggle,
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { EditProps } from "../block-container/Edit";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { WcbBlokcHeadingAttrs } from "./attributes";

const WcbHeadingPanelHighlight: FC<EditProps<WcbBlokcHeadingAttrs>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = attributes.general_content;
	const TEXT_ALIGNMENT =
		textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

	//

	//

	return (
		<PanelBody initialOpen={false} title={__("Highlight", "wcb")}>
			<div className="space-y-2.5">
				<MyTypographyControl
				// typographyControl={styles_typography}
				// setAttrs__typography={(data) =>
				// 	setAttributes({ styles_typography: data })
				// }
				/>
				<MyDisclosure label="Custom styles">
					<MyColorPicker
						label="Background"
						// textColorControl={styles_textColor}
						// setAttrs__textColorControl={(data) =>
						// 	setAttributes({ styles_textColor: data })
						// }
					/>
					<MyColorPicker
						label="Color"
						// textShadowControl={styles_textShadow}
						// setAttrs__textShadow={(data) =>
						// 	setAttributes({ styles_textShadow: data })
						// }
					/>
					<BoxControl
						label={
							<MyLabelControl hasResponsive>
								{__("Padding", "wcb")}
							</MyLabelControl>
						}
						// values={padding}
						// onChange={handleChangePadding}
					/>
				</MyDisclosure>
				<MyDisclosure label="Border">
					<MyBorderControl />
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelHighlight;
