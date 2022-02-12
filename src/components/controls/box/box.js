import {
	Fragment,
    Component
} from "@wordpress/element";

class WoostifyBoxControl extends Component {
    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const { className, attributes, setAttributes } = this.props;

        return (
            <>
            </>
        )
    }
}

export default WoostifyBoxControl;