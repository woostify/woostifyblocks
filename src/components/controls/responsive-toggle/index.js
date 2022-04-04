import IconToggleControl from './../icon-toggle'


const ResponsiveToggle = props => {
    return (
        <ControlIconToggle
			value={ deviceType.toLowerCase() }
			options={ screens }
			onChange={ device => setDeviceType( device ) }
		/>
    )
}
export default memo( ResponsiveToggle )