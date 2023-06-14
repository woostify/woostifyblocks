import { HasResponsive } from "../MyBackgroundControl/types";
import React, { FC, CSSProperties } from "react";
import { MyRadioItem } from "../MyRadioGroup";

export type MyFlexPropertiesControlData = {
	flexDirection: HasResponsive<CSSProperties["flexDirection"]>;
	alignItems: HasResponsive<CSSProperties["alignItems"]>;
	justifyContent: HasResponsive<CSSProperties["justifyContent"]>;
	flexWrap: HasResponsive<CSSProperties["flexWrap"]>;
};
export const FLEX_PROPERTIES_CONTROL_DEMO: MyFlexPropertiesControlData = {
	flexDirection: { Desktop: "column", Tablet: "column" },
	alignItems: { Desktop: "center" },
	justifyContent: { Desktop: "center" },
	flexWrap: { Desktop: "nowrap" },
};

export const PLANS_FLEX_DIRECTIONS_DEMO: MyRadioItem<
	NonNullable<CSSProperties["flexDirection"]>
>[] = [
	{
		name: "row",
		icon: `<svg class="scale-[.65]" width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.1L13.5 19.9C13.5 21.4 14.14 22 15.73 22L19.77 22C21.36 22 22 21.4 22 19.9L22 4.1C22 2.6 21.36 2 19.77 2L15.73 2C14.14 2 13.5 2.6 13.5 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 4.1L2 19.9C2 21.4 2.64 22 4.23 22L8.27 22C9.86 22 10.5 21.4 10.5 19.9L10.5 4.1C10.5 2.6 9.86 2 8.27 2L4.23 2C2.64 2 2 2.6 2 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.43 18.0702L34.5 12.0002L28.43 5.93018" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 12L34.33 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "column",
		icon: `<svg class="scale-[.65]"  width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9 13.5L4.1 13.5C2.6 13.5 2 14.14 2 15.73L2 19.77C2 21.36 2.6 22 4.1 22L19.9 22C21.4 22 22 21.36 22 19.77L22 15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.9 2L4.1 2C2.6 2 2 2.64 2 4.23L2 8.27C2 9.86 2.6 10.5 4.1 10.5L19.9 10.5C21.4 10.5 22 9.86 22 8.27L22 4.23C22 2.64 21.4 2 19.9 2Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.93001 28.43L12 34.5L18.07 28.43" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 17.5001L12 34.3301" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "row-reverse",
		icon: `<svg class="scale-[.65]"  width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.5 19.9V4.1C24.5 2.6 23.86 2 22.27 2H18.23C16.64 2 16 2.6 16 4.1V19.9C16 21.4 16.64 22 18.23 22H22.27C23.86 22 24.5 21.4 24.5 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36 19.9V4.1C36 2.6 35.36 2 33.77 2H29.73C28.14 2 27.5 2.6 27.5 4.1V19.9C27.5 21.4 28.14 22 29.73 22H33.77C35.36 22 36 21.4 36 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.57 5.92982L3.5 11.9998L9.57 18.0698" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.5 12L3.67004 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "column-reverse",
		icon: `<svg class="scale-[.65]" width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.1 24.5L19.9 24.5C21.4 24.5 22 23.86 22 22.27L22 18.23C22 16.64 21.4 16 19.9 16L4.1 16C2.6 16 2 16.64 2 18.23L2 22.27C2 23.86 2.6 24.5 4.1 24.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.1 36L19.9 36C21.4 36 22 35.36 22 33.77L22 29.73C22 28.14 21.4 27.5 19.9 27.5L4.1 27.5C2.6 27.5 2 28.14 2 29.73L2 33.77C2 35.36 2.6 36 4.1 36Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 20.4999L12 3.66992" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
];

export const PLANS_FLEX_ALIGNITEMS_DEMO: MyRadioItem<
	NonNullable<CSSProperties["alignItems"]>
>[] = [
	{
		name: "start",
		icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 5.1001V16.9001C19.26 18.4001 18.62 19.0001 17.03 19.0001H15.99C14.4 19.0001 13.76 18.4001 13.76 16.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26 5.1001V11.9001C5.26 13.4001 5.9 14.0001 7.49 14.0001H8.53C10.12 14.0001 10.76 13.4001 10.76 11.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "center",
		icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12H19.31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `,
	},
	{
		name: "end",
		icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.25999 18.9V12.1C5.25999 10.6 5.89999 10 7.48999 10H8.52999C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `,
	},
	{
		name: "baseline",
		icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.25 13.4V6.6C13.25 5.1 13.89 4.5 15.48 4.5H16.52C18.11 4.5 18.75 5.1 18.75 6.6V13.4C18.75 14.9 18.11 15.5 16.52 15.5H15.48C13.89 15.5 13.25 14.9 13.25 13.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `,
	},
	{
		name: "stretch",
		icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 19V8.30337C5 5.94382 5.69818 5 7.43273 5H8.56727C10.3018 5 11 5.94382 11 8.30337V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `,
	},
];

export const PLANS_FLEX_JUSTIFY_CONTENT_DEMO: MyRadioItem<
	NonNullable<CSSProperties["justifyContent"]>
>[] = [
	{
		name: "flex-start",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.26 18.9V7.1C16.26 5.6 15.62 5 14.03 5H12.99C11.4 5 10.76 5.6 10.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "flex-end",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.26001 18.9V12.1C8.26001 10.6 8.90001 10 10.49 10H11.53C13.12 10 13.76 10.6 13.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "center",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "space-between",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "space-around",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.26 18.9V7.1C20.26 5.6 19.62 5 18.03 5H16.99C15.4 5 14.76 5.6 14.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.26001 18.9V12.1C4.26001 10.6 4.90001 10 6.49001 10H7.53001C9.12001 10 9.76001 10.6 9.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "space-evenly",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
];

export const PLANS_FLEX_WRAP_DEMO: MyRadioItem<
	NonNullable<CSSProperties["flexWrap"]>
>[] = [
	{
		name: "nowrap",
		icon: `<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 14.27V10.23C22 8.64 21.36 8 19.77 8H15.73C14.14 8 13.5 8.64 13.5 10.23V14.27C13.5 15.86 14.14 16.5 15.73 16.5H19.77C21.36 16.5 22 15.86 22 14.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.77 8H27.73C26.14 8 25.5 8.64 25.5 10.23V14.27C25.5 15.86 26.14 16.5 27.73 16.5H31.77" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 14.52V9.98C10.5 8.57 9.86 8 8.27 8H4.23C2.64 8 2 8.57 2 9.98V14.51C2 15.93 2.64 16.49 4.23 16.49H8.27C9.86 16.5 10.5 15.93 10.5 14.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "wrap",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
	},
	{
		name: "wrap-reverse",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15.73V19.77C22 21.36 21.36 22 19.77 22H15.73C14.14 22 13.5 21.36 13.5 19.77V15.73C13.5 14.14 14.14 13.5 15.73 13.5H19.77C21.36 13.5 22 14.14 22 15.73Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 15.48V20.02C10.5 21.43 9.86 22 8.27 22H4.23C2.64 22 2 21.43 2 20.02L2 15.49C2 14.07 2.64 13.51 4.23 13.51H8.27C9.86 13.5 10.5 14.07 10.5 15.48Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 10C21 6.13 17.87 3 14 3L15.05 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 4.23V8.27C10.5 9.86 9.86 10.5 8.27 10.5H4.23C2.64 10.5 2 9.86 2 8.27L2 4.23C2 2.64 2.64 2 4.23 2H8.27C9.86 2 10.5 2.64 10.5 4.23Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `,
	},
];
