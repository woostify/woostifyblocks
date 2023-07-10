import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	defaultExtend: boolean;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	defaultExtend: {
		type: "bool",
		default: false,
	},
};

export default blokc1Attrs;
