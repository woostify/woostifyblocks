import React, { useRef, useEffect } from "react";
import { useSelect, useDispatch } from "@wordpress/data";
// @ts-ignore
import {
	BlockInPanelStore,
	WcbPanelStoreState,
	WCB_STORE_PANELS,
} from "../data";
import { InspectorControlsTabTitle } from "../components/HOCInspectorControls";

const useSetBlockPanelInfo = (uniqueId: string) => {
	// DIEU NAY GIUP EMOTION GLOBAL CSS DUOC IMPORT TRONG MOBILE IFRAME!!!
	const {
		setBlockPanelInfo,
	}: {
		setBlockPanelInfo?: (blockId: string, block: BlockInPanelStore) => void;
	} = useDispatch(WCB_STORE_PANELS);

	const { blockStores } = useSelect(
		(select) => {
			return {
				blockStores: select(
					WCB_STORE_PANELS
					// @ts-ignore
				)?.getBlockPanelInfo() as WcbPanelStoreState,
			};
		},
		[uniqueId]
	);
	const { tabIsOpen, Advances, General, Styles } = blockStores[uniqueId] || {};
	const blockStore = blockStores[uniqueId] as BlockInPanelStore | undefined;

	useEffect(() => {
		if (!blockStore && setBlockPanelInfo) {
			setBlockPanelInfo(uniqueId, {
				tabIsOpen: "General",
				General: {
					panelIsOpen: "first",
				},
				Styles: {
					panelIsOpen: "first",
				},
			});
		}
	}, [uniqueId]);

	const handleTogglePanel = (
		tab: InspectorControlsTabTitle,
		panel?: string,
		initOpenPanel?: boolean
	) => {
		if (!setBlockPanelInfo) {
			return;
		}

		if (
			initOpenPanel &&
			blockStore &&
			blockStore[tab]?.panelIsOpen === "first"
		) {
			panel = "";
		}

		if (blockStore && blockStore[tab]?.panelIsOpen === panel) {
			panel = "";
		}

		setBlockPanelInfo(uniqueId, {
			tabIsOpen: tab,
			[tab]: {
				panelIsOpen:
					panel === undefined && blockStore
						? blockStore[tab]?.panelIsOpen
						: panel,
			},
		});
	};

	return {
		setBlockPanelInfo,
		tabAdvances: Advances,
		tabGeneral: General,
		tabStyles: Styles,
		tabIsOpen,
		blockStore,
		handleTogglePanel,
		tabGeneralIsPanelOpen: General?.panelIsOpen,
		tabStylesIsPanelOpen: Styles?.panelIsOpen,
		tabAdvancesIsPanelOpen: Advances?.panelIsOpen,
	};
};

export default useSetBlockPanelInfo;
