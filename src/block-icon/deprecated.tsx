import Save from "./Save";
import blokc1Attrs from "./attributes";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: blokc1Attrs,
	save: Save,
};

const deprecated = [v3, v2, v1];

export default deprecated;
