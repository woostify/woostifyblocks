import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useState } from "react";
import ServerSideRender from "@wordpress/server-side-render";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import { compose } from "@wordpress/compose";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import ProductsQueries from "./ProductsQueries";
import WcbProductPanelSortingAndFiltering from "./WcbProductPanelSortingAndFiltering";
import {
	Button,
	Placeholder,
	Tip,
	withSpokenMessages,
} from "@wordpress/components";
import { withDispatch, withSelect } from "@wordpress/data";
import {
	DEFAULT_PRODUCT_LIST_LAYOUT,
	getProductLayoutConfig,
} from "./base-utils";
import { createBlock } from "@wordpress/blocks";
import { Icon, grid } from "@wordpress/icons";

interface Props extends EditProps<WcbAttrs> {
	block: any;
	replaceInnerBlocks: any;
}

const Edit: FC<Props> = (props) => {
	const {
		attributes,
		setAttributes,
		clientId,
		block,
		insertBlocksAfter,
		replaceInnerBlocks,
	} = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		uniqueId,
		layoutConfig,
	} = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps();
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;

	//
	const [innerBlocks, setInnerBlocks] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	//

	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});

		setInnerBlocks(block.innerBlocks);
	}, [UNIQUE_ID]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbProductPanelSortingAndFiltering
							onToggle={() =>
								handleTogglePanel("General", "SortingAndFiltering", true)
							}
							initialOpen={
								tabGeneralIsPanelOpen === "SortingAndFiltering" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={
								tabGeneralIsPanelOpen === "SortingAndFiltering" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_sortingAndFiltering: data });
							}}
							panelData={general_sortingAndFiltering}
						/>
					</>
				);
			case "Styles":
				return <></>;
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_sortingAndFiltering,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
	]);

	const togglePreview = () => {
		setIsEditing(!isEditing);
	};

	const getTitle = () => {
		return __("All Products", "woocommerce");
	};

	const getIcon = () => {
		return <Icon icon={grid} />;
	};

	const renderEditMode = () => {
		const onDone = () => {
			const { block, setAttributes } = props;
			setAttributes({
				layoutConfig: getProductLayoutConfig(block.innerBlocks),
			});
			setInnerBlocks(block.innerBlocks);
			togglePreview();
		};

		const onCancel = () => {
			const { block, replaceInnerBlocks } = props;
			replaceInnerBlocks(block.clientId, innerBlocks, false);
			togglePreview();
		};

		const onReset = () => {
			const { block, replaceInnerBlocks } = props;
			const newBlocks = [];
			DEFAULT_PRODUCT_LIST_LAYOUT.map(([name, attributes]) => {
				newBlocks.push(createBlock(name, attributes));
				return true;
			});
			replaceInnerBlocks(block.clientId, newBlocks, false);
			setInnerBlocks(block.innerBlocks);
		};

		let innerBlockProps = {
			template: layoutConfig,
			templateLock: false,
			// allowedBlocks: [],
		};

		if (layoutConfig.length !== 0) {
			innerBlockProps.renderAppender = false;
		}

		return (
			<Placeholder icon={getIcon()} label={getTitle()}>
				{__("Display all products from your store as a grid.", "woocommerce")}
				<div className="wc-block-all-products-grid-item-template">
					<Tip>
						{__(
							"Edit the blocks inside the example below to change the content displayed for all products within the product grid.",
							"woocommerce"
						)}
					</Tip>

					<div className="wc-block-grid wc-block-layout has-1-columns">
						<ul className="wc-block-grid__products">
							<li className="wc-block-grid__product">
								{/* <ProductDataContextProvider product={previewProducts[0]}> */}
								<InnerBlocks {...innerBlockProps} />
								{/* </ProductDataContextProvider> */}
							</li>
						</ul>
					</div>
					<div className="wc-block-all-products__actions">
						<Button
							className="wc-block-all-products__done-button"
							variant="secondary"
							onClick={onDone}
						>
							{__("Done", "woocommerce")}
						</Button>
						<Button
							className="wc-block-all-products__cancel-button"
							variant="tertiary"
							onClick={onCancel}
						>
							{__("Cancel", "woocommerce")}
						</Button>
						<Button
							className="wc-block-all-products__reset-button"
							icon={<Icon icon={grid} />}
							label={__("Reset layout to default", "woocommerce")}
							onClick={onReset}
						>
							{__("Reset Layout", "woocommerce")}
						</Button>
					</div>
				</div>
			</Placeholder>
		);
	};

	console.log(111, { layoutConfig });

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-products__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				{/* <ProductsQueries /> */}
				<h2> This is Products ... </h2>
				{renderEditMode()}
				<ServerSideRender block="wcb/products" attributes={undefined} />
			</div>
		</MyCacheProvider>
	);
};

export default compose(
	withSpokenMessages,
	withSelect((select, { clientId }) => {
		const { getBlock } = select("core/block-editor");
		return {
			block: getBlock(clientId),
		};
	}),
	withDispatch((dispatch) => {
		const { replaceInnerBlocks } = dispatch("core/block-editor");
		return {
			replaceInnerBlocks,
		};
	})
)(Edit);
