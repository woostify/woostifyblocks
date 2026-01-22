import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import _ from "lodash";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
	INSPECTOR_CONTROLS_TABS,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import WcbCheckboxPanelGeneral from "./WcbCheckboxPanelGeneral";
import { FormInputLabelRichText } from "../block-form/FormInputLabelRichText";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import converUniqueId from "../utils/converUniqueId";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

export interface MyCheckboxOption {
	label: string;
	value: string;
	disabled?: boolean;
}
export const MY_CHECK_BOX_OPTIONS_DEMO: MyCheckboxOption[] = [
	{ label: "Checkbox label", value: "checkbox-value" },
	{ label: "Checkbox label 2", value: "checkbox-value-2" },
	{ label: "Checkbox label 3", value: "checkbox-value-3" },
];

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { general_general, uniqueId, label } = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion();
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const CHECKBOX_NAME = converUniqueId(uniqueId, "checkbox");

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	//
	const converValueFromString = (text: string) => {
		return text.replace(/ /g, "-");
	};
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbCheckboxPanelGeneral
							onToggle={() => handleTogglePanel("General", "General", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "General" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "General" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_general: data });
							}}
							panelData={general_general}
						/>
					</>
				);
			// case "Styles":
			// 	return <></>;
			case "Advances":
				return <></>;

			default:
				return <div></div>;
		}
	};

	const renderCheckboxOptions = () => {
		return (attributes.options || []).map((item, index) => (
			<div key={index + "-" + item.value}>
				<label className="wcb-checkbox__option">
					<input
						type="checkbox"
						className="wcb-checkbox__option-input"
						value={item.value}
						required={general_general.isRequired}
						name={CHECKBOX_NAME}
					/>
					<span className="wcb-checkbox__option-label">{item.label}</span>
				</label>
			</div>
		));
	};

	const renderAddnewButton = () => {
		return (
			<div className="py-3 flex justify-center ">
				<button
					type="button"
					className="relative flex w-full max-w-md items-center justify-center rounded-lg px-5 h-10 bg-sky-100/80 hover:bg-sky-100 text-sky-900 text-sm font-medium"
					onClick={(e) => {
						e.preventDefault();
						setAttributes({
							options: [
								...(attributes.options || []),
								MY_CHECK_BOX_OPTIONS_DEMO[0],
							],
						});
					}}
				>
					<PlusIcon className="w-5 h-5" />
					<span className="ml-2.5">{__("Add option", "boostify-blocks")}</span>
				</button>
			</div>
		);
	};

	const renderCheckBoxEditItem = (item: MyCheckboxOption, index: number) => {
		return (
			<div
				key={index + "-"}
				className="flex items-center justify-between space-x-2"
			>
				<label className="wcb-checkbox__option flex-shrink-0">
					<input
						type="checkbox"
						className="wcb-checkbox__option-input"
						name={CHECKBOX_NAME}
					/>
				</label>
				<div className="flex-1 flex space-x-2">
					<label className="flex-1 flex ">
						<RichText
							onChange={(value) => {
								setAttributes({
									options: attributes.options.map((item, j) => {
										if (j !== index) {
											return item;
										}
										return {
											...item,
											label: value || "",
										};
									}),
								});
							}}
							value={item.label}
							tagName="span"
							className="block flex-1 p-2 rounded-lg border border-slate-300 text-slate-500 text-sm"
						/>
					</label>
					<label className="flex-1 flex">
						<RichText
							onChange={(value) => {
								setAttributes({
									options: attributes.options.map((item, j) => {
										if (j !== index) {
											return item;
										}
										return {
											...item,
											value: converValueFromString(value || ""),
										};
									}),
								});
							}}
							value={item.value}
							tagName="span"
							className="block flex-1 p-2 rounded-lg border border-slate-300 text-slate-500 text-sm"
						/>
					</label>
				</div>
				<button
					className="flex-shrink-0 inline-flex items-center justify-center rounded-md h-8 w-8 bg-red-50 hover:bg-red-100 text-red-600"
					title={__("Remove", "boostify-blocks")}
					onClick={() => {
						setAttributes({
							options: attributes.options.filter((_, j) => j !== index),
						});
					}}
				>
					<XMarkIcon className="w-5 h-5" />
				</button>
			</div>
		);
	};

	const renderCheckboxOptionsEditing = () => {
		return (
			<div className="w-full flex flex-col space-y-2 p-4 my-2.5 rounded-lg border border-slate-300">
				{/* LABEL */}
				<div className="flex items-center justify-between space-x-2">
					<label className="wcb-checkbox__option ">
						<input type="checkbox" className="opacity-0" />
					</label>
					<div className="flex-1 flex space-x-2 text-base font-medium">
						<label className="flex-1">{__("Label", "boostify-blocks")}</label>
						<label className="flex-1">{__("Value", "boostify-blocks")}</label>
						<button className=" w-8 opacity-0"></button>
					</div>
				</div>

				{/* LOOP */}
				{(attributes.options || []).map(renderCheckBoxEditItem)}

				{/* BTN ADDNEW */}
				{renderAddnewButton()}
			</div>
		);
	};

	return (
		// <CacheProvider value={myCache}>
		<div
			{...wrapBlockProps}
			className={`${wrapBlockProps?.className} wcb-checkbox__wrap ${uniqueId}`}
			data-uniqueid={uniqueId}
		>
			{/* CONTROL SETTINGS */}
			<HOCInspectorControls
				tabs={INSPECTOR_CONTROLS_TABS.filter((item) => item.name !== "Styles")}
				renderTabPanels={renderTabBodyPanels}
				uniqueId={uniqueId}
			/>

			{/* CHILD CONTENT  */}
			<FormInputLabelRichText
				value={label}
				isRequired={general_general.isRequired}
				onChange={(value) => {
					setAttributes({ label: value });
				}}
			/>

			{isSelected ? renderCheckboxOptionsEditing() : renderCheckboxOptions()}
		</div>
		// </CacheProvider>
	);
};

export default Edit;
