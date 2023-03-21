import { Menu, Transition } from "@headlessui/react";
import {
	ArrowDownIcon,
	ChevronDownIcon,
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect, FC, Fragment, useCallback } from "react";
import { dispatch } from "@wordpress/data";
import useGetDeviceType from "../../../hooks/useGetDeviceType";

export type ResponsiveDevices = "Desktop" | "Tablet" | "Mobile";

interface Props {
	className?: string;
	devices?: ResponsiveDevices[];
}

const DEVICE_TYPES: Record<string, ResponsiveDevices> = {
	Desktop: "Desktop",
	Tablet: "Tablet",
	Mobile: "Mobile",
};

const MyResponsiveToggle: FC<Props> = ({
	className = "",
	devices = Object.values(DEVICE_TYPES),
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } =
		dispatch("core/edit-post");

	const handleSetDeviceType = useCallback((dv: ResponsiveDevices) => {
		setPreviewDeviceType(DEVICE_TYPES[dv]);
	}, []);

	const renderDeviceIcon = (dv: ResponsiveDevices, className = "h-4 w-4") => {
		switch (dv) {
			case "Desktop":
				return <ComputerDesktopIcon className={className} aria-hidden="true" />;
			case "Tablet":
				return <DeviceTabletIcon className={className} aria-hidden="true" />;
			case "Mobile":
				return (
					<DevicePhoneMobileIcon className={className} aria-hidden="true" />
				);

			default:
				return null;
		}
	};

	return (
		<Menu
			as="div"
			className={`wcbMyResponsiveToggle relative inline-block text-left ${className}`}
		>
			<Menu.Button
				className="wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400"
				title={deviceType}
			>
				{renderDeviceIcon(deviceType)}
				<ChevronDownIcon className={"w-2.5 h-2.5 ml-1"} aria-hidden="true" />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none">
					<div className="p-1 space-y-0.5">
						{devices.map((item, index) => {
							return (
								<Menu.Item key={index + item}>
									{({ active }) => {
										const isActive = active || item === deviceType;
										return (
											<button
												className={`${
													isActive ? "bg-sky-50 text-sky-600" : "text-slate-800"
												} group flex w-full items-center justify-center rounded-md py-1.5`}
												onClick={(e) => {
													handleSetDeviceType(item);
												}}
												title={item}
											>
												{renderDeviceIcon(item)}
											</button>
										);
									}}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MyResponsiveToggle;
