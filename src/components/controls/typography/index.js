import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { Button, Popover } from '@wordpress/components';

import WoostifyBaseControl from '../base';
import WoostifyDimensionsControl from '../dimensions';

class WoostifyTypoControl extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			isVisible: false,
		};

		this.onToggleVisible = this.onToggleVisible.bind( this );
	}

	onToggleVisible() {
		this.setState( { isVisible: ! this.state.isVisible } );
	}

	render() {
		const { isVisible } = this.state;
		return (
			<Fragment>
				<Button variant="secondary" onClick={ this.onToggleVisible }>
					Toggle Popover!
					{ isVisible && (
						<Popover
							focusOnMount="container"
							position="bottom right"
						></Popover>
					) }
				</Button>
			</Fragment>
		);
	}
}

export default WoostifyTypoControl;
