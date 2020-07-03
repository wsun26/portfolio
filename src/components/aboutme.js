import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
	render() {
		return(
			<div className='about-div'>
				<Grid className='about-grid'>
					<Cell col={5}>
					<img
						src='https://drive.google.com/uc?id=0B06V8RvrJYtTS2p1TVJFYmZ1dDFnU2tRSU1hQi1aa2M1QXZV'
						alt='falls'
					/>
					</Cell>
					<Cell col={7}>
						<h2>I Am William</h2>
						<p>
						Hi there! I graduated from the University of Illinois at Urbana Champaign with a B.S. in Electrical Engineering and a minor in Computer Science.
						I love designing and prototyping, which I have experience in from my projects.
						From PCB layout designs to making a personal website, I have gained insight into a wide range of topics.
						I am proficient in Eagle and Cadence for circuit design, know how to fabricate IC chips in a lab setting, and am also experienced in Python, JavaScript, C++, and React.
						I enjoy figuring out how things work and I love inventing things.
						</p>
					</Cell>
					<Cell col={7}>
						<h2>I'm an Adventurer </h2>
						<p>
						I love learning and discovering new things.
						Ever since I can remember, I watched shows like 'Mythbusters', 'BattleBots', and 'How It's Made', and I guess that's what inspired me to be the engineer I am today.
					  The outdoors is also another large portion of my life.
						I've camped and hiked in a multitude of national and state parks, each with their own unique quirks and traits.
						Because of this, I believe I have a wider view on life than most people.
						As a side note, my favorite trail is currently The Beehive Trail in Acadia National Park.
						</p>
					</Cell>
					<Cell col={5}>
						<img
							src='https://drive.google.com/uc?id=0B06V8RvrJYtTZ0hMelhOSjVMZUphTW15bW55bmlQd3Vab3BB'
							alt='lake'
						/>
					</Cell>
					<Cell col={5}>
					<img
						src='https://drive.google.com/uc?id=0B06V8RvrJYtTelhLVEk5WWQ0Tk9kaEdZamZfZkFaVTZyMTlV'
						alt='jump'
					/>
					</Cell>
					<Cell col={7}>
						<h2>I'm a Gamer </h2>
						<p>
						Gaming was and is probably the most influential aspect of my life.
						Online MMORPGs introduced me to people from other countries, while becoming friends with them gave me an insight into their culture.
						Even today, I still talk to the friends I made years ago.
						Card games and RTS games (real-time strategy) gave me management skills, because without that, winning is almost imposible.
						However, I believe being able to connect and converse with anyone has been the most beneficial aspect of gaming.
						</p>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default About;
