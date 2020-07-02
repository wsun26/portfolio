import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab: 0};
	}
	togglecategories() {
			if(this.state.activeTab === 0){
				return(
					<div className='projects-grid'>
						<Card className='card-style' shadow={5}>
						  <CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://github.com/wsun26/ece448/blob/master/MP4/pong.gif?raw=true) no-repeat center / contain'}}>AI Pong</CardTitle>
							<CardText>A Pong AI that learns from previous wins and losses to determine the best paddle position to continue playing. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/ece448/tree/master/MP4' target='_blank'>Github</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://github.com/wsun26/ece448/blob/master/MP3/odds_94.png?raw=true) no-repeat center / contain'}}>Number Classifier</CardTitle>
							<CardText>A number classifier utilizing the MNIST dataset of handwritten numbers to create a Naïve Bayes classification for graphical numbers. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/ece448/tree/master/MP3' target='_blank'>Github</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(http://slazebni.cs.illinois.edu/fall17/assignment2/board.png) no-repeat center / contain'}}>Breakthru</CardTitle>
							<CardText>Implemented agents that plays the zero-sum game Breakthrough using various heuristics to play defensively, offensively, or balanced. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/ece448/tree/master/MP2' target='_blank'>Github</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(http://slazebni.cs.illinois.edu/fall17/assignment1/maze.jpg) no-repeat center / contain'}}>Maze Solver</CardTitle>
							<CardText>A maze solver that finds the best path through a maze with multiple objectives utilizing BFS, DFS, and A* heuristics. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/ece448/tree/master/MP1' target='_blank'>Github</Button>
							</CardActions>
						</Card>
					</div>
				)
			} else if(this.state.activeTab === 1){
				return (
					<div className='projects-grid'>
					<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://media.giphy.com/media/1n8aGzhsqFmb4zuUkw/giphy.gif) no-repeat center / contain'}}>Bouncing Spheres</CardTitle>
							<CardText>A bouncing ball simulation where each sphere bounces in a three-dimensional box with adjustable gravity.  </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs418_spheres' target='_blank'>Github</Button>
								<Button colored href='https://wsun26.github.io/cs418_spheres/' target='_blank'>Live Demo</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://drive.google.com/uc?id=1vXdDPB3pnNMxQtq-d0GlfUEaSerxsYXi) no-repeat center / contain'}}>Reflective Teapot</CardTitle>
							<CardText>A reflective teapot utilizing two reflective models within a skybox with an orbital perspective change. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs418_teapot' target='_blank'>Github</Button>
								<Button colored href='https://wsun26.github.io/cs418_teapot/' target='_blank'>Live Demo</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://illinois-cs418.github.io/assets/img/terrain.PNG) no-repeat center / contain'}}>Flight Simulator</CardTitle>
							<CardText>A simple three-dimensional flight simulator through a randomly generated terrain with adjustable terrain detail. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs418_flight' target='_blank'>Github</Button>
								<Button colored href='https://wsun26.github.io/cs418_flight/' target='_blank'>Live Demo</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://cdn3.volusion.com/csubk.ndmav/v/vspfiles/photos/10153213-2.png?1490185185) no-repeat center / contain'}}>Badge Animation</CardTitle>
							<CardText>An animation of the Illinois victory badge using affine and non-uniform transformations. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs418_logo' target='_blank'>Github</Button>
								<Button colored href='https://wsun26.github.io/cs418_logo/' target='_blank'>Live Demo</Button>
							</CardActions>
						</Card>
					</div>
				)
			} else if(this.state.activeTab === 2){
				return (
					<div className='projects-grid'>
					<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://github.com/wsun26/ece445/blob/master/CAD/chess_board.PNG?raw=true) no-repeat center / contain'}}>Assistive Chessboard</CardTitle>
							<CardText>An assistive chessboard utilizing Hall-Effect sensors to determine what piece is selected and display all possible moves on the board and over Bluetooth. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/ece445' target='_blank'>Github</Button>
								<Button colored href='https://drive.google.com/open?id=1Aooz2oUbPOxgjUdfq7Jcn5Z1VDvs9RNr' target='_blank'>Pictures</Button>
								<Button colored href='https://youtu.be/PPFTSypu6X8' target='_blank'>Video</Button>
							</CardActions>
						</Card>
					</div>
				)
			} else if(this.state.activeTab === 3){
				return (
					<div className='projects-grid'>
					<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://github.com/wsun26/cs225/blob/master/mp6/soln_mosaic.png?raw=true) no-repeat center / contain'}}>Photo Mosaic</CardTitle>
							<CardText>Creates a photo Mosaic, which at low magnification looks like a source image, but is made up of many small tile images. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs225/tree/master/mp6' target='_blank'>Github</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://drive.google.com/uc?id=1DpKn0qIMXZlL2GTgZ7YaISZ6D0PiPEe8) no-repeat center / contain'}}>Maze Solver</CardTitle>
							<CardText>Randomly generates a maze and then finds the shortest path from the beginning to the end utilizing BFS and DFS. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs225/tree/master/mp7' target='_blank'>Github</Button>
							</CardActions>
						</Card>
						<Card className='card-style' shadow={5}>
							<CardTitle style={{textShadow:'-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey', color:'white', height:'176px', width:'100%', background: 'url(https://drive.google.com/uc?id=1UCGMOuAWVfbJlkXMyysQLnl-QM7C13gv) no-repeat center / contain'}}>Image Handling</CardTitle>
							<CardText>Unshuffle an input image utilizing linked lists, as well as providing basic photo manipulation such as contrast and saturation. </CardText>
							<CardActions border>
								<Button colored href='https://github.com/wsun26/cs225/tree/master/mp3' target='_blank'>Github</Button>
							</CardActions>
						</Card>
					</div>
				)
			}
	}

	render() {
		return(
			<div className='category-tabs'>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
					<Tab>Python</Tab>
					<Tab>JavaScript</Tab>
					<Tab>Senior Design</Tab>
					<Tab>C++</Tab>

				</Tabs>

				<Grid>
				  <Cell col={12}>
					  <div className='content'>{this.togglecategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;
