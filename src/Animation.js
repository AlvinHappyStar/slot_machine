import React, { Component } from 'react';

class Animation extends Component {
	render() {
		const time = {
			animationDuration: this.props.speed + 's'
		};
		return (
			<div className="spin-container">
				<div style={time} className="rotator">
					<span>
						<img alt="brown" src={require('./assets/brown.png')} />
					</span>
					<span>
						<img alt="white" src={require('./assets/white.png')} />
					</span>
					<span>
						<img alt="green" src={require('./assets/green.png')} />
					</span>
				</div>
			</div>
		);
	}
}

export default Animation;
