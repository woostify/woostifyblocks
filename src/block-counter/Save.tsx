import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
    extends Omit<WcbAttrs, "heading" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
    const {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_layout,
        description,
        designation,
        endNumber,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        general_icon,
        style_dimension,
        advance_motionEffect,
    } = attributes;

    const newAttrForSave: WcbAttrsForSave = {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_layout,
        endNumber,
        designation,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        general_icon,
        style_dimension,
        advance_motionEffect,
    };

    // Format number for static display (used in non-circle/bar layouts)
    const formatNumber = (num: string, decimalPlaces: string) => {
        const decimal = parseInt(decimalPlaces);
        if (!decimal || isNaN(decimal)) return num;
        return parseFloat(num).toFixed(decimal);
    };

    // Render the progress circle structure
    const renderProgressCircle = () => {
        const radius = 150;
        const stroke = 5;
        const normalizedRadius = radius - stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;

        return (
            <div
                className="wcb-icon-box__progress-circle-wrap"
                style={{
                    position: "relative",
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                }}
                data-start-number={general_layout?.startNumber || "0"}
                data-end-number={general_layout?.endNumber || "0"}
                data-animation-duration={general_layout?.animationDuration || "1500"}
                data-decimal-places={general_layout?.decimalNumber || "0"}
                data-number-suffix={general_layout?.numberSuffix || ""}
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
                        className="wcb-icon-box__progress-circle"
                        stroke="#007cba"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={`${circumference} ${circumference}`}
                        style={{ strokeDashoffset: circumference }} // Initially set to 0% progress
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
                        maxWidth: `${radius * 1.5}px`,
                        padding: "10px",
                    }}
                >
                    {general_icon.enableIcon && (
                        <div className="wcb-icon-box__icon">
                            <MyIconFull icon={general_icon.icon} />
                        </div>
                    )}
                    {/* <div className="wcb-icon-box__number-inside">
                        {formatNumber(general_layout?.startNumber || "0", general_layout?.decimalNumber)}
                        {general_layout.numberSuffix}
                    </div> */}
                    <div className="wcb-icon-box__number">
						<span>{general_layout.numberPrefix}</span>
						{formatNumber(general_layout?.startNumber || "0", general_layout?.decimalNumber)}
						<span>{general_layout.numberSuffix}</span>
					</div>
                    {general_layout.enableDescription && (
                        <RichText.Content
                            tagName="div"
                            value={description}
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

    // Render the progress bar structure
    const renderProgressBar = () => {
        return (
            <div
                className="wcb-icon-box__progress-bar-wrap"
                data-start-number={general_layout?.startNumber || "0"}
                data-end-number={general_layout?.endNumber || "0"}
                data-animation-duration={general_layout?.animationDuration || "1500"}
                data-number-prefix={general_layout?.numberPrefix || ""}
                data-number-suffix={general_layout?.numberSuffix || ""}
            >
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        height: "100%",
                        borderRadius: "5px",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <div
                        className="wcb-icon-box__progress-bar"
                        style={{
                            width: "0%", // Initially set to 0% progress
                            height: "100%",
                            backgroundColor: "#007cba",
                            transition: "transparent",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            paddingRight: "4px",
                        }}
                    >
                    <div className="wcb-icon-box__number" style={{
							marginBottom: "0px"
						}}>
							<span>{general_layout.numberPrefix}</span>
                            <span className="wcb-icon-box__number-value">0</span>
							<span>{general_layout.numberSuffix}</span>
						</div>
                    </div>
                </div>
                {general_layout.enableDescription && (
                    <RichText.Content
                        tagName="div"
                        value={description}
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

    const renderIcon = () => {
        return (
            <>
                {general_icon.enableIcon && general_layout.type !== "circle" && general_layout.type !== "bar" && (
                    <div className="wcb-icon-box__icon-wrap">
                        <div className="wcb-icon-box__icon">
                            <MyIconFull icon={general_icon.icon} />
                        </div>
                    </div>
                )}
            </>
        );
    };

    const wrapBlockProps = useBlockProps.save({
        className: "wcb-counter-box__wrap",
    });

    return (
        <SaveCommon
            {...wrapBlockProps}
            attributes={newAttrForSave}
            uniqueId={uniqueId}
        >
            {(general_icon.iconPosition === "top" || general_icon.iconPosition === "left") &&
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
                        {general_layout.enablePrefix &&
                            general_layout.type !== "circle" &&
                            general_layout.type !== "bar" && (
                                <RichText.Content
                                    tagName="div"
                                    value={designation}
                                    placeholder={__("Designation...")}
                                    className="wcb-icon-box__designation"
                                />
                            )}

                        {general_layout.enableTitle &&
                            general_layout.type !== "circle" &&
                            general_layout.type !== "bar" && (
                                <div 
									className="wcb-icon-box__number"
									data-start-number={general_layout?.startNumber || "0"}
                                    data-end-number={general_layout?.endNumber || "0"}
                                    data-animation-duration={general_layout?.animationDuration || "1500"}
                                    data-decimal-places={general_layout?.decimalNumber || "0"}
								>
                                    <span>{general_layout.numberPrefix}</span>
									<span className="wcb-icon-box__number-value">
										{formatNumber(general_layout.startNumber, general_layout?.decimalNumber)}
									</span>
                                    <span>{general_layout.numberSuffix}</span>
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

                {general_layout.enableDescription &&
                    general_layout.type !== "circle" &&
                    general_layout.type !== "bar" && (
                        <RichText.Content
                            tagName="div"
                            value={description}
                            placeholder={__("Description...")}
                            className="wcb-icon-box__description"
                        />
                    )}

                {general_layout.enableCTAButton && <InnerBlocks.Content />}
            </div>

            {general_icon.iconPosition === "right" &&
                general_layout.type !== "circle" &&
                general_layout.type !== "bar" &&
                renderIcon()}
        </SaveCommon>
    );
}