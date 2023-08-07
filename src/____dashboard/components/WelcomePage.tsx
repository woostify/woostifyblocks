import React from "react";

const WelcomePage = () => {
	return (
		<div className="mt-10">
			<div className="flex flex-col xl:flex-row gap-5 xl:gap-10">
				<div className="flex-1 flex flex-col rounded-2xl bg-white p-10 pt-[2.2rem] border border-slate-200">
					<h2 className="text-slate-800 text-[1.8rem] leading-[2.4rem] font-medium text-left">
						Welcome to Woostify!
					</h2>
					<p className="mt-3 text-slate-700 text-sm">
						We designed Wootify to be intuitive but we do recommend learning how
						it works by checking our comprehensive documentation and watching
						the video below. Enjoy your time with Wootify!
					</p>
					<div className="mt-8 z-0">
						<iframe
							src="https://www.youtube.com/embed/JX6S3MtkjKs"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							className="w-full aspect-video rounded-2xl z-10"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className="w-full xl:w-1/3 flex-shrink-0 grid gap-4 lg:gap-5 xl:gap-8">
					{/* ------------- */}
					{/* <div className="border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<div className="flex items-center space-x-2">
								<h3 className="text-slate-800 text-xl font-semibold">
									Your license key
								</h3>
								<svg
									width="26"
									height="27"
									viewBox="0 0 26 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.38 1.6377C20.6738 1.6377 24.155 5.2772 24.155 9.76644C24.155 14.2557 20.6738 17.8952 16.38 17.8952C14.6448 17.898 12.959 17.2913 11.5931 16.1724L9.29952 19.03L10.9203 20.4519C11.0255 20.5443 11.0913 20.6766 11.1032 20.8197C11.1152 20.9627 11.0724 21.1049 10.9841 21.215L10.3175 22.0457C10.2292 22.1557 10.1027 22.2244 9.96581 22.2369C9.82897 22.2494 9.69298 22.2046 9.58771 22.1124L7.96689 20.6904L5.34308 23.9592C5.29932 24.0137 5.24571 24.0587 5.18532 24.0916C5.12493 24.1244 5.05894 24.1445 4.99112 24.1507C4.9233 24.1569 4.85498 24.1491 4.79006 24.1276C4.72514 24.1062 4.66489 24.0716 4.61275 24.0259L3.81866 23.3295C3.76652 23.2838 3.7235 23.2277 3.69208 23.1646C3.66065 23.1014 3.64143 23.0324 3.63551 22.9615C3.62959 22.8906 3.63709 22.8192 3.65757 22.7513C3.67806 22.6835 3.71114 22.6205 3.75491 22.566L10.0853 14.6784C10.1029 14.6567 10.1216 14.6366 10.1418 14.6182C9.14147 13.2171 8.60226 11.5148 8.60495 9.76644C8.60495 5.2772 12.0861 1.6377 16.38 1.6377ZM16.38 3.80536C13.2311 3.80536 10.6783 6.4743 10.6783 9.76644C10.6783 13.0586 13.2311 15.7275 16.38 15.7275C19.5288 15.7275 22.0816 13.0586 22.0816 9.76644C22.0816 6.4743 19.5288 3.80536 16.38 3.80536Z"
										fill="black"
									/>
								</svg>
							</div>
							<input
								type="text"
								name="license"
								id="license"
								className="block mt-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								placeholder="Enter your license key here"
							/>

							<button
								type="button"
								className="inline-flex mt-3 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Activate
							</button>
						</div>
					</div> */}

					{/* ----------- */}
					<div className="border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<div className="flex items-center space-x-2">
								<h3 className="text-slate-800 text-xl font-semibold">
									Documentation
								</h3>
								<svg
									width="26"
									height="26"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.9399 22.5202H15.0133H6.71994C6.17006 22.5202 5.6427 22.3024 5.25387 21.9146C4.86505 21.5269 4.64661 21.001 4.64661 20.4527V5.97968C4.64661 5.43132 4.86505 4.90543 5.25387 4.51769C5.6427 4.12994 6.17006 3.91211 6.71994 3.91211H19.1599C19.7098 3.91211 20.2372 4.12994 20.626 4.51769C21.0148 4.90543 21.2333 5.43132 21.2333 5.97968V14.2499"
										stroke="#1F2229"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.1233 18.3851C18.1233 18.6593 18.2325 18.9222 18.4269 19.1161C18.6213 19.31 18.885 19.4189 19.16 19.4189H22.27C22.5449 19.4189 22.8086 19.31 23.003 19.1161C23.1974 18.9222 23.3066 18.6593 23.3066 18.3851C23.3066 18.1109 23.1974 17.848 23.003 17.6541C22.8086 17.4602 22.5449 17.3513 22.27 17.3513H19.16C18.885 17.3513 18.6213 17.4602 18.4269 17.6541C18.2325 17.848 18.1233 18.1109 18.1233 18.3851ZM23.3066 22.5202C23.3066 22.2461 23.1974 21.9831 23.003 21.7892C22.8086 21.5954 22.5449 21.4865 22.27 21.4865H19.16C18.885 21.4865 18.6213 21.5954 18.4269 21.7892C18.2325 21.9831 18.1233 22.2461 18.1233 22.5202C18.1233 22.7944 18.2325 23.0574 18.4269 23.2512C18.6213 23.4451 18.885 23.554 19.16 23.554H22.27C22.5449 23.554 22.8086 23.4451 23.003 23.2512C23.1974 23.0574 23.3066 22.7944 23.3066 22.5202Z"
										fill="#1F2229"
									/>
									<path
										d="M9.82996 15.8007L12.658 9.69102C12.683 9.63746 12.7228 9.59212 12.7727 9.56036C12.8227 9.52859 12.8807 9.51172 12.94 9.51172C12.9992 9.51172 13.0572 9.52859 13.1072 9.56036C13.1571 9.59212 13.1969 9.63746 13.2219 9.69102L16.05 15.8007"
										stroke="#1F2229"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10.452 13.2162H15.428V15.077H10.452V13.2162Z"
										fill="#1F2229"
									/>
								</svg>
							</div>
							<p className="text-slate-700 text-sm mt-3">
								Learn everything you need to know about the Wootify plugin with
								our comprehensive documentation.
							</p>
							<a
								className="block mt-3 text-base text-blue-600"
								href="https://woostifyblocks.com/"
								target="_blank"
								rel="noreferrer"
							>
								Browse Now
							</a>
						</div>
					</div>

					{/* ----------- */}
					<div className="border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<div className="flex items-center space-x-2">
								<h3 className="text-slate-800 text-xl font-semibold">
									Community
								</h3>
								<svg
									width="26"
									height="24"
									viewBox="0 0 26 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_44_2454)">
										<path
											d="M25.5366 12C25.5366 5.3725 19.9671 0 13.0966 0C6.22611 0 0.656616 5.3725 0.656616 12C0.656616 17.9895 5.20551 22.954 11.1529 23.854V15.469H7.99414V12H11.1529V9.356C11.1529 6.349 13.0101 4.6875 15.8516 4.6875C17.2122 4.6875 18.636 4.922 18.636 4.922V7.875H17.0676C15.5224 7.875 15.0404 8.8 15.0404 9.75V12H18.4904L17.9389 15.469H15.0404V23.854C20.9877 22.954 25.5366 17.989 25.5366 12Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_44_2454">
											<rect
												width="24.88"
												height="24"
												fill="white"
												transform="translate(0.656616)"
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
							<p className="text-slate-700 text-sm mt-3">
								Learn everything you need to know about the Wootify plugin with
								our comprehensive documentation.
							</p>
							<a
								className="block mt-3 text-base text-blue-600"
								href="https://woostifyblocks.com/"
								target="_blank"
								rel="noreferrer"
							>
								Go to Facebook Group
							</a>
						</div>
					</div>

					{/* ----------- */}
					<div className="border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<div className="flex items-center space-x-2">
								<h3 className="text-slate-800 text-xl font-semibold">
									Give us feedback
								</h3>
								<svg
									width="26"
									height="24"
									viewBox="0 0 26 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M21.9301 1.5C22.205 1.5 22.4687 1.60536 22.6631 1.79289C22.8575 1.98043 22.9667 2.23478 22.9667 2.5V18.5C22.9667 18.7652 22.8575 19.0196 22.6631 19.2071C22.4687 19.3946 22.205 19.5 21.9301 19.5H16.6311L13.2931 22.398C13.1027 22.5631 12.8558 22.6545 12.5998 22.6545C12.3438 22.6545 12.0969 22.5631 11.9065 22.398L8.56847 19.5H3.27007C2.99512 19.5 2.73144 19.3946 2.53703 19.2071C2.34262 19.0196 2.2334 18.7652 2.2334 18.5V2.5C2.2334 2.23478 2.34262 1.98043 2.53703 1.79289C2.73144 1.60536 2.99512 1.5 3.27007 1.5H21.9301ZM20.8934 3.5H4.30673V17.5H9.36411L12.6001 20.309L15.8355 17.5H20.8934V3.5ZM17.7834 10C17.7834 9.86739 17.7288 9.74021 17.6316 9.64645C17.5344 9.55268 17.4025 9.5 17.2651 9.5H7.93506C7.79759 9.5 7.66575 9.55268 7.56855 9.64645C7.47134 9.74021 7.41673 9.86739 7.41673 10V11C7.41673 11.1326 7.47134 11.2598 7.56855 11.3536C7.66575 11.4473 7.79759 11.5 7.93506 11.5H17.2651C17.4025 11.5 17.5344 11.4473 17.6316 11.3536C17.7288 11.2598 17.7834 11.1326 17.7834 11V10Z"
										fill="black"
									/>
								</svg>
							</div>
							<p className="text-slate-700 text-sm mt-3">
								Learn everything you need to know about the Wootify plugin with
								our comprehensive documentation.
							</p>
							<a
								className="block mt-3 text-base text-blue-600"
								href="https://woostifyblocks.com/"
								target="_blank"
								rel="noreferrer"
							>
								Write a Review
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
