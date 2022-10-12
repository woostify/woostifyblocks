import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useState, useEffect, FC } from "react";
import "./editor.scss";
import { Blokc1Attrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCHasBackgroundSettings from "../components/HOCHasBackgroundSettings";

export type EditProps<T> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
};

const Edit: FC<EditProps<Blokc1Attrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	//
	useEffect(() => {
		setAttributes({
			uniqueId: clientId.substring(2, 9).replace("-", ""),
		});
	}, []);
	//

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody
					className="wcb-inspectorControls__panelBody"
					title={__("General Settings", "wcb")}
				>
					<div className="">
						<MyColorPicker
							onChange={(color) => setAttributes({ color })}
							color={attributes.color}
						/>
					</div>
					<div className="my-8">
						<MyBackgroundControl
							// -------- ALL ATTRIBUTES FOR BACKGROUND SETTINGS
							setBgType={(e) => setAttributes({ bgType: e })}
							setGradient={(e) => setAttributes({ gradient: e })}
							setColor={(e) => setAttributes({ bgColor: e })}
							setOverlayType={(e) => setAttributes({ overlayType: e })}
							setOverlayGradient={(e) => setAttributes({ overlayGradient: e })}
							setOverlayColor={(e) => setAttributes({ overlayColor: e })}
							setImageData_Desktop={(e) =>
								setAttributes({ imageData_Desktop: e })
							}
							setImageData_Tablet={(e) =>
								setAttributes({ imageData_Tablet: e })
							}
							setImageData_Mobile={(e) =>
								setAttributes({ imageData_Mobile: e })
							}
							setFocalPoint_Desktop={(e) =>
								setAttributes({ focalPoint_Desktop: e })
							}
							setFocalPoint_Tablet={(e) =>
								setAttributes({ focalPoint_Tablet: e })
							}
							setFocalPoint_Mobile={(e) =>
								setAttributes({ focalPoint_Mobile: e })
							}
							setBgImageAttachment_Desktop={(e) =>
								setAttributes({ bgImageAttachment_Desktop: e })
							}
							setBgImageAttachment_Tablet={(e) =>
								setAttributes({ bgImageAttachment_Tablet: e })
							}
							setBgImageAttachment_Mobile={(e) =>
								setAttributes({ bgImageAttachment_Mobile: e })
							}
							setBgImageRepeat_Desktop={(e) =>
								setAttributes({ bgImageRepeat_Desktop: e })
							}
							setBgImageRepeat_Tablet={(e) =>
								setAttributes({ bgImageRepeat_Tablet: e })
							}
							setBgImageRepeat_Mobile={(e) =>
								setAttributes({ bgImageRepeat_Mobile: e })
							}
							setBgImageSize_Desktop={(e) =>
								setAttributes({ bgImageSize_Desktop: e })
							}
							setBgImageSize_Tablet={(e) =>
								setAttributes({ bgImageSize_Tablet: e })
							}
							setBgImageSize_Mobile={(e) =>
								setAttributes({ bgImageSize_Mobile: e })
							}
							setVideoData={(e) => setAttributes({ videoData: e })}
							// {...attributes}
							bgImageAttachment_Desktop={attributes.bgImageAttachment_Desktop}
							bgImageAttachment_Mobile={attributes.bgImageAttachment_Mobile}
							bgImageAttachment_Tablet={attributes.bgImageAttachment_Tablet}
							bgImageRepeat_Mobile={attributes.bgImageRepeat_Mobile}
							bgImageRepeat_Desktop={attributes.bgImageRepeat_Desktop}
							bgImageRepeat_Tablet={attributes.bgImageRepeat_Tablet}
							bgImageSize_Desktop={attributes.bgImageSize_Desktop}
							bgImageSize_Mobile={attributes.bgImageSize_Mobile}
							bgImageSize_Tablet={attributes.bgImageSize_Tablet}
							bgType={attributes.bgType}
							color={attributes.bgColor}
							focalPoint_Desktop={attributes.focalPoint_Desktop}
							focalPoint_Mobile={attributes.focalPoint_Mobile}
							focalPoint_Tablet={attributes.focalPoint_Tablet}
							gradient={attributes.gradient}
							imageData_Desktop={attributes.imageData_Desktop}
							imageData_Mobile={attributes.imageData_Mobile}
							imageData_Tablet={attributes.imageData_Tablet}
							overlayColor={attributes.overlayColor}
							overlayGradient={attributes.overlayGradient}
							overlayType={attributes.overlayType}
							videoData={attributes.videoData}
							// -------- END ALL ATTRIBUTES FOR BACKGROUND SETTINGS
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<HOCHasBackgroundSettings attributes={attributes}>
				<RichText
					tagName="h2"
					className="wcb-text "
					value={attributes.message}
					onChange={(val) => setAttributes({ message: val })}
				/>
			</HOCHasBackgroundSettings>
		</div>
	);
};

export default Edit;
