import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, { TextAlignment } from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySelect from "../components/controls/MySelect";
import { MySelectOption } from "../types";

export interface WCB_TAGS_PANEL_GENERAL {
    layout: "accordion" | "grid";
    style: "horizontalStyle1" | "horizontalStyle2" | "verticalStyle1" | "verticalStyle2";
    headingTag: keyof HTMLElementTagNameMap;
    collapseOtherItems: boolean;
    expandFirstItem: boolean;
    showMultiple: boolean;
    enableSchemaSupport: boolean;
    enableSeparator: boolean;
    columns: HasResponsive<number>;
    textAlignment: TextAlignment;
}

export const WCB_TAGS_PANEL_GENERAL_DEMO: WCB_TAGS_PANEL_GENERAL = {
    layout: "accordion",
    style: "horizontalStyle1",
    headingTag: "div",
    collapseOtherItems: true,
    columns: { Desktop: 2 },
    enableSchemaSupport: true,
    enableSeparator: true,
    showMultiple: true,
    expandFirstItem: true,
    textAlignment: "left",
};

interface Props extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
    panelData: WCB_TAGS_PANEL_GENERAL;
    setAttr__: (data: WCB_TAGS_PANEL_GENERAL) => void;
}

const WcbTabsPanelGeneral: FC<Props> = ({
    panelData = WCB_TAGS_PANEL_GENERAL_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened,
}) => {
    const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
    const {
        textAlignment,
        collapseOtherItems,
        columns,
        enableSchemaSupport,
        enableSeparator,
        showMultiple,
        expandFirstItem,
        headingTag,
        style,
        layout,
    } = panelData;

    const { currentDeviceValue: COLUMNS } = getValueFromAttrsResponsives(columns, deviceType);

    const PLANS_DEMO: MyRadioItem<WCB_TAGS_PANEL_GENERAL["layout"]>[] = [
        { icon: "Accordion", name: "accordion" },
        { icon: "Grid", name: "grid" },
    ];

    const renderCarouselToggleSettings = () => {
        if (layout === "grid") return null;
        return (
            <>
                <ToggleControl
                    label="Collapse other items"
                    help="Collapse all accordion elements during initialization"
                    checked={collapseOtherItems}
                    onChange={(checked) => setAttr__({ ...panelData, collapseOtherItems: checked })}
                />
                {collapseOtherItems && (
                    <ToggleControl
                        label="Expand first item"
                        help="Show accordion first element during initialization"
                        checked={expandFirstItem}
                        onChange={(checked) => setAttr__({ ...panelData, expandFirstItem: checked })}
                    />
                )}
                <ToggleControl
                    label="Show multiple"
                    help="Show multiple elements at the same time"
                    checked={showMultiple}
                    onChange={(checked) => setAttr__({ ...panelData, showMultiple: checked })}
                />
            </>
        );
    };

    const OPTION_STYLE_OPEN_TAB_DEMO: MySelectOption<WCB_TAGS_PANEL_GENERAL["style"]>[] = [
        { label: "Horizontal Style 1", value: "horizontalStyle1" },
        { label: "Horizontal Style 2", value: "horizontalStyle2" },
        { label: "Vertical Style 1", value: "verticalStyle1" },
        { label: "Vertical Style 2", value: "verticalStyle2" },
    ];

    // filter options with layout
    const filteredStyleOptions =
    layout === "accordion"
        ? OPTION_STYLE_OPEN_TAB_DEMO.filter(opt => opt.value.startsWith("horizontal"))
        : OPTION_STYLE_OPEN_TAB_DEMO.filter(opt => opt.value.startsWith("vertical"));


    return (
        <PanelBody initialOpen={initialOpen} onToggle={onToggle} opened={opened} title={__("General", "boostify-blocks")}>
            <div className="space-y-5">
                <MySelect
                    label={__("Style", "boostify-blocks")}
                    options={filteredStyleOptions}
                    value={style}
                    onChange={(value) => {
                        setAttr__({
                            ...panelData,
                            style: value as WCB_TAGS_PANEL_GENERAL["style"],
                        });
                    }}
                />
                <MyRadioGroup
                    hasResponsive={false}
                    label={__("Layout", "boostify-blocks")}
                    onChange={(value) => setAttr__({ ...panelData, layout: value as WCB_TAGS_PANEL_GENERAL["layout"] })}
                    value={layout}
                    plans={PLANS_DEMO}
                />
                {renderCarouselToggleSettings()}
                <ToggleControl
                    label="Enable schema support"
                    help="Enable schema support"
                    checked={enableSchemaSupport}
                    onChange={(checked) => setAttr__({ ...panelData, enableSchemaSupport: checked })}
                />
                <ToggleControl
                    label="Enable separator"
                    help="Enable separator"
                    checked={enableSeparator}
                    onChange={(checked) => setAttr__({ ...panelData, enableSeparator: checked })}
                />
                {layout === "grid" && (
                    <RangeControl
                        label={<MyLabelControl hasResponsive>{__("Columns", "boostify-blocks")}</MyLabelControl>}
                        value={COLUMNS || 2}
                        onChange={(value) => setAttr__({ ...panelData, columns: { ...columns, [deviceType]: value } })}
                        min={1}
                        max={6}
                    />
                )}
                <MyHeadingTagControl
                    tag={headingTag}
                    onChange={(value) => setAttr__({ ...panelData, headingTag: value })}
                />
                <MyTextAlignControl
                    textAlignment={textAlignment}
                    onChange={(selected) => setAttr__({ ...panelData, textAlignment: selected })}
                    hasResponsive={false}
                />
            </div>
        </PanelBody>
    );
};

export default WcbTabsPanelGeneral;
