import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react';
import MyToggle from "./MyToggle";
import MyButton from "./MyButton";
import { Wcb_theme_layout_global_settings } from "../../types";
import debounce from "lodash/debounce";
import { X } from 'lucide-react';

interface Props {
	allSettings: typeof window.wcbGlobalVariables;
	onChange: (data: typeof window.wcbGlobalVariables) => void;
	themeLayoutGlobal?: Wcb_theme_layout_global_settings;
}

const SettingsPageAssetGeneration: FC<Props> = ({
	allSettings,
	onChange,
	themeLayoutGlobal,
}) => {
    const debounce_fun = debounce(function (data: Props["allSettings"]) {
        // console.log("Function debounced after 300ms!", { data });
        onChange(data);
    }, 300);

    const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const openModal = () => {
		setIsModalOpen( true );
	};

    const regenerateAssets = () => {
		setRegenerateAssetsState( true );

        setTimeout( () => {
            // fetch( window.wcbGlobalVariables.restApiUrl + 'woostify/v1/regenerate-assets', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-WP-Nonce': window.wcbGlobalVariables.restApiNonce,
            //     },
            // } )
            // .then( ( response ) => response.json() )
            // .then( ( data ) => {
            //     setRegenerateAssetsState( false );
            //     setIsModalOpen( false );
            //     alert( 'Assets regenerated successfully!' );
            // } )
            // .catch( ( error ) => {
            //     console.error( 'Error:', error );
            //     setRegenerateAssetsState( false );
            //     setIsModalOpen( false );
            //     alert( 'An error occurred while regenerating assets.' );
            // } );
            setRegenerateAssetsState( false );
        }, 1000 ); // Simulate a delay for demonstration purposes
	};

    const ConfirmationPopup = ( props: { openPopup: any; setopenPopup: any; popupContent: any; popupAccept: any; popupCancel: any; } ) => {
        const { openPopup, setopenPopup, popupContent, popupAccept, popupCancel } = props;

        const [ open, setOpen ] = useState( openPopup );

        const cancelButtonRef = useRef( null );

        useEffect( () => {
            setOpen( openPopup );
        }, [ openPopup ] );

        const onCancelClick = () => {
            setopenPopup( ! openPopup );
        };

        return (
            <Transition.Root show={ open } as={ Fragment }>
                <Dialog
                    as="div"
                    className="fixed backdrop-blur-sm inset-0 overflow-y-auto"
                    style={ { zIndex: 99999 } }
                    initialFocus={ cancelButtonRef }
                    onClose={ setOpen }
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={ Fragment }
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        { /* This element is to trick the browser into centering the modal contents. */ }
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={ Fragment }
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block p-3 rounded-lg bg-white max-w-[30rem] font-[Figtree] relative z-999999">
                                <div className="mb-2 p-2">
                                    <div className="flex w-full justify-between items-center mb-2">
                                        <div className="text-base font-semibold text-text-primary">
                                            { popupContent.title }
                                        </div>

                                        <X size={ 16 } onClick={ onCancelClick } className="cursor-pointer" />
                                    </div>
                                    <div className="text-sm text-text-secondary font-normal w-full text-left">
                                        { popupContent.description }
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="flex justify-end items-center w-full gap-3">
                                        <button
                                            className="focus:ring-0 outline outline-0 inline-flex items-center rounded-md border border-gray bg-white-600 px-3 py-2.5 text-sm font-medium  text-gray-700 shadow-sm hover:bg-slate-50 focus:outline-none"
                                            type="button"
                                            onClick={ onCancelClick }
                                            ref={ cancelButtonRef }
                                        >
                                            { popupCancel.label }
                                        </button>
                                        <button
                                            className="focus:ring-0 outline outline-1 inline-flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:border-blue-700 hover:bg-blue-700 focus:outline-none"
                                            type="button"
                                            onClick={ regenerateAssets }
                                        >
                                            { true === regenerateAssetsState && (
												<svg
													className="animate-spin mr-1 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
											) }
                                            { popupAccept.label }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        );
    };

	return (
        <div className="divide-y">
			<div className="pb-8">
                <MyToggle
                    label="File Generation"
                    desc='Woostify loads the CSS and JS inline on the page by default. If you want to generate CSS and JS files for Woostify blocks, enable this option.'
                    id="MyToggle_FileGeneration"
                    checked={allSettings.enableFileGeneration === "true"}
                    onChange={(checked) => {
                        debounce_fun({
                            ...allSettings,
                            enableFileGeneration: checked ? "true" : "false",
                        });
                    }}
                />
            </div>
            <div className="py-8">
                <MyButton
                    label="Generate Assets"
                    desc="Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues."
                    id="MyButton_GenerateAssets"
                    onClick={ openModal }
                />
                <ConfirmationPopup
                    { ...{
                        openPopup: isModalOpen,
                        setopenPopup: setIsModalOpen,
                        popupContent: {
                            title: 'Regenerate Assets',
                            description: 'Please note that after regeneration, it is recommended to purge all your cache to ensure that old assets are not served, preventing potential frontend breaking issues.',
                        },
                        popupAccept: {
                            label: 'Regenerate',
                        },
                        popupCancel: {
                            label: 'Cancel',
                        },
                    } }
                />
            </div>
		</div>
	);
};

export default SettingsPageAssetGeneration;
