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
		'showDays': props.general_date.show_day,
		'showHours': props.general_date.show_hour,
		'showMinutes': props.general_date.show_minute, 
		'isFrontend': true, 
		'timerEndAction': cd_date[1],
		'redirectURL': ''
	}
	WCBCountdown.changeEndTime(`.${props.uniqueId} .wcb-countdown__content`, data);
}