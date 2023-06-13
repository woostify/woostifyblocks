import React, { FC } from "react";
import _ from "lodash";
interface Props {
	allSettings: typeof window.wcbGlobalVariables;
	onChange: (data: typeof window.wcbGlobalVariables) => void;
}

const SettingsPageBlockSettings: FC<Props> = ({ allSettings, onChange }) => {
	const debounce_fun = _.debounce(function (data: Props["allSettings"]) {
		console.log("Function debounced after 300ms!", { data });
		onChange(data);
	}, 300);

	const renderFormSettings = () => {
		return (
			<form>
				<div>
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg font-medium text-gray-900">
						Form
					</h3>
					<p className="text-sm text-slate-500 mt-2">
						To enable reCAPTCHA for your form, please follow the steps mentioned{" "}
						<a
							href="https://www.google.com/recaptcha/admin/create"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium underline text-slate-700"
						>
							here
						</a>{" "}
						or{" "}
						<a
							href="https://cloud.google.com/recaptcha-enterprise/docs/create-key"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium underline text-slate-700"
						>
							read more docs.
						</a>{" "}
					</p>
				</div>
				<div className="mt-8 grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="reCAPTCHAv2-sitekey"
							className="block text-sm font-medium text-gray-700 select-none"
						>
							ReCAPTCHA v2 - site key
						</label>
						<input
							type="text"
							name="reCAPTCHAv2-sitekey"
							id="reCAPTCHAv2-sitekey"
							autoComplete="given-name"
							className="mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							defaultValue={allSettings.reCAPTCHA_v2_site_key}
							onChange={(e) => {
								debounce_fun({
									...allSettings,
									reCAPTCHA_v2_site_key: e.currentTarget.value,
								});
							}}
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="reCAPTCHAv2-secret"
							className="block text-sm font-medium text-gray-700 select-none"
						>
							ReCAPTCHA v2 - secret key
						</label>
						<input
							type="text"
							name="reCAPTCHAv2-secret"
							id="reCAPTCHAv2-secret"
							autoComplete="family-name"
							className="mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							defaultValue={allSettings.reCAPTCHA_v2_secret_key}
							onChange={(e) => {
								debounce_fun({
									...allSettings,
									reCAPTCHA_v2_secret_key: e.currentTarget.value,
								});
							}}
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="reCAPTCHAv3-sitekey"
							className="block text-sm font-medium text-gray-700 select-none"
						>
							ReCAPTCHA v3 - site key
						</label>
						<input
							type="text"
							name="reCAPTCHAv3-sitekey"
							id="reCAPTCHAv3-sitekey"
							autoComplete="given-name"
							className="mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							defaultValue={allSettings.reCAPTCHA_v3_site_key}
							onChange={(e) => {
								debounce_fun({
									...allSettings,
									reCAPTCHA_v3_site_key: e.currentTarget.value,
								});
							}}
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="reCAPTCHAv3-secret"
							className="block text-sm font-medium text-gray-700  select-none"
						>
							ReCAPTCHA v3 - secret key
						</label>
						<input
							type="text"
							name="reCAPTCHAv3-secret"
							id="reCAPTCHAv3-secret"
							autoComplete="family-name"
							className="mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							defaultValue={allSettings.reCAPTCHA_v3_secret_key}
							onChange={(e) => {
								debounce_fun({
									...allSettings,
									reCAPTCHA_v3_secret_key: e.currentTarget.value,
								});
							}}
						/>
					</div>
				</div>
			</form>
		);
	};

	return (
		<div className="divide-y">
			<div className="pb-8">{renderFormSettings()}</div>
		</div>
	);
};

export default SettingsPageBlockSettings;
