import React, { Component } from 'react';
import './Slot.scss';

class Slot extends Component {
	render() {
		return (
			<div className="slot-imgs">
				<img alt="slot" src={require(`./assets/${this.props.slotimg1}.png`)} />
				<img alt="slot" src={require(`./assets/${this.props.slotimg2}.png`)} />
				<img alt="slot" src={require(`./assets/${this.props.slotimg3}.png`)} />
			</div>
		);
	}
}

export default Slot;
