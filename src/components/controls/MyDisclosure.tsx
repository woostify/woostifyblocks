import { Disclosure } from "@headlessui/react";
import {
	AdjustmentsHorizontalIcon,
	AdjustmentsVerticalIcon,
	MinusIcon,
} from "@heroicons/react/24/outline";
import { __ } from "@wordpress/i18n";
import React, { FC, ReactNode } from "react";
import MyLabelControl from "./MyLabelControl/MyLabelControl";

interface Props {
	className?: string;
	label?: string;
	children: ReactNode;
	defaultOpen?: boolean;
	as?: React.ElementType<any>;
	hasResponsive?: boolean;
	isDisableButton?: boolean;
}

const MyDisclosure: FC<Props> = ({
	className = "space-y-3.5",
	label = "Customize",
	children,
	defaultOpen,
	as,
	hasResponsive = false,
	isDisableButton = false,
}) => {
	return (
		<Disclosure defaultOpen={defaultOpen} as={as}>
			{({ open }) => (
				<div
					className={
						open ? "ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4" : ""
					}
				>
					<Disclosure.Button
						className={`flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${
							open ? "rounded-b-none" : ""
						}`}
						disabled={isDisableButton}
					>
						<MyLabelControl
							hasResponsive={hasResponsive}
							className="MyDisclosure__labelControl"
						>
							{__(label, "wcb")}
						</MyLabelControl>
						{open ? (
							<MinusIcon className="w-5 h-5 text-purple-900" />
						) : (
							<svg
								className="w-4 h-4 text-purple-900"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M3 22H21"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						)}
					</Disclosure.Button>
					<Disclosure.Panel className="px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20">
						<div className={className}>{children}</div>
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};

export default MyDisclosure;
