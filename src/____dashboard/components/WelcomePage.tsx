import React from "react";

const WelcomePage = () => {
	return (
		<div className="">
			<h1 className="sr-only">Page title</h1>
			<div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-5 xl:gap-10">
				<div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
					<section aria-labelledby="section-1-title h-full">
						<h2 className="sr-only" id="section-1-title">
							Section title
						</h2>
						<div className="flex flex-col justify-center h-full">
							<div className="rounded-md bg-white p-12 pt-[2.2rem] border border-slate-200">
								<h2 className="text-slate-800 text-[1.8rem] leading-[2.4rem] pb-3 font-medium text-left">
									Welcome to Wootify!
								</h2>
								<p className="text-slate-500 pb-7">
									We designed Wootify to be intuitive but we do recommend
									learning how it works by checking our comprehensive
									documentation and watching the video below. Enjoy your time
									with Wootify!
								</p>
								<div className="">
									<iframe
										src="https://www.youtube.com/embed/GLNzTxArR6Y?showinfo=0&amp;autoplay=0&amp;mute=0&amp;rel=0"
										allow="autoplay"
										title="YouTube video player"
										frameBorder="0"
										allowFullScreen
										className="w-full aspect-video"
									></iframe>
								</div>
								<span className="relative z-0 inline-flex pt-6 justify-start w-full">
									<a
										href="#"
										className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
									>
										Click me!
									</a>
								</span>
							</div>
						</div>
					</section>
				</div>
				<div className="h-full grid gap-4 lg:gap-5 xl:gap-10">
					<div className=" border border-slate-200 box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<h3 className="text-slate-800 text-xl font-medium pb-2">
								Knowledge Base
							</h3>
							<p className="text-slate-500 text-sm pb-2 pr-2">
								Learn everything you need to know about the Wootify plugin with
								our comprehensive documentation.
							</p>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
								href="https://wpspectra.com/docs/"
								target="_blank"
								rel="noreferrer"
							>
								Browse Now
							</a>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
								href="https://wpspectra.com/docs/"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								→{" "}
							</a>
						</div>
					</div>
					<div className=" border border-slate-200 box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<h3 className="text-slate-800 text-xl font-medium pb-2">
								Get 5-star Support
							</h3>
							<p className="text-slate-500 text-sm pb-2 pr-2">
								Need some help? Our awesome support team is here to help you
								with any question you have.
							</p>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
								href="https://wpspectra.com/support/"
								target="_blank"
								rel="noreferrer"
							>
								Get Support
							</a>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
								href="https://wpspectra.com/support/"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								→{" "}
							</a>
						</div>
					</div>
					<div className=" border border-slate-200 box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
						<div className="p-8 pr-10">
							<h3 className="text-slate-800 text-xl font-medium pb-2">
								Join the Community
							</h3>
							<p className="text-slate-500 text-sm pb-2 pr-2">
								Got a question about the plugin, want to share your awesome
								project or just say hi? Join our wonderful community!
							</p>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
								href="https://www.facebook.com/groups/wpspectra"
								target="_blank"
								rel="noreferrer"
							>
								Join Now
							</a>
							<a
								className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
								href="https://www.facebook.com/groups/wpspectra"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								→{" "}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;