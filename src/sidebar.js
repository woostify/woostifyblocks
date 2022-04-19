import { registerPlugin } from '@wordpress/plugins'
import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post'
import { PanelBody } from '@wordpress/components'

import WoostifyButtonPopoverControl from './components/controls/button-popover';
import WoostifyTypographyControl from './components/controls/typography';

import { loadPromise, models } from '@wordpress/api'
import {
    useEffect,
    useState,
} from '@wordpress/element'

const sidebarName  = "woostify-block-sidebar"
const sidebarTitle = __( 'Woostify Block Settings', 'woostify-block' )
const sidebarIcon  = 'smiley'


const WoostifyBlockSidebarContent = ( props ) => {
    useEffect( () => {
        // Get settings.
        loadPromise.then( () => {
            const settings = new models.Settings()
            settings.fetch().then( response => {
                console.log( response )
            } )
        } )
    }, [] );
    return (
        <Fragment>
            <PanelBody 
            title={__('Global Color Palette', 'woostify-block')}
            initialOpen={ false }
            >

            </PanelBody>
            <PanelBody 
            title={__('Global Typography', 'woostify-block')}
            initialOpen={ true }
            >
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H1', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H2', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H3', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H4', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H5', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
                <WoostifyButtonPopoverControl
                    buttonLabel={__('H6', 'woostify-block')}
                    popoverHeading={__('Typography', 'woostify-block')}
                >
                    <WoostifyTypographyControl
                        {...props}
                        attrFontFamily={'fontFamily'}
                        attrFontWeight={'fontWeight'}
                        attrTextTransform={'fontTransform'}
                        attrFontStyle={'fontStyle'}
                        attrLineHeight={'lineHeight'}
                        attrLineHeightUnit={'lineHeightUnit'}
                        attrLetterSpacing={'letterSpacing'}
                        attrFontSize={'fontSize'}
                        attrFontSizeUnit={'fontSizeUnit'}
                        fontSizeUnits={['px', 'em', 'rem']}
                        lineHeightUnits={['px', 'em']}
                    />
                </WoostifyButtonPopoverControl>
            </PanelBody>
        </Fragment>
    )
}

const WoostifyBlockPluginSidebar = () => {
    return (
        <Fragment>
            <PluginSidebarMoreMenuItem
                target={ sidebarName }
                icon={ sidebarIcon }
            >
                { sidebarTitle }
            </PluginSidebarMoreMenuItem>
            <PluginSidebar
                name={ sidebarName }
                title={ sidebarTitle }
                icon={ sidebarIcon }
            >
                <div className="woostify-block-sidebar-content">
                    <WoostifyBlockSidebarContent/>
                </div>
            </PluginSidebar>
        </Fragment>
    )
}

registerPlugin( sidebarName, {
	render: WoostifyBlockPluginSidebar,
} )