const checkResponsiveValueForOptimizeCSS = ({
	mobile_v,
	tablet_v,
	desktop_v,
}) => {
	let new_tablet_v = tablet_v;
	let new_desktop_v = desktop_v;

	if (mobile_v === tablet_v && tablet_v === desktop_v) {
		return {
			mobile_v,
			tablet_v: "",
			desktop_v: "",
		};
	}

	if (desktop_v === tablet_v || desktop_v === mobile_v) {
		new_desktop_v = "";
	}

	if (tablet_v === mobile_v) {
		new_tablet_v = "";
	}

	return {
		mobile_v,
		tablet_v: new_tablet_v,
		desktop_v: new_desktop_v,
	};
};

export default checkResponsiveValueForOptimizeCSS;
