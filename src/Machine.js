import React, { Component } from 'react';
import './Machine.scss';
import Slot from './Slot';
import Animation from './Animation';
import './Animation.scss';
import winning from './assets/audio/win.mp3';
import lose from './assets/audio/lose.mp3';
import spin from './assets/audio/spin.mp3';

const winAudio = new Audio(winning);
const spinAudio = new Audio(spin);
const loseAudio = new Audio(lose);

class Machine extends Component {
	static defaultProps = {
		slots: ['brown', 'white', 'green']
	};
	constructor(props) {
		super(props);
		this.state = {
			spinning: false,
			//negativeScore:true,
			isWinner: false,
			score: '',
			playable: true,
			startgame: true,
			slot1: 'green',
			slot2: 'brown',
			slot3: 'white',
			slot4: 'brown',
			slot5: 'white',
			slot6: 'green',
			slot7: 'white',
			slot8: 'green',
			slot9: 'brown'
		};
		this.spin = this.spin.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.startgame = this.startgame.bind(this);
	}

	spin() {
		this.setState({ spinning: true });
		this.setState({ playable: false });
		this.setState((ns) => ({ score: ns.score - 10 }));
		this.setState({ isWinner: false });
		spinAudio.play();

		//spin timer
		setTimeout(() => {
			this.setState({ spinning: false });			

			//generating new slots
			const newSlot1 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot2 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot3 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot4 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot5 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot6 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot7 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot8 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			const newSlot9 = this.props.slots[Math.floor(Math.random() * this.props.slots.length)];
			this.setState({
				slot1: newSlot1,
				slot2: newSlot2, //mid slot
				slot3: newSlot3,
				slot4: newSlot4,
				slot5: newSlot5, //mid slot
				slot6: newSlot6,
				slot7: newSlot7,
				slot8: newSlot8, //mid slot
				slot9: newSlot9
			});

			// if (this.state.score < 10) {
			// 	this.setState({ playable: false, startgame: false });
			// }
			//winning
			//win rate: (5/125)*100 = 4%
			if (newSlot2 === newSlot5 && newSlot5 === newSlot8) {
				this.setState({ isWinner: true });
				this.setState((ws) => ({ score: ws.score + 50 }));
				winAudio.play();
			} else {
				this.setState({ isWinner: false });
				loseAudio.play();				
			}

			setTimeout (() => {
				this.setState({ playable: true });
			}, 3000);

		}, 1000);
	}

	handleChange(e) {
		this.setState({ score: parseInt(e.target.value) });
		if (this.state.score > 0) this.setState({ playable: true });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	startgame() {
		this.setState({ startgame: true, playable: false });
	}

	render() {
		return (
			<div style={{
				display: 'flex',
				justifyContent: 'space-around',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100vw',
			}}>
				<h1>Welcome to SLOT Machine GAME</h1>

				<div style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					width: '100vw',
				}}>
					<div className="container">

						<div className="info">
							{/* <img src={coin} alt="coin" width="35" height="35" /> */}
							{this.state.spinning ? (
								<img className="win" src={require('./assets/dot3.png')} alt="prog" width="200" height="30" />
							) :  this.state.playable ? (
								<img src={require('./assets/play.png')} alt="play" width="200" height="30" />
							) :  this.state.isWinner ?(
								<img className="win" src={require('./assets/winner.png')} alt="winner" width="200" height="30" />
							) : (
								<img className="win" src={require('./assets/loser.png')} alt="loser" width="200" height="30" />
							)
							}
							
						</div>
						<div style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems:'center',
						}}>
							<div className="slots-cols">
								{this.state.spinning ? (
									<Animation speed="2.3" className="anim" />
								) : (
									<Slot
										className="slot"
										slotimg1={this.state.slot1}
										slotimg2={this.state.slot2}
										slotimg3={this.state.slot3}
									/>
								)}
								{this.state.spinning ? (
									<Animation speed="2.5" className="anim" />
								) : (
									<Slot
										className="slot"
										slotimg1={this.state.slot4}
										slotimg2={this.state.slot5}
										slotimg3={this.state.slot6}
									/>
								)}
								{this.state.spinning ? (
									<Animation speed="2.1" className="anim" />
								) : (
									<Slot
										className="slot"
										slotimg1={this.state.slot7}
										slotimg2={this.state.slot8}
										slotimg3={this.state.slot9}
									/>
								)}
							</div>
							<button onClick={this.spin} disabled={this.state.spinning || !this.state.startgame} className="switcher"/>

						</div>

					</div>

				</div>
				{/* <button onClick={this.spin} disabled={this.state.spinning || !this.state.startgame} className="spin">
					SPIN
				</button> */}
			</div>

		);
	}
}

export default Machine;
