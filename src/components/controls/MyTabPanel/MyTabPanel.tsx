import { TabPanel } from "@wordpress/components";
import React, { FC } from "react";

interface Props extends TabPanel.Props {
	className?: string;
}

const MyTabPanel: FC<Props> = ({
	className = "",
	tabs,
	children,
	initialTabName,
	activeClass = "active-tab",
}) => {
	return (
		<TabPanel
			className={`wcb-bodyControls__panel ${className}`}
			activeClass={activeClass}
			initialTabName={initialTabName}
			tabs={tabs}
		>
			{children}
		</TabPanel>
	);
};

export default MyTabPanel;
