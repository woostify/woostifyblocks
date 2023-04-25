import React, { ReactNode, FC } from "react";
import useSetBlockPanelInfo from "../../hooks/useSetBlockPanelInfo";
import StylesPanelCommon_Name from "./StylesPanelCommon_Name";

interface Props<T> {
	children: ReactNode;
	uniqueId: string;
	panelData: T;
	onSetAttr__: (data: T) => void;
}

function StylesPanelCommon<T>({
	children,
	uniqueId,
	panelData,
	onSetAttr__,
}: Props<T>) {
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	return (
		<>
			{children}
			<StylesPanelCommon_Name panelData={panelData} setAttr__={onSetAttr__} />
		</>
	);
}

export default StylesPanelCommon;
