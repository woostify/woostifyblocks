import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	PanelBody,
	RangeControl,
	TextControl,
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties, useEffect, useRef } from "react";
import HelpText from "../components/controls/HelpText";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { MySelectOption } from "../types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {} from "@googlemaps/react-wrapper";
import MyRadioGroup from "../components/controls/MyRadioGroup";

export interface WCB_MAP_PANEL_GENERAL {
	height: HasResponsive<string>;
	zoom: number;
	// latLngs: google.maps.LatLngLiteral[];
	// center: google.maps.LatLngLiteral;
	language: string;
	mapTypeId: "roadmap" | "satellite";
	placeQuery?: google.maps.places.PlaceResult;
}

export const WCB_MAP_PANEL_GENERAL_DEMO: WCB_MAP_PANEL_GENERAL = {
	height: { Desktop: "400px" },
	zoom: 13,
	// latLngs: [DEMO_LATLNG],
	// center: DEMO_LATLNG,
	mapTypeId: "roadmap",
	language: "en",
	placeQuery: {
		name: "Amsterdam Centraal railway station",
		place_id: "ChIJdan7FLcJxkcRQrwvoy3DwiM",
		formatted_address:
			"Amsterdam Centraal, Stationsplein, 1012 AB Amsterdam, Hà Lan",
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_MAP_PANEL_GENERAL;
	setAttr__: (data: WCB_MAP_PANEL_GENERAL) => void;
}

const WcbMapPanelGeneral: FC<Props> = ({
	panelData = WCB_MAP_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { height, zoom, mapTypeId, language, placeQuery } = panelData;

	const { currentDeviceValue: currentHeight } = getValueFromAttrsResponsives(
		height,
		deviceType
	);

	const OPTIONS: MySelectOption<WCB_MAP_PANEL_GENERAL["mapTypeId"]>[] = [
		{ label: "Roadmap", value: "roadmap" },
		{ label: "Satellite", value: "satellite" },
	];

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (!inputRef || !inputRef.current) {
			return;
		}
		const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
		autocomplete.addListener("place_changed", () => {
			const place = autocomplete.getPlace();
			console.log(1212, { place });

			if (!place.geometry || !place.geometry.location) {
				// User entered the name of a Place that was not suggested and
				// pressed the Enter key, or the Place Details request failed.
				window.alert("No details available for input: '" + place.name + "'");
				return;
			}
			setAttr__({ ...panelData, placeQuery: place });
			// If the place has a geometry, then present it on a map.
		});
	}, [inputRef]);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"WcbMapPanelGeneral space-y-5"}>
				<div>
					<MyLabelControl>{__("Location", "wcb")}</MyLabelControl>
					<input
						ref={inputRef}
						id="pac-input"
						type="text"
						className="w-full"
						placeholder={__("Enter a location", "wcb")}
						defaultValue={placeQuery?.formatted_address}
					/>
				</div>

				<MyRadioGroup
					label={__("Map Type", "wcb")}
					hasResponsive={false}
					// "roadmap" | "satellite";
					plans={[
						{ name: "roadmap", icon: "Roadmap" },
						{ name: "satellite", icon: "Satellite" },
					]}
					value={mapTypeId}
					onChange={(data) => {
						setAttr__({
							...panelData,
							mapTypeId: data as WCB_MAP_PANEL_GENERAL["mapTypeId"],
						});
					}}
				/>

				<MySelect
					label={__("Language", "wcb")}
					onChange={(value) => {
						setAttr__({ ...panelData, language: value });
					}}
					value={language}
				>
					<option value="">{__("Change map language", "wcb")}</option>
					<option value="af">AFRIKAANS</option>
					<option value="sq">ALBANIAN</option>
					<option value="am">AMHARIC</option>
					<option value="ar">ARABIC</option>
					<option value="hy">ARMENIAN</option>
					<option value="az">AZERBAIJANI</option>
					<option value="eu">BASQUE</option>
					<option value="be">BELARUSIAN</option>
					<option value="bn">BENGALI</option>
					<option value="bs">BOSNIAN</option>
					<option value="bg">BULGARIAN</option>
					<option value="my">BURMESE</option>
					<option value="ca">CATALAN</option>
					<option value="zh">CHINESE</option>
					<option value="zh-CN">CHINESE (SIMPLIFIED)</option>
					<option value="zh-HK">CHINESE (HONG KONG)</option>
					<option value="zh-TW">CHINESE (TRADITIONAL)</option>
					<option value="hr">CROATIAN</option>
					<option value="cs">CZECH</option>
					<option value="da">DANISH</option>
					<option value="nl">DUTCH</option>
					<option value="en">ENGLISH</option>
					<option value="en-AU">ENGLISH (AUSTRALIAN)</option>
					<option value="en-GB">ENGLISH (GREAT BRITAIN)</option>
					<option value="et">ESTONIAN</option>
					<option value="fa">FARSI</option>
					<option value="fi">FINNISH</option>
					<option value="fil">FILIPINO</option>
					<option value="fr">FRENCH</option>
					<option value="fr-CA">FRENCH (CANADA)</option>
					<option value="gl">GALICIAN</option>
					<option value="ka">GEORGIAN</option>
					<option value="de">GERMAN</option>
					<option value="el">GREEK</option>
					<option value="gu">GUJARATI</option>
					<option value="iw">HEBREW</option>
					<option value="hi">HINDI</option>
					<option value="hu">HUNGARIAN</option>
					<option value="is">ICELANDIC</option>
					<option value="id">INDONESIAN</option>
					<option value="it">ITALIAN</option>
					<option value="ja">JAPANESE</option>
					<option value="kn">KANNADA</option>
					<option value="kk">KAZAKH</option>
					<option value="km">KHMER</option>
					<option value="ko">KOREAN</option>
					<option value="ky">KYRGYZ</option>
					<option value="lo">LAO</option>
					<option value="lv">LATVIAN</option>
					<option value="lt">LITHUANIAN</option>
					<option value="mk">MACEDONIAN</option>
					<option value="ms">MALAY</option>
					<option value="ml">MALAYALAM</option>
					<option value="mr">MARATHI</option>
					<option value="mn">MONGOLIAN</option>
					<option value="ne">NEPALI</option>
					<option value="no">NORWEGIAN</option>
					<option value="pl">POLISH</option>
					<option value="pt">PORTUGUESE</option>
					<option value="pt-BR">PORTUGUESE (BRAZIL)</option>
					<option value="pt-PT">PORTUGUESE (PORTUGAL)</option>
					<option value="pa">PUNJABI</option>
					<option value="ro">ROMANIAN</option>
					<option value="ru">RUSSIAN</option>
					<option value="sr">SERBIAN</option>
					<option value="si">SINHALESE</option>
					<option value="sk">SLOVAK</option>
					<option value="sl">SLOVENIAN</option>
					<option value="es">SPANISH</option>
					<option value="es-419">SPANISH (LATIN AMERICA)</option>
					<option value="sw">SWAHILI</option>
					<option value="sv">SWEDISH</option>
					<option value="ta">TAMIL</option>
					<option value="te">TELUGU</option>
					<option value="th">THAI</option>
					<option value="tr">TURKISH</option>
					<option value="uk">UKRAINIAN</option>
					<option value="ur">URDU</option>
					<option value="uz">UZBEK</option>
					<option value="vi">VIETNAMESE</option>
					<option value="zu">ZULU</option>
				</MySelect>

				<RangeControl
					label={__("Zoom", "wcb")}
					value={zoom}
					onChange={(value) => setAttr__({ ...panelData, zoom: value || 1 })}
					min={1}
					max={22}
				/>
				<MySpacingSizesControl
					label={__("Height", "wcb")}
					hasResponsive
					onChange={(data) => {
						setAttr__({
							...panelData,
							height: {
								...height,
								[deviceType]: data,
							},
						});
					}}
					value={currentHeight || "0"}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbMapPanelGeneral;
