import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
    TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySelect from "../components/controls/MySelect";
import { Option } from "../types";

export interface WCB_ICON_LIST_PANEL_LAYOUT_ICON_LIST {
    layout: "horizontal" | "vertical";
}

export interface WCB_ICON_LIST_PANEL_LAYOUT {
    layout: WCB_ICON_LIST_PANEL_LAYOUT_ICON_LIST["layout"];
    textAlignment: HasResponsive<TextAlignment>;
    headingTag: keyof HTMLElementTagNameMap;
    enablePrefix: boolean;
    enableTitle: boolean;
}

export const WCB_ICON_LIST_PANEL_LAYOUT_DEMO: WCB_ICON_LIST_PANEL_LAYOUT = {
    layout: "vertical",
    textAlignment: { Desktop: "left" },
    headingTag: "p",
    enablePrefix: false,
    enableTitle: true,
};

interface Props
    extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
    panelData: WCB_ICON_LIST_PANEL_LAYOUT;
    setAttr__: (data: WCB_ICON_LIST_PANEL_LAYOUT) => void;
}

const WcbIconListPanelLayout: FC<Props> = ({
    panelData = WCB_ICON_LIST_PANEL_LAYOUT_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened,
}) => {
    const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

    const {
        textAlignment,
        headingTag,
        enablePrefix,
        enableTitle,
        layout,
    } = panelData;

    const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
        textAlignment,
        deviceType
    );

    const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
        setAttr__({
            ...panelData,
            textAlignment: {
                [deviceType]: selected,
            },
        });
    };

    const PLANS_DEMO: Option<WCB_ICON_LIST_PANEL_LAYOUT_ICON_LIST["layout"]>[] = [
        { value: "horizontal", label: "Horizontal" },
        { value: "vertical", label: "Vertical" },
    ];

    return (
        <PanelBody
            initialOpen={initialOpen}
            onToggle={onToggle}
            opened={opened}
            title={__("Content", "wcb")}
        >
            <div className="space-y-5">
                <MySelect
                    label={__("Layout", "Wcb")}
                    options={PLANS_DEMO}
                    value={layout}
                    onChange={(value) => {
                        setAttr__({
                            ...panelData,
                            layout: value as WCB_ICON_LIST_PANEL_LAYOUT_ICON_LIST["layout"],
                        });
                    }}
                />

                <MyTextAlignControl
                    textAlignment={TEXT_ALIGNMENT}
                    onChange={handleChangeTextAlignment}
                />

                <ToggleControl
                    label={__("Enable title", "wcb")}
                    checked={enableTitle}
                    className="mb-0"
                    onChange={(checked) => {
                        setAttr__({ ...panelData, enableTitle: checked });
                    }}
                />

                {enableTitle && (
                    <MyHeadingTagControl
                        tag={headingTag}
                        onChange={(value) => {
                            setAttr__({ ...panelData, headingTag: value });
                        }}
                    />
                )}
            </div>
        </PanelBody>
    );
};

export default WcbIconListPanelLayout;