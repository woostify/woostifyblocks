import React, { FC } from "react";
import ReactDOM from "react-dom";
import { WcbAttrsForSave } from "./Save";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrsForSave {}


export function initCountDown(
	elem: Element,
	props: Props
) {
	console.log(elem, props);
	var cd_date = props.general_date.date.split("T");
		
		const data = {
			'block_id'            : props.uniqueId,
			'endDateTime'       : cd_date[0],
			'showDays'         : true,
			'showHours'       : true,
			'showMinutes' : true, 
			'isFrontend' : true, 
			'timerEndAction' : cd_date[1],
			'redirectURL' : ''
		}
		console.log(data);
		WCBCountdown.init('.wcb-countdown__content', data);
}
