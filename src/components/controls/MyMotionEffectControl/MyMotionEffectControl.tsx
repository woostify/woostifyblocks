import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../MyRadioGroup";
import MySelect from "../MySelect";

export interface MyMotionEffectControl {
	entranceAnimation: string;
	animationDuration: "slower" | "slow" | "fast" | "faster" | "";
	animationDelay: number;
}

interface Props {
	data: MyMotionEffectControl;
	onChange?: (data: MyMotionEffectControl) => void;
}

const options: { label: string; value: string }[] = [
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
	{ label: "Rotate-out-left", value: "rotate-out-left" },
	{ label: "Rotate-out-right", value: "rotate-out-right" },
	{ label: "Rotate-out-up", value: "rotate-out-up" },
	{ label: "Rubberband", value: "rubberband" },
	{ label: "Shake-horizontal", value: "shake-horizontal" },
	{ label: "Shake-vertical", value: "shake-vertical" },
	{ label: "Slide-in-down", value: "slide-in-down" },
	{ label: "Slide-in-left", value: "slide-in-left" },
	{ label: "Slide-in-right", value: "slide-in-right" },
	{ label: "Slide-in-up", value: "slide-in-up" },
	{ label: "Slide-out-down", value: "slide-out-down" },
	{ label: "Slide-out-left", value: "slide-out-left" },
	{ label: "Slide-out-right", value: "slide-out-right" },
	{ label: "Slide-out-up", value: "slide-out-up" },
	{ label: "Swing-in-left", value: "swing-in-left" },
	{ label: "Swing-in-right", value: "swing-in-right" },
	{ label: "Swing-out-left", value: "swing-out-left" },
	{ label: "Swing-out-right", value: "swing-out-right" },
	{ label: "Tada", value: "tada" },
	{ label: "Wobble", value: "wobble" },
	{ label: "Wobble-vertical", value: "wobble-vertical" },
];

const MyMyMotionEffectControl: FC<Props> = ({ onChange, data }) => {
	return (
		<div>
			<MySelect options={options} onChange={(value) => {}} />
		</div>
	);
};

export default MyMyMotionEffectControl;
