import { __ } from '@wordpress/i18n';
import {
	Fragment,
    Component
} from "@wordpress/element";

import {
    Button,
} from '@wordpress/components';

import './style.css';

class WoostifyBaseControl extends Component {
    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { 
            label, 
            units, 
            responsive, 
            onClick,
            selectedDevice,
            children 
        } = this.props;

        console.log( this.props );

        return (
            <div className="components-base-control components-woostify-base-control">
                <div className="wb-control-label">
                    <div className="wb-base-control__label">{label}</div>
                    { responsive && Array.isArray( responsive ) && (
                        <div className="wb-base-control__responsive">
                        {
                            responsive.map((v, i) => {
                                let device = 'mobile' === v ? 'smartphone' : v;
                                return (
                                    <Button
                                        isPressed={ this.capitalizeFirstLetter(v) === selectedDevice ? true : false }
                                        onClick={ () => {
                                            onClick( this.capitalizeFirstLetter( v ) );
                                        } }
                                    >
                                        <span className={`dashicons dashicons-${device}`}></span>
                                    </Button>
                                )
                            })
                        }
                        </div>
                    ) }
                    { units && Array.isArray( units ) &&
                    (
                        <div className="wb-base-control__units">Units</div>
                    )
                    }
                </div>
                <div className="wb-base-content">{children}</div>
            </div>
        )
    }
}

export default WoostifyBaseControl;