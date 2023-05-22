import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../MySelect";
// @ts-ignore
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

export function getAnimateFMotionEffectData(data: MyMotionEffectData) {
	return "";
	return ` animate__animated animate__${data?.entranceAnimation} animate__${data?.animationDuration} animate__delay-${data?.animationDelay}ms  animate__repeat-${data?.repeat}`;
}

const options = [
	{ label: "", value: "" },
	{ label: "Bounce", value: "bounce" },
	{ label: "Flash", value: "flash" },
	{ label: "Pulse", value: "pulse" },
	{ label: "Shake", value: "shake" },
	{ label: "Swing", value: "swing" },
	{ label: "Tada", value: "tada" },
	{ label: "Wobble", value: "wobble" },
	{ label: "Wave", value: "wave" },
	{ label: "Wobble Vertical", value: "wobble-vertical" },
	{ label: "Bounce In", value: "bounce-in" },
	{ label: "Bounce In Down", value: "bounce-in-down" },
	{ label: "Bounce In Left", value: "bounce-in-left" },
	{ label: "Bounce In Right", value: "bounce-in-right" },
	{ label: "Bounce In Up", value: "bounce-in-up" },
	{ label: "Bounce Out", value: "bounce-out" },
	{ label: "Bounce Out Down", value: "bounce-out-down" },
	{ label: "Bounce Out Left", value: "bounce-out-left" },
	{ label: "Bounce Out Right", value: "bounce-out-right" },
	{ label: "Bounce Out Up", value: "bounce-out-up" },
	{ label: "Fade In", value: "fade-in" },
	{ label: "Fade In Down", value: "fade-in-down" },
	{ label: "Fade In Left", value: "fade-in-left" },
	{ label: "Fade In Right", value: "fade-in-right" },
	{ label: "Fade In Up", value: "fade-in-up" },
	{ label: "Fade Out", value: "fade-out" },
	{ label: "Fade Out Down", value: "fade-out-down" },
	{ label: "Fade Out Left", value: "fade-out-left" },
	{ label: "Fade Out Right", value: "fade-out-right" },
	{ label: "Fade Out Up", value: "fade-out-up" },
	{ label: "Flip In X", value: "flip-in-x" },
	{ label: "Flip In Y", value: "flip-in-y" },
	{ label: "Flip Out X", value: "flip-out-x" },
	{ label: "Flip Out Y", value: "flip-out-y" },
	{ label: "Lightspeed In Left", value: "lightspeed-in-left" },
	{ label: "Lightspeed In Right", value: "lightspeed-in-right" },
	{ label: "Lightspeed Out Left", value: "lightspeed-out-left" },
	{ label: "Lightspeed Out Right", value: "lightspeed-out-right" },
	{ label: "Rotate In", value: "rotate-in" },
	{ label: "Rotate In Down", value: "rotate-in-down" },
	{ label: "Rotate In Left", value: "rotate-in-left" },
	{ label: "Rotate In Right", value: "rotate-in-right" },
	{ label: "Rotate In Up", value: "rotate-in-up" },
	{ label: "Rotate Out", value: "rotate-out" },
	{ label: "Rotate Out Down", value: "rotate-out-down" },
	{ label: "Rotate Out Left", value: "rotate-out-left" },
	{ label: "Rotate Out Right", value: "rotate-out-right" },
	{ label: "Rotate Out Up", value: "rotate-out-up" },
	{ label: "Rubberband", value: "rubberband" },
	{ label: "Shake Horizontal", value: "shake-horizontal" },
	{ label: "Shake Vertical", value: "shake-vertical" },
	{ label: "Slide In Down", value: "slide-in-down" },
	{ label: "Slide In Left", value: "slide-in-left" },
	{ label: "Slide In Right", value: "slide-in-right" },
	{ label: "Slide In Up", value: "slide-in-up" },
	{ label: "Slide Out Down", value: "slide-out-down" },
	{ label: "Slide Out Left", value: "slide-out-left" },
	{ label: "Slide Out Right", value: "slide-out-right" },
	{ label: "Slide Out Up", value: "slide-out-up" },
	{ label: "Swing In Left", value: "swing-in-left" },
	{ label: "Swing In Right", value: "swing-in-right" },
	{ label: "Swing Out Left", value: "swing-out-left" },
	{ label: "Swing Out Right", value: "swing-out-right" },
	{ label: "Tada", value: "tada" },
	{ label: "Wobble", value: "wobble" },
	{ label: "Wobble Vertical", value: "wobble-vertical" },
];

export interface MyMotionEffectData {
	entranceAnimation: string;
	animationDuration: "slower" | "slow" | "fast" | "faster" | "";
	animationDelay: number;
	repeat: "1" | "2" | "3" | "infinite";
}

export const MY_MOTION_EFFECT_DEMO: MyMotionEffectData = {
	animationDelay: 0,
	animationDuration: "fast",
	entranceAnimation: "",
	repeat: "1",
};

interface Props {
	data: MyMotionEffectData;
	onChange: (data: MyMotionEffectData) => void;
}

const MyMyMotionEffectData: FC<Props> = ({ onChange, data }) => {
	console.log(22, "-----MyMyMotionEffectData-----", { data });

	return (
		<div className="space-y-4">
			<MySelect
				label="Animation name"
				options={options}
				hasResponsive={false}
				onChange={(value) => onChange({ ...data, entranceAnimation: value })}
				value={data.entranceAnimation}
			/>

			<MySelect
				label="Animation duration"
				options={[
					{ label: "Slow (2s)", value: "slow" },
					{ label: "Slower (3s)", value: "slower" },
					{ label: "Fast (800ms)", value: "fast" },
					{ label: "Faster (500ms)", value: "faster" },
				]}
				hasResponsive={false}
				onChange={(value) =>
					onChange({
						...data,
						animationDuration: value as MyMotionEffectData["animationDuration"],
					})
				}
				value={data.animationDuration}
			/>

			<NumberControl
				isShiftStepEnabled={true}
				shiftStep={1000}
				step={100}
				__unstableInputWidth="60px"
				label={__("Animation delay (ms)")}
				labelPosition="edge"
				min={0}
				value={data.animationDelay}
				onChange={(e) =>
					onChange({ ...data, animationDelay: Number(e || 0) || 0 })
				}
			/>

			<MySelect
				label="Animation repeat"
				options={[
					{ label: "1", value: "1" },
					{ label: "2", value: "2" },
					{ label: "3", value: "3" },
					{ label: "infinite", value: "infinite" },
				]}
				hasResponsive={false}
				onChange={(value) =>
					onChange({
						...data,
						repeat: value as MyMotionEffectData["repeat"],
					})
				}
				value={data.repeat}
			/>
		</div>
	);
};

export default MyMyMotionEffectData;
