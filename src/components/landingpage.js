import React, {Component} from 'react';
import {Grid, Cell, Layout} from 'react-mdl';

class Landing extends Component {
	render(){
		return (
			<div style = {{width: '100%', margin: 'auto'}}>
				<Grid className = 'landing-grid' style = {{height: '100%', overflow: 'auto'}}>
						<Cell col = {12}>
							<img
								src='https://drive.google.com/uc?id=1lRQuYYeeR-k3X0rkFnwXetKJyPgrDAw-'
								alt='avatar'
								className='avatar-img'
							/>
							<div className='banner-text'>
								<Grid>
								  <Cell col={6}>
									  <h1 style={{borderRight:'3px solid white'}}>Electrical Engineer</h1>
									</Cell>
									<Cell col={6}>
									  <h1>Computer Science</h1>
									</Cell>
								</Grid>
								<hr/>
								<Grid>
									<Cell col={4}/>
									<Cell col={1}><p>Python</p></Cell>
									<Cell col={1}><p>JS</p></Cell>
									<Cell col={1}><p>CSS</p></Cell>
									<Cell col={1}><p>React</p></Cell>
									<Cell col={4}/>
								</Grid>
								<div className='social-links'>
									<a href='https://www.linkedin.com/in/wsun26/' rel='noopener noreferrer' target='_blank'>
										<i className='fab fa-linkedin-in' aria-hidden='true'/>
									</a>
									<a href='https://github.com/wsun26' rel='noopener noreferrer' target='_blank'>
										<i className='fab fa-github' aria-hidden='true'/>
									</a>
								</div>
							</div>
						</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;
