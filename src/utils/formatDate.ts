export default function ncFormatDate(date) {
	// CAN LAM THEM PHAN DATE FOrMAT ---- get_option(date_format)

	let d = new Date(date);
	let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	return `${mo} ${da}, ${ye}`;
}
