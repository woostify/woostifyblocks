import { __ } from "@wordpress/i18n";
import {
    InnerBlocks,
    RichText,
    useBlockProps,
	// @ts-ignore
    useInnerBlocksProps,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef, useCallback, useState } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, { InspectorControlsTabs } from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import { useSelect, useDispatch } from "@wordpress/data";
import WcbTabsPanel_StyleTitle, { WCB_TABS_PANEL_STYLE_TITLE_DEMO } from "./WcbTabsPanel_StyleTitle";
import WcbTabsPanel_StyleIcon, { WCB_TABS_PANEL_STYLE_ICON_DEMO } from "./WcbTabsPanel_StyleIcon";
import WcbTabsPanelPreset from "./WcbTabsPanelPreset";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import WcbTabsPanelTabTitle from "./WcbTabsPanelTabTitle";
import { createBlock, serialize } from "@wordpress/blocks";
import { BlockTabTitleItem } from "./types";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import WcbTabsPanel_StyleBody, { WCB_TABS_PANEL_STYLE_BODY_DEMO } from "./WcbTabsPanel_StyleBody";
import MyIconFull from "../components/controls/MyIconFull";
import { WCB_TABS_PANEL_STYLE_CONTAINER_DEMO, WCB_TABS_PANEL_STYLE_CONTAINER_DEMO_SOLID } from "./WcbTabsPanel_StyleContainer";
import WcbTabsPanelGeneral from "./WcbTabsPanelGeneral";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const {
        advance_responsiveCondition,
        advance_zIndex,
        advance_motionEffect,
        uniqueId,
        general_tabTitle,
        titles,
        tabContents,
        activeTabIndex,
        style_container,
        style_title,
        style_body,
        style_icon,
        general_preset,
        general_general,
    } = attributes;

    const ref = useRef<HTMLDivElement>(null);
    const wrapBlockProps = useBlockProps({ ref });
    const { tabIsOpen, tabAdvancesIsPanelOpen, tabGeneralIsPanelOpen, tabStylesIsPanelOpen, handleTogglePanel } = useSetBlockPanelInfo(uniqueId);
    const [indexFocused, setIndexFocused] = useState(0);

    const { childInnerBlocks } = useSelect(
        (select) => ({
            // @ts-ignore
            childInnerBlocks: select(blockEditorStore).getBlocks(clientId),
        }),
        [clientId]
    );
    const { insertBlock, removeBlock } = useDispatch(blockEditorStore);

    // Tạo uniqueId
    const UNIQUE_ID = wrapBlockProps.id;
    useEffect(() => {
        setAttributes({ uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID) });
    }, [UNIQUE_ID]);
	//
	// Synchronze indexFocused with activeTabIndex
    useEffect(() => {
        if (indexFocused !== activeTabIndex) {
            setAttributes({ activeTabIndex: indexFocused });
        }
    }, [indexFocused, activeTabIndex, setAttributes]);

	// Synchronze number childInnerBlocks with titles and tabContents
    useEffect(() => {
        if (childInnerBlocks.length !== titles.length) {
            const newTitles = [...titles];
            const newTabContents = [...tabContents];

            if (childInnerBlocks.length < titles.length) {
                for (let i = childInnerBlocks.length; i < titles.length; i++) {
                    const newChild = createBlock("wcb/tab-child", {});
                    insertBlock(newChild, i, clientId);
                }
			}
			// if childInnerBlocks > titles, remove childInnerBlocks
			else if (childInnerBlocks.length > titles.length) {
                for (let i = titles.length; i < childInnerBlocks.length; i++) {
                    removeBlock(childInnerBlocks[i].clientId);
                }
            }

            if (tabContents.length !== titles.length) {
                while (newTabContents.length < titles.length) newTabContents.push("");
                while (newTabContents.length > titles.length) newTabContents.pop();
                setAttributes({ tabContents: newTabContents });
            }
        }
    }, [childInnerBlocks, titles, tabContents, insertBlock, removeBlock, clientId, setAttributes]);

	// Update tabContents when childInnerBlocks change
    useEffect(() => {
        if (childInnerBlocks.length === titles.length) {
			const newTabContents = childInnerBlocks.map((block: any) => {
				// Get content from childInnerBlocks 
				const innerContent = block.innerBlocks
					?.map((innerBlock: any) => innerBlock.attributes.content || "")
					.join("\n") || "";
				return innerContent;
			});
            setAttributes({ tabContents: newTabContents });
        }
    }, [childInnerBlocks, titles.length, setAttributes]);


    useEffect(() => {
        const childs = document.querySelectorAll(`#block-${clientId} .wcb-tab-child__wrap`);
        if (!childs || !childs.length) return;
        Array.from(childs).forEach((item, index) => {
            if (index !== indexFocused) item.setAttribute("hidden", "");
            else item.removeAttribute("hidden");
        });
    }, [indexFocused, clientId]);

    const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
        switch (tab.name) {
            case "General":
                return (
                    <>
                        <WcbTabsPanelGeneral
                            onToggle={() => handleTogglePanel("General", "General")}
                            initialOpen={tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "first"}
                            opened={tabGeneralIsPanelOpen === "General" || undefined}
                            setAttr__={(data) => setAttributes({ general_general: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={general_general}
                        />
                        <WcbTabsPanelTabTitle
                            onToggle={() => handleTogglePanel("General", "TabTitle")}
                            initialOpen={tabGeneralIsPanelOpen === "TabTitle"}
                            opened={tabGeneralIsPanelOpen === "TabTitle" || undefined}
                            setAttr__={(data) => setAttributes({ general_tabTitle: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={general_tabTitle}
                            tabTitles={titles}
                        />
                        <WcbTabsPanelPreset
                            onToggle={() => handleTogglePanel("General", "Preset", true)}
                            initialOpen={tabGeneralIsPanelOpen === "Preset"}
                            opened={tabGeneralIsPanelOpen === "Preset" || undefined}
                            setAttr__={(data) => {
                                if (data.preset === "carousel-simple") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: { ...general_general, layout: "accordion" },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                        style_icon: WCB_TABS_PANEL_STYLE_ICON_DEMO,
                                    });
                                } else if (data.preset === "carousel-solid") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: { ...general_general, layout: "accordion" },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO_SOLID,
                                        style_title: WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                        style_icon: WCB_TABS_PANEL_STYLE_ICON_DEMO,
                                    });
                                } else if (data.preset === "grid-simple") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: { ...general_general, layout: "grid" },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                    });
                                } else if (data.preset === "grid-solid") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: { ...general_general, layout: "grid" },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO_SOLID,
                                        style_title: WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                    });
                                } else {
                                    setAttributes({ general_preset: data });
                                }
                            }}
                            panelData={general_preset}
                        />
                    </>
                );
            case "Styles":
                return (
                    <>
                        <WcbTabsPanel_StyleTitle
                            onToggle={() => handleTogglePanel("Styles", "_StyleTitle")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleTitle" || tabStylesIsPanelOpen === "first"}
                            opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
                            setAttr__={(data) => setAttributes({ style_title: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_title}
                            style={attributes.general_general.style}
                        />
                        <WcbTabsPanel_StyleIcon
                            onToggle={() => handleTogglePanel("Styles", "_StyleIcon")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleIcon"}
                            opened={tabStylesIsPanelOpen === "_StyleIcon" || undefined}
                            setAttr__={(data) => setAttributes({ style_icon: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_icon}
                        />
                        <WcbTabsPanel_StyleBody
                            onToggle={() => handleTogglePanel("Styles", "_StyleBody")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleBody"}
                            opened={tabStylesIsPanelOpen === "_StyleBody" || undefined}
                            setAttr__={(data) => setAttributes({ style_body: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_body}
                        />
                    </>
                );
            case "Advances":
                return (
                    <AdvancePanelCommon
                        advance_motionEffect={advance_motionEffect}
                        advance_responsiveCondition={advance_responsiveCondition}
                        advance_zIndex={advance_zIndex}
                        handleTogglePanel={handleTogglePanel}
                        setAttributes={setAttributes}
                        tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
                    />
                );
            default:
                return <div></div>;
        }
    };

    const WcbAttrsForSave = useCallback((): WcbAttrsForSave => ({
        advance_responsiveCondition,
        advance_zIndex,
        uniqueId,
        advance_motionEffect,
        general_general,
        general_tabTitle,
        style_container,
        titles,
        tabContents,
        activeTabIndex,
        style_icon,
        style_title,
        style_body,
    }), [
        advance_responsiveCondition,
        advance_zIndex,
        general_general,
        general_tabTitle,
        style_container,
        style_icon,
        style_title,
        uniqueId,
        advance_motionEffect,
        titles,
        tabContents,
        activeTabIndex,
        style_body,
    ]);

    const renderAddnewButton = () => (
        <button
            type="button"
            className="relative wcb-tabs__title_inner_btn flex flex-shrink-0 items-center justify-center rounded-lg px-3 bg-sky-100/80 hover:bg-sky-100 text-sky-900 text-sm font-medium"
            onClick={() => {
                const newChild = createBlock("wcb/tab-child");
                insertBlock(newChild, undefined, clientId);
                const newTabContents = [...tabContents, ""];
                setAttributes({
                    titles: [...titles, { id: Date.now().toString(), title: "Tab", dataTabIndex: titles.length }],
                    tabContents: newTabContents,
                });
                setIndexFocused(titles.length);
            }}
        >
            <PlusIcon className="w-5 h-5" />
            <span className="ml-2.5">{__("Add tab", "boostify-blocks")}</span>
        </button>
    );

    const renderRemoveBtn = (item: BlockTabTitleItem, index: number) => (
        <button
            className="absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-shrink-0 items-center justify-center rounded-md h-8 w-8 bg-red-50 hover:bg-red-100 text-red-600"
            title={__("Remove", "boostify-blocks")}
            onClick={() => {
                const newTitles = titles.filter((j) => j.id !== item.id).map((t, i) => ({ ...t, dataTabIndex: i }));
                removeBlock(childInnerBlocks?.[index]?.clientId);
                const newTabContents = tabContents.filter((_, i) => i !== index);
                setAttributes({ titles: newTitles, tabContents: newTabContents });
                setIndexFocused(0);
            }}
        >
            <XMarkIcon className="w-5 h-5" />
        </button>
    );

    const renderIcon = (index: number) => {
        if (!general_tabTitle.enableIcon) return null;
        return general_tabTitle.icon ? <MyIconFull className={`wcb-tabs__icon ${activeTabIndex === index ? "wcb-tabs__icon-selected" : ""}`} icon={general_tabTitle.icon} /> : null;
    };

    return (
        <MyCacheProvider uniqueKey={clientId}>
            <div {...wrapBlockProps} className={`${wrapBlockProps?.className} wcb-tabs__wrap p-2 ${uniqueId}`} data-uniqueid={uniqueId}>
                <HOCInspectorControls renderTabPanels={renderTabBodyPanels} uniqueId={uniqueId} />
                {uniqueId && <GlobalCss {...WcbAttrsForSave()} />}
                <div className="wcb-tabs__contents">
                    <div className="wcb-tabs__titles">
                        {titles.map((item, index) => (
                            <div className={`wcb-tabs__title_inner relative group ${activeTabIndex === index ? "wcb-tabs__title_inner-selected" : ""}`} data-tab-index={item.dataTabIndex} key={item.id}>
                                {renderRemoveBtn(item, index)}
                                {(general_tabTitle.iconPosition === "left" || general_tabTitle.iconPosition === "top") && renderIcon(index)}
                                <RichText
                                    key={item.id}
                                    tagName="p"
                                    className={`wcb-tabs__title ${activeTabIndex === index ? "wcb-tabs__title-selected" : ""}`}
                                    value={item.title}
                                    onFocusCapture={() => setIndexFocused(index)}
                                    onChange={(value) => {
                                        const newTitles = titles.map((j) => (j.id !== item.id ? j : { ...j, title: value }));
                                        setAttributes({ titles: newTitles });
                                    }}
                                    placeholder="Title"
                                />
                                {(general_tabTitle.iconPosition === "right" || general_tabTitle.iconPosition === "bottom") && renderIcon(index)}
                            </div>
                        ))}
                        {renderAddnewButton()}
                    </div>
                    <InnerBlocks 
						allowedBlocks={["wcb/tab-child"]} 
						template={
							[
								["wcb/tab-child", {}], 
								["wcb/tab-child", {}], 
								["wcb/tab-child", {}]
							]}
					/>
                </div>
            </div>
        </MyCacheProvider>
    );
};

export default Edit;
