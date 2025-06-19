import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useState, useEffect, FC, useRef, useCallback } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbIconBoxPanelLayout from "./WcbIconBoxPanelLayout";
import WcbIconBoxPanelIcon from "./WcbIconBoxPanelIcon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbTeamPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbTeamPanel_StyleDesignation";
import WcbTeamPanel_StyleDescription from "./WcbTeamPanel_StyleDescription";
import WcbIconBoxPanel_StyleIcons from "./WcbIconBoxPanel_StyleIcons";
import MyIconFull from "../components/controls/MyIconFull";
import WcbIconBoxPanel_StyleDimension from "./WcbIconBoxPanel_StyleDimension";
import { MY_DIMENSIONS_NO_GAP_DEMO__EMPTY } from "../components/controls/MyDimensionsControl/types";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		endNumber,
		description,
		designation,
		uniqueId,
		general_layout,
		general_icon,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_dimension,
		advance_motionEffect,
	} = attributes;

	// COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// Make uniqueId
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	// State manage value current_number
	const [currentNumber, setCurrentNumber] = useState(
		parseInt(general_layout?.startNumber) || 0
	);

	useEffect(() => {
		const targetNumber = parseInt(general_layout?.endNumber) || 0;
		const duration = parseInt(general_layout?.animationDuration) || 1500;
		const incrementTime = duration / (targetNumber || 1);
		let current = parseInt(general_layout?.startNumber) || 0;

		setCurrentNumber(current);

		const interval = setInterval(() => {
			current += 1;
			setCurrentNumber(current);

			if (current >= targetNumber) {
				setCurrentNumber(targetNumber);
				clearInterval(interval);
			}
		}, incrementTime);

		return () => clearInterval(interval);
	}, [
		endNumber,
		general_layout?.animationDuration,
		general_layout?.startNumber,
		general_layout?.decimalNumber,
		general_layout?.type,
        general_layout?.endNumber
	]);

	// Format number before display
	const formatNumber = (num: number, decimalPlaces: string) => {
		const decimal = parseInt(decimalPlaces);
		if (!decimal || isNaN(decimal)) return num.toString();
		return num.toFixed(decimal);
	};

	// Calculate progress for the circle (0 to 100%)
	const calculateProgress = () => {
		const end = parseInt(general_layout?.endNumber) || 0;
		const current = currentNumber;

        // Calculate the ratio of curlentnumber compared to the maximum value (100%)
		const maxValue = 100;
		const progress = (current / maxValue) * 100;

        // The maximum progress limit is equal to the ratio of Endnumber compared to Maxvalue
		const endProgress = (end / maxValue) * 100;
		return Math.min(progress, endProgress);
	};

	// Render the progress circle with content inside
	const renderProgressCircle = () => {
		const radius = 150;
		const stroke = 5;
		const normalizedRadius = radius - stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;
		const progress = calculateProgress();
		const strokeDashoffset = circumference - (progress / 100) * circumference;

		return (
			<div
				className="wcb-icon-box__progress-circle-wrap"
				style={{
					position: "relative",
					width: `${radius * 2}px`,
					height: `${radius * 2}px`,
				}}
			>
				<svg
					height={radius * 2}
					width={radius * 2}
					style={{ transform: "rotate(-90deg)" }}
				>
					<circle
						stroke="#e0e0e0"
						fill="transparent"
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
					<circle
						stroke="#007cba"
						fill="transparent"
                        strokeWidth={stroke}
						strokeDasharray={`${circumference} ${circumference}`}
						style={{ strokeDashoffset }}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "10px",
                        maxWidth: `${radius * 1.5}px`, // Limit the content width to not overflow
						padding: "10px",
					}}
				>
					{general_icon.enableIcon && (
						<div className="wcb-icon-box__icon">
							<MyIconFull icon={general_icon.icon} />
						</div>
					)}
					<div className="wcb-icon-box__number">
						<span>{general_layout.numberPrefix}</span>
						{formatNumber(currentNumber, general_layout?.decimalNumber)}
						<span>{general_layout.numberSuffix}</span>
					</div>
					{general_layout.enableDescription && (
						<RichText
							tagName="div"
							value={description}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ description: content })}
							placeholder={__("Description of box ...")}
							className="wcb-icon-box__description"
							style={{
								wordBreak: "break-word",
								maxWidth: "100%",
							}}
						/>
					)}
				</div>
			</div>
		);
	};

	const renderProgressBar = () => {
		const progress = calculateProgress(); // Use the updated calculateProgressBar function

		return (
			<div className="wcb-icon-box__progress-bar-wrap">
				<div
					style={{
						width: "100%",
						backgroundColor: "#e0e0e0", // Background color for the unfilled portion
						height: "100%", // Height of the bar
						borderRadius: "5px", // Optional: rounded edges
						overflow: "hidden", // Ensure the fill doesn't overflow
						position: "relative",
					}}
				>
					<div
						style={{
							width: `${progress}%`, // Dynamic width based on progress
							height: "100%",
							backgroundColor: "#007cba", // Blue fill color as in the image
							transition: "transparent", // Smooth transition for the fill
							color: "white",
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
							paddingRight: "4px"
						}}
					>
						<div className="wcb-icon-box__number" style={{
							marginBottom: "0px"
						}}>
							<span>{general_layout.numberPrefix}</span>
							{formatNumber(currentNumber, general_layout?.decimalNumber)}
							<span>{general_layout.numberSuffix}</span>
						</div>
					</div>
					
				</div>
				{general_layout.enableDescription && (
					<RichText
						tagName="div"
						value={description}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(content) => setAttributes({ description: content })}
						placeholder={__("Description of box ...")}
						className="wcb-icon-box__description"
						style={{
							wordBreak: "break-word",
							maxWidth: "100%",
						}}
					/>
				)}
			</div>
		);
	};

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbIconBoxPanelLayout
							onToggle={() => handleTogglePanel("General", "Layout", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Layout" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Layout" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_layout: data });
							}}
							panelData={general_layout}
						/>

						<WcbIconBoxPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={(data) => {
								if (
									data.iconPosition === "leftOfTitle" ||
									data.iconPosition === "left"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "left",
												Tablet: "left",
												Mobile: "left",
											},
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														right: "1rem",
													},
												},
											},
										},
									});
								}
								if (
									data.iconPosition === "rightOfTitle" ||
									data.iconPosition === "right"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "right",
												Tablet: "right",
												Mobile: "right",
											},
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														left: "1rem",
													},
												},
											},
										},
									});
								}

								return setAttributes({
									general_icon: data,
									style_Icon: {
										...style_Icon,
										dimensions: {
											...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
											margin: {
												Desktop: {
													...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
													top: "1rem",
													bottom: "1rem",
												},
											},
										},
									},
								});
							}}
							panelData={general_icon}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						{general_icon.enableIcon && general_layout.type !== "bar" && (
							<WcbIconBoxPanel_StyleIcons
								onToggle={() => handleTogglePanel("Styles", "_StyleIcons")}
								initialOpen={tabStylesIsPanelOpen === "_StyleIcons"}
								opened={tabStylesIsPanelOpen === "_StyleIcons" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_Icon: data });
								}}
								panelData={style_Icon}
								generalLayoutType={general_layout.type}
							/>
						)}
						{general_layout.enablePrefix && (
							<WcbTeamPanel_StyleDesignation
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDesignation")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDesignation"}
								opened={
									tabStylesIsPanelOpen === "_StyleDesignation" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_desination: data });
								}}
								panelData={style_desination}
							/>
						)}
						{general_layout.enableTitle && (
							<WcbTeamPanel_StyleTitle
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleTitle", true)
								}
								initialOpen={
									tabStylesIsPanelOpen === "_StyleTitle" ||
									tabStylesIsPanelOpen === "first"
								}
								opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_title: data });
								}}
								panelData={style_title}
							/>
						)}

						{general_layout.enableDescription && (
							<WcbTeamPanel_StyleDescription
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDescription")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
								opened={
									tabStylesIsPanelOpen === "_StyleDescription" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_description: data });
								}}
								panelData={style_description}
							/>
						)}
						
						<WcbIconBoxPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
						/>
						
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_motionEffect={advance_motionEffect}
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			endNumber,
			designation,
			style_title,
			style_desination,
			style_description,
			style_Icon,
			style_dimension,
			general_icon,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		endNumber,
		designation,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_dimension,
		general_icon,
		advance_motionEffect,
	]);

	const renderIcon = () => {
		return (
			<>
				{general_icon.enableIcon && general_layout.type !== "circle" && (
						<div className="wcb-icon-box__icon-wrap">
							<div className="wcb-icon-box__icon">
								<MyIconFull icon={general_icon.icon} />
							</div>
						</div>
					)}
			</>
		);
	};

	const HeadingTag = general_layout.headingTag;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-counter-box__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{(general_icon.iconPosition === "top" ||
					general_icon.iconPosition === "left") &&
					general_layout.type !== "circle" &&
					general_layout.type !== "bar" &&
					renderIcon()}

				{/* CHILD CONTENT */}
				<div className="wcb-icon-box__content">
					<div className="wcb-icon-box__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" &&
							general_layout.type !== "circle" &&
							general_layout.type !== "bar" &&
							renderIcon()}

						<div className="wcb-icon-box__content-title">
							{
								general_layout.enablePrefix && 
								general_layout.type !== "circle" &&
								general_layout.type !== "bar" &&(
									<RichText
										tagName="div"
										value={designation}
										allowedFormats={[]}
										onChange={(content) =>
											setAttributes({ designation: content })
										}
										placeholder={__("Write a Prefix")}
										className="wcb-icon-box__designation"
									/>
								)
							}
							{
								general_layout.enableTitle && 
								general_layout.type !== "circle" &&
								general_layout.type !== "bar" && (
									<div>
										<div className="wcb-icon-box__number">
											<span>{general_layout.numberPrefix}</span>
										{formatNumber(currentNumber, general_layout?.decimalNumber)}
											<span>{general_layout.numberSuffix}</span>
										</div>
									</div>
								)}

							{general_layout.type === "circle" && renderProgressCircle()}
							{general_layout.type === "bar" && renderProgressBar()}
						</div>

						{(general_icon.iconPosition === "rightOfTitle" ||
							general_icon.iconPosition === "bellowTitle") &&
							general_layout.type !== "circle" &&
							general_layout.type !== "bar" &&
							renderIcon()}
					</div>

					{
						general_layout.enableDescription && 
						general_layout.type !== "circle" &&
						general_layout.type !== "bar" && (
							<RichText
								tagName="div"
								value={description}
								allowedFormats={["core/bold", "core/italic"]}
								onChange={(content) => setAttributes({ description: content })}
								placeholder={__("Description of box ...")}
								className="wcb-icon-box__description"
							/>
						)
					}

					{general_layout.enableCTAButton && (
						<InnerBlocks allowedBlocks={[]} template={[["wcb/button", {}]]} />
					)}
				</div>

				{general_icon.iconPosition === "right" &&
					general_layout.type !== "circle" &&
					general_layout.type !== "bar" &&
					renderIcon()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
