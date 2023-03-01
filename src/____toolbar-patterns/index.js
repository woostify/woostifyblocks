import { registerBlockType } from "@wordpress/blocks";
import { registerPlugin } from "@wordpress/plugins";
import { PluginMoreMenuItem } from "@wordpress/edit-post";
import { image } from "@wordpress/icons";
import { PluginSidebar } from "@wordpress/edit-post";
/**
 * Internal dependencies
 */
import "./App";
import WcbPluginSidebar from "./WcbPluginSidebar";
// import metadata from "./block.json";
//
// registerBlockType(metadata.name, {
// 	edit: () => null,
// 	save: () => null,
// 	attributes: [],
// });

const PluginSidebarTest = () => (
	<PluginSidebar
		name="wcb-plugin-sidebar-woostify"
		title="Woostify Page Settings"
		icon={image}
	>
		<WcbPluginSidebar />
	</PluginSidebar>
);

registerPlugin("wcb-plugin-sidebar-woostify", { render: PluginSidebarTest });
