import { WcbAttrsForSave } from "./Save";
interface Props extends WcbAttrsForSave {}


export function initCountDown(
	elem: Element,
	props: Props
) {
	var cd_date = props.general_date.date.split("T");
	const data = {
		'block_id': props.uniqueId,
		'endDateTime': cd_date[0],
		'showDays': true,
		'showHours': true,
		'showMinutes': true, 
		'isFrontend': true, 
		'timerEndAction': cd_date[1],
		'redirectURL': ''
	}
	WCBCountdown.init('.wcb-countdown__content', data);
}
