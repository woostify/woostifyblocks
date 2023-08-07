import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { get } from "lodash";
import React, { FC, useEffect, useState, useMemo } from "react";
import { BlockWCBContainerAttrs } from "./attributes";
import "./editor.scss";
import {
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";
import { FLEX_PROPERTIES_CONTROL_DEMO } from "../components/controls/MyFlexPropertiesControl/types";
import { useSelect, useDispatch } from "@wordpress/data";
import ContainerEdit from "./ContainerEdit";

export type ContainerEditProps<T, C = any> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
	isSelected: boolean;
	context: C;
	className: string;
	insertBlocksAfter: Function;
	onReplace: Function;
};

export interface EditProps<T, C = any> extends ContainerEditProps<T, C> {}

export interface TPlaceholder
	extends ContainerEditProps<BlockWCBContainerAttrs> {
	name: string;
	onSelect: () => void;
}

const Placeholder: FC<TPlaceholder> = ({
	attributes,
	setAttributes,
	name,
	clientId,
	onSelect,
}) => {
	// RESET FLEX PROPERTIES
	useEffect(() => {
		setAttributes({
			general_flexProperties: FLEX_PROPERTIES_CONTROL_DEMO,
		});
	}, []);

	const { blockType, defaultVariation, variations } = useSelect(
		(select) => {
			const { getBlockVariations, getBlockType, getDefaultBlockVariation } =
				select(blocksStore) as any;

			return {
				blockType: getBlockType(name),
				defaultVariation: getDefaultBlockVariation(name, "block"),
				variations: getBlockVariations(name, "block"),
			};
		},
		[name]
	);
	const { replaceInnerBlocks } = useDispatch(blockEditorStore);

	return (
		<div {...useBlockProps()}>
			<BlockVariationPicker
				icon={get(blockType, ["icon", "src"])}
				label={get(blockType, ["title"])}
				instructions={__("Select a variation to start with.")}
				onSelect={(nextVariation = defaultVariation) => {
					onSelect();

					if (typeof nextVariation.attributes === "object") {
						setAttributes({ ...attributes, ...nextVariation.attributes });
					}
					if (nextVariation.innerBlocks) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks),
							true
						);
					}
				}}
				variations={variations}
				allowSkip
			/>
		</div>
	);
};

const Edit = (props) => {
	const { clientId, attributes, setAttributes } = props;
	const { hasInnerBlocks, hasParent } = useSelect(
		(select) => {
			return {
				hasParent:
					// @ts-ignore
					select(blockEditorStore).getBlockParents(clientId).length > 0,
				// @ts-ignore
				hasInnerBlocks: select(blockEditorStore).getBlocks(clientId).length > 0,
			};
		},
		[clientId]
	);
	const [selectedVariant, setSelectedVariant] = useState(false);

	const Component = useMemo(() => {
		const C =
			// tai sao can attributes.uniqueId: Khi thay doi attrs "align" thi block bi render lai toan bo -> selectedVariant se thanh false
			hasParent || hasInnerBlocks || selectedVariant || !!attributes.uniqueId
				? ContainerEdit
				: Placeholder;
		return C;
	}, [hasParent, hasInnerBlocks, selectedVariant]);

	return (
		<Component
			{...props}
			onSelect={() => {
				//
				// setAttributes.align === "not-set" && setAttributes({ align: "full" });
				setSelectedVariant(true);
			}}
		/>
	);
};

export default Edit;
