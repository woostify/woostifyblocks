import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
	INSPECTOR_CONTROLS_TABS,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import WcbCheckboxPanelGeneral from "./WcbCheckboxPanelGeneral";
import { FormInputLabelRichText } from "../block-form/FormInputLabelRichText";
import { PencilIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export interface MyCheckboxOption {
	label: string;
	value: string;
}
export const MY_CHECK_BOX_OPTIONS_DEMO: MyCheckboxOption[] = [
	{ label: "Checkbox label", value: "checkbox-value" },
];

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { general_general, uniqueId, label } = attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
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
		return (attributes.options || []).map((item) => (
			<>
				<label className="wcb-checkbox__option">
					<input
						type="checkbox"
						className="wcb-checkbox__option-input"
						value={item.value}
						name="xxx"
					/>
					<span className="wcb-checkbox__option-label">{item.label}</span>
				</label>
				<br />
			</>
		));
	};

	const renderCheckboxOptionsEditing = () => {
		return (
			<div className="w-full flex flex-col divide-y">
				{(attributes.options || []).map((item) => (
					<>
						<div className="flex items-center justify-between group">
							<label className="wcb-checkbox__option py-2">
								<input
									type="checkbox"
									className="wcb-checkbox__option-input"
									value={item.value}
									name="xxx"
								/>
								<span className="wcb-checkbox__option-label truncate">
									{item.label}
								</span>
							</label>
							<div className="hidden group-hover:inline-flex space-x-1 flex-shrink-0">
								<button className="flex items-center justify-center w-8 h-8 rounded-md bg-sky-500 text-white">
									<PencilIcon className="w-4 h-4" />
								</button>
								<button className="flex items-center justify-center w-8 h-8 rounded-md bg-red-500 text-white">
									<XMarkIcon className="w-4 h-4" />
								</button>
							</div>
						</div>
					</>
				))}
			</div>
		);
	};

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-checkbox__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					tabs={INSPECTOR_CONTROLS_TABS.filter(
						(item) => item.name !== "Styles"
					)}
					renderTabPanels={renderTabBodyPanels}
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

				<hr className="w-full mt-4 mb-2" />
				<div className="my-2 flex items-end space-x-2">
					<label className="flex-1">
						<span>Option label</span>
						<input className="w-full rounded-lg" type="text" />
					</label>
					<label className="flex-1">
						<span>Option value</span>
						<input className="w-full rounded-lg" type="text" />
					</label>
					<button
						className="flex-shrink-0 inline-flex items-center justify-center rounded-lg transition-colors text-base font-medium px-3 h-11 bg-sky-600 text-white "
						onClick={() => {
							setAttributes({
								options: [
									...(attributes.options || []),
									MY_CHECK_BOX_OPTIONS_DEMO[0],
								],
							});
						}}
					>
						<PlusIcon className="w-5 h-5" />
						<span className="ml-2">Add</span>
					</button>
				</div>
			</div>
		</CacheProvider>
	);
};

export default Edit;
