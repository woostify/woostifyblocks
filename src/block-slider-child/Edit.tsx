import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { useSelect } from "@wordpress/data";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import MyMediaUploadCheck from "../components/controls/MyMediaUploadCheck";
import { RangeControl } from "@wordpress/components";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"wcb/slider_general"?: any;
			"wcb/slider_images"?: any;
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context, isSelected } = props;
	const {
		uniqueId,
		content,
		name,
		callToAction,
		image,
		rating,
	} = attributes;
	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		tabAdvancesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	const blockIndex: number = useSelect(
		(select) => (select(blockEditorStore) as any).getBlockIndex(clientId),
		[clientId]
	);

	// INSPECTOR CONTROLS TABS
	const INSPECTOR_CONTROLS_TABS: InspectorControlsTabs = [
		{
			name: "General",
			title: __("General"),
		},
	];

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<div className="wcb-control-item">
							<h3>{__("Image", "wcb")}</h3>
							<MyMediaUploadCheck
								onChange={(data) => setAttributes({ image: data })}
								imageData={image}
							/>
						</div>

						<div className="wcb-control-item">
							<RangeControl
								label={__("Rating", "wcb")}
								value={rating}
								onChange={(value) => setAttributes({ rating: value })}
								min={0}
								max={5}
								step={1}
							/>
						</div>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const renderImage = () => {
		if (!image.mediaId) {
			return null;
		}
		return (
			<div className="wcb-slider-child__image">
				<img
					src={image.mediaUrl}
					alt=""
					srcSet={image.mediaSrcSet}
				/>
			</div>
		);
	};

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider-child__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<div className="wcb-slider-child__item">
					<div className="wcb-slider-child__item-background">
						<div className="wcb-slider-child__item-wrap-inner">
							{/* IMAGE */}
							{renderImage()}

							<div className="wcb-slider-child__item-inner">
									{/* NAME */}
									<RichText
										tagName="div"
										value={name}
										allowedFormats={["core/bold", "core/italic"]}
										onChange={(value) => setAttributes({ name: value })}
										placeholder={__("Slider...")}
										className="wcb-slider-child__name"
									/>

								<div className="wcb-slider-child__item-user">
									<div className="wcb-slider-child__item-nameandcompany">					
										{/* CONTENT */}
										<RichText
											tagName="div"
											value={content}
											allowedFormats={["core/bold", "core/italic"]}
											onChange={(value) => setAttributes({ content: value })}
											placeholder={__("Enter your testimonial content...")}
											className="wcb-slider-child__content"
										/>

										{/* COMPANY */}
										<RichText
											tagName="div"
											value={callToAction}
											allowedFormats={["core/bold", "core/italic"]}
											onChange={(value) => setAttributes({ callToAction: value })}
											placeholder={__("Call to Action...")}
											className="wcb-slider-child__company"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Inspector Controls for individual slider item */}
				<HOCInspectorControls
					uniqueId={uniqueId}
					tabs={INSPECTOR_CONTROLS_TABS}
					renderTabPanels={renderTabBodyPanels}
				/>
			</div>
		</MyCacheProvider>
	);
};

export default Edit; 