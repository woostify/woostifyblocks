import Save__260523 from "./Save__260523";
import Save_100623 from "./Save_100623";
import blokc1Attrs from "./attributes";
import { WCB_MAP_PANEL_GENERAL_DEMO } from "./WcbMapPanelGeneral";
import save from "./Save";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokc1Attrs,
		general_general: {
			type: "object",
			default: {
				...WCB_MAP_PANEL_GENERAL_DEMO,
				placeQuery: {
					name: "Amsterdam Centraal railway station",
					place_id: "ChIJdan7FLcJxkcRQrwvoy3DwiM",
					formatted_address:
						"Amsterdam Centraal, Stationsplein, 1012 AB Amsterdam, Hà Lan",
				},
			},
		},
	},
	save: Save__260523,
};
const v4 = {
	attributes: {
		...blokc1Attrs,
		general_general: {
			type: "object",
			default: {
				...WCB_MAP_PANEL_GENERAL_DEMO,
				placeQuery: {
					name: "Amsterdam Centraal railway station",
					place_id: "ChIJdan7FLcJxkcRQrwvoy3DwiM",
					formatted_address:
						"Amsterdam Centraal, Stationsplein, 1012 AB Amsterdam, Hà Lan",
				},
			},
		},
	},
	save: Save_100623,
};

const deprecated = [v4, v3, v2, v1];

export default deprecated;
