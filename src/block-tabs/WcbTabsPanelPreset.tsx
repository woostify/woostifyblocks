import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
export interface WCB_FAQ_PANEL_PRESET {
    preset:
        | "grid-simple"
        | "grid-solid"
        | "carousel-simple"
        | "carousel-solid"
        | "";
}

export const WCB_FAQ_PANEL_PRESET_DEMO: WCB_FAQ_PANEL_PRESET = {
    preset: "",
};

interface Props
    extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
    panelData: WCB_FAQ_PANEL_PRESET;
    setAttr__: (data: WCB_FAQ_PANEL_PRESET) => void;
}

export const CTA_PRESET: {
    name: WCB_FAQ_PANEL_PRESET["preset"];
    twClass: string;
}[] = [
    { name: "carousel-simple", twClass: "" },
    { name: "carousel-solid", twClass: "justify-center items-center" },
    { name: "grid-simple", twClass: "justify-center items-center" },
    { name: "grid-solid", twClass: "justify-center items-center" },
];

const WcbTabsPanelPreset: FC<Props> = ({
    panelData = WCB_FAQ_PANEL_PRESET_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened,
}) => {
    const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
    const setPreset = (preset: WCB_FAQ_PANEL_PRESET["preset"]) => {
        setAttr__({ preset: preset });
    };

    const renderPresetItem = (item: typeof CTA_PRESET[number]) => {
        if (item.name === "carousel-simple") {
            return (
                <div className="w-full h-full overflow-hidden flex items-center justify-center border border-[#dadada] text-[#898e95] bg-[#f0f0f1] 
            		transition-[background,box-shadow] duration-75 ease-in rounded-[5px_5px_5px_5px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="325"
                        viewBox="0 0 325 245"
                        fill="none"
                    >
                        <path
                            d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M58 138C58 136.343 59.138 135 60.5418 135H266.259C267.663 135 268.801 136.343 268.801 138C268.801 139.657 267.663 141 266.259 141H60.5418C59.138 141 58 139.657 58 138Z"
                            fill="#D2D2D2"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M58 159C58 157.343 59.1317 156 60.5276 156H214.24C215.636 156 216.768 157.343 216.768 159C216.768 160.657 215.636 162 214.24 162H60.5276C59.1317 162 58 160.657 58 159Z"
                            fill="#D2D2D2"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M58 113C58 111.343 59.0884 110 60.4311 110H86.5689C87.9116 110 89 111.343 89 113C89 114.657 87.9116 116 86.5689 116H60.4311C59.0884 116 58 114.657 58 113Z"
                            fill="#B6B6B6"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M99 113C99 111.343 100.088 110 101.431 110H127.569C128.912 110 130 111.343 130 113C130 114.657 128.912 116 127.569 116H101.431C100.088 116 99 114.657 99 113Z"
                            fill="#B6B6B6"
                        />
                        <path
                            d="M140 112.75H151.5"
                            stroke="#B6B6B6"
                            strokeWidth="3"
                            fill="none"
                        />
                        <path
                            d="M145.75 118.5L145.75 107"
                            stroke="#B6B6B6"
                            strokeWidth="3"
                            fill="none"
                        />
                    </svg>
                </div>
            );
        }
        if (item.name === "carousel-solid") {
            return (
                <div className="w-full h-full overflow-hidden flex items-center justify-center border border-[#dadada] text-[#898e95] bg-[#f0f0f1] 
                transition-[background,box-shadow] duration-75 ease-in rounded-[5px_5px_5px_5px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="325"
                    viewBox="0 0 325 245"
                    fill="none"
                >
                    <path
                        d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58 138C58 136.343 59.138 135 60.5418 135H266.259C267.663 135 268.801 136.343 268.801 138C268.801 139.657 267.663 141 266.259 141H60.5418C59.138 141 58 139.657 58 138Z"
                        fill="#D2D2D2"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58 159C58 157.343 59.1317 156 60.5276 156H214.24C215.636 156 216.768 157.343 216.768 159C216.768 160.657 215.636 162 214.24 162H60.5276C59.1317 162 58 160.657 58 159Z"
                        fill="#D2D2D2"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58 113C58 111.343 59.0884 110 60.4311 110H86.5689C87.9116 110 89 111.343 89 113C89 114.657 87.9116 116 86.5689 116H60.4311C59.0884 116 58 114.657 58 113Z"
                        fill="#B6B6B6"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M99 113C99 111.343 100.088 110 101.431 110H127.569C128.912 110 130 111.343 130 113C130 114.657 128.912 116 127.569 116H101.431C100.088 116 99 114.657 99 113Z"
                        fill="#B6B6B6"
                    />
                    <path
                        d="M140 112.75H151.5"
                        stroke="#B6B6B6"
                        strokeWidth="3"
                        fill="none"
                    />
                    <path
                        d="M145.75 118.5L145.75 107"
                        stroke="#B6B6B6"
                        strokeWidth="3"
                        fill="none"
                    />
                </svg>
            </div>
            );
        }
        if (item.name === "grid-simple") {
            return (
                <div className="w-full h-full overflow-hidden flex items-center justify-center border border-[#dadada] text-[#898e95] bg-[#f0f0f1] 
            		transition-[background,box-shadow] duration-75 ease-in rounded-[5px_5px_5px_5px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="325"
                        viewBox="0 0 325 245"
                        fill="none"
                    >
                        <path
                            d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z"
                            fill="#D2D2D2"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z"
                            fill="#D2D2D2"
                        />
                        <rect
                            x="115.75"
                            y="90.75"
                            width="157.5"
                            height="91.5"
                            rx="3.25"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 92.7492C52.75 91.6338 53.6369 90.75 54.7059 90.75H101.34C102.409 90.75 103.296 91.6338 103.296 92.7492V109.932C103.296 111.047 102.409 111.931 101.34 111.931H54.7059C53.6369 111.931 52.75 111.047 52.75 109.932V92.7492Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 120.749C52.75 119.634 53.6369 118.75 54.7059 118.75H101.34C102.409 118.75 103.296 119.634 103.296 120.749V137.932C103.296 139.047 102.409 139.931 101.34 139.931H54.7059C53.6369 139.931 52.75 139.047 52.75 137.932V120.749Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 148.749C52.75 147.634 53.6369 146.75 54.7059 146.75H101.34C102.409 146.75 103.296 147.634 103.296 148.749V165.932C103.296 167.047 102.409 167.931 101.34 167.931H54.7059C53.6369 167.931 52.75 167.047 52.75 165.932V148.749Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>
                </div>
            );
        }
        if (item.name === "grid-solid") {
            return (
                <div className="w-full h-full overflow-hidden flex items-center justify-center border border-[#dadada] text-[#898e95] bg-[#f0f0f1] 
            		transition-[background,box-shadow] duration-75 ease-in rounded-[5px_5px_5px_5px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="325"
                        viewBox="0 0 325 245"
                        fill="none"
                    >
                        <path
                            d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z"
                            fill="#D2D2D2"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z"
                            fill="#D2D2D2"
                        />
                        <rect
                            x="115.75"
                            y="90.75"
                            width="157.5"
                            height="91.5"
                            rx="3.25"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 92.7492C52.75 91.6338 53.6369 90.75 54.7059 90.75H101.34C102.409 90.75 103.296 91.6338 103.296 92.7492V109.932C103.296 111.047 102.409 111.931 101.34 111.931H54.7059C53.6369 111.931 52.75 111.047 52.75 109.932V92.7492Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 120.749C52.75 119.634 53.6369 118.75 54.7059 118.75H101.34C102.409 118.75 103.296 119.634 103.296 120.749V137.932C103.296 139.047 102.409 139.931 101.34 139.931H54.7059C53.6369 139.931 52.75 139.047 52.75 137.932V120.749Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M52.75 148.749C52.75 147.634 53.6369 146.75 54.7059 146.75H101.34C102.409 146.75 103.296 147.634 103.296 148.749V165.932C103.296 167.047 102.409 167.931 101.34 167.931H54.7059C53.6369 167.931 52.75 167.047 52.75 165.932V148.749Z"
                            stroke="#959595"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>
                </div>
            );
        }
        return <div></div>;
    };

    const renderRadioPreset = () => {
        return (
            <RadioGroup value={panelData.preset} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between ">
					<span>{__("Select Preset", "wcb")}</span>
                    <ResetButton onClick={() => setPreset("")} />
                </RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
                    <div className="relative grid grid-cols-2 gap-x-4 gap-y-3.5 gap-10">
                        {CTA_PRESET.map((item) => {
                            return (
                                <RadioGroup.Option key={item.name} value={item.name}>
                                    {({ checked }) => (
                                        <div
                                            className={`relative flex items-center justify-center w-full p-2 my-2 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
                                                checked ? "bg-white ring-2" : "bg-white"
											} `}
                                        >
                                            {renderPresetItem(item)}
                                        </div>
                                    )}
                                </RadioGroup.Option>
                            );
                        })}
                    </div>
                </div>
            </RadioGroup>
        );
    };
    return (
        <PanelBody
            initialOpen={initialOpen}
            onToggle={onToggle}
            opened={opened}
            title={__("Preset", "wcb")}
        >
            {renderRadioPreset()}
        </PanelBody>
    );
};

export default WcbTabsPanelPreset;
