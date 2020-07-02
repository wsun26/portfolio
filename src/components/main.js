import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/about" component={AboutMe} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/resume" component={Resume} />
	</Switch>
)

export default Main;
