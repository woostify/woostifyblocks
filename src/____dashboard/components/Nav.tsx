import React from "react";
import dashboardlogo from "../../../public/images/dashboardlogo.svg";

const Nav = () => {
	return (
		<nav className="bg-white shadow">
			<div className="container">
				<div className="relative flex justify-between h-16">
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<a
							href="http://localhost/wordpress/wp-admin/options-general.php?page=spectra"
							className="flex-shrink-0 flex items-center"
						>
							<img
								className="lg:block h-[2.6rem] w-auto"
								src={dashboardlogo}
								alt="Workflow"
							/>
						</a>
						<div className="sm:ml-8 sm:flex sm:space-x-8">
							<a
								index="0"
								className="border-transparent text-slate-500 active:text-spectra focus-visible:border-slate-300 focus-visible:text-slate-800 hover:border-slate-300 hover:text-slate-800 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium"
								href="options-general.php?page=spectra"
							>
								Welcome
							</a>
							<a
								index="1"
								className="border-spectra text-spectra active:text-spectra focus:text-spectra focus-visible:text-spectra-hover hover:text-spectra-hover inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium"
								href="options-general.php?page=spectra&amp;path=blocks"
							>
								Blocks / Extensions
							</a>
							<a
								index="2"
								className="border-transparent text-slate-500 active:text-spectra focus-visible:border-slate-300 focus-visible:text-slate-800 hover:border-slate-300 hover:text-slate-800 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium"
								href="options-general.php?page=spectra&amp;path=settings"
							>
								Settings
							</a>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							title="What's New?"
							className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border border-slate-200"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z"
									stroke="#475569"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
