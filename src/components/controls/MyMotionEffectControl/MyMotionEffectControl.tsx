import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../MySelect";
// @ts-ignore
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";

const options = [
	{ label: "None", value: "" },
	{ label: "Bounce", value: "bounce" },
	{ label: "Flash", value: "flash" },
	{ label: "Pulse", value: "pulse" },
	{ label: "RubberBand", value: "rubberBand" },
	{ label: "ShakeX", value: "shakeX" },
	{ label: "ShakeY", value: "shakeY" },
	{ label: "HeadShake", value: "headShake" },
	{ label: "Swing", value: "swing" },
	{ label: "Tada", value: "tada" },
	{ label: "Wobble", value: "wobble" },
	{ label: "Jello", value: "jello" },
	{ label: "HeartBeat", value: "heartBeat" },
	{ label: "BackInDown", value: "backInDown" },
	{ label: "BackInLeft", value: "backInLeft" },
	{ label: "BackInRight", value: "backInRight" },
	{ label: "BackInUp", value: "backInUp" },
	{ label: "BounceIn", value: "bounceIn" },
	{ label: "BounceInDown", value: "bounceInDown" },
	{ label: "BounceInLeft", value: "bounceInLeft" },
	{ label: "BounceInRight", value: "bounceInRight" },
	{ label: "BounceInUp", value: "bounceInUp" },
	{ label: "FadeIn", value: "fadeIn" },
	{ label: "FadeInDown", value: "fadeInDown" },
	{ label: "FadeInDownBig", value: "fadeInDownBig" },
	{ label: "FadeInLeft", value: "fadeInLeft" },
	{ label: "FadeInLeftBig", value: "fadeInLeftBig" },
	{ label: "FadeInRight", value: "fadeInRight" },
	{ label: "FadeInRightBig", value: "fadeInRightBig" },
	{ label: "FadeInUp", value: "fadeInUp" },
	{ label: "FadeInUpBig", value: "fadeInUpBig" },
	{ label: "FadeInTopLeft", value: "fadeInTopLeft" },
	{ label: "FadeInTopRight", value: "fadeInTopRight" },
	{ label: "FadeInBottomLeft", value: "fadeInBottomLeft" },
	{ label: "FadeInBottomRight", value: "fadeInBottomRight" },
	{ label: "Flip", value: "flip" },
	{ label: "FlipInX", value: "flipInX" },
	{ label: "FlipInY", value: "flipInY" },
	{ label: "LightSpeedInRight", value: "lightSpeedInRight" },
	{ label: "LightSpeedInLeft", value: "lightSpeedInLeft" },
	{ label: "RotateIn", value: "rotateIn" },
	{ label: "RotateInDownLeft", value: "rotateInDownLeft" },
	{ label: "RotateInDownRight", value: "rotateInDownRight" },
	{ label: "RotateInUpLeft", value: "rotateInUpLeft" },
	{ label: "RotateInUpRight", value: "rotateInUpRight" },
	{ label: "Hinge", value: "hinge" },
	{ label: "JackInTheBox", value: "jackInTheBox" },
	{ label: "RollIn", value: "rollIn" },
	{ label: "ZoomIn", value: "zoomIn" },
	{ label: "ZoomInDown", value: "zoomInDown" },
	{ label: "ZoomInLeft", value: "zoomInLeft" },
	{ label: "ZoomInRight", value: "zoomInRight" },
	{ label: "ZoomInUp", value: "zoomInUp" },
	{ label: "SlideInDown", value: "slideInDown" },
	{ label: "SlideInLeft", value: "slideInLeft" },
	{ label: "SlideInRight", value: "slideInRight" },
	{ label: "SlideInUp", value: "slideInUp" },
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
