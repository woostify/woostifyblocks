import { registerPlugin } from '@wordpress/plugins'
import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post'
import { PanelBody } from '@wordpress/components'
import { applyFilters } from '@wordpress/hooks'

const sidebarName  = "woostify-block-sidebar"
const sidebarTitle = __( 'Woostify Block Settings', 'woostify-block' )
const sidebarIcon  = 'smiley'


const WoostifyBlockSidebarContent = () => {
    return (
        <Fragment>
            <PanelBody 
            title={__('Global Color Palette', 'woostify-block')}
            initialOpen={ false }
            >
            </PanelBody>
            <PanelBody 
            title={__('Global Typography', 'woostify-block')}
            initialOpen={ false }
            >
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
                //{ applyFilters( 'woostifyblock.global-settings.content' ) }
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