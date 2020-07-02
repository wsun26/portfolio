import React, {Component} from 'react';
import {Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className='contact-body'>
			  <Grid className='contact-grid' shadow={5}>
				  <Cell col={6}>
					  <h2>William Sun</h2>
						<hr/>
						<img
							src='https://drive.google.com/uc?id=0B06V8RvrJYtTc01mVGJ6aVNIeDVydlcwV2RhLWE3NGVIeTdn'
							alt='avatar'
							style={{height:'250px', paddingTop:'2em'}}
						/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>

						</p>
					</Cell>
				  <Cell col={6}>
					  <h2>Contact Me</h2>
						<hr/>
						<div className='contact-list'>
							<List>
							  <ListItem>
							    <ListItemContent style={{fontSize:'25px', fontFamily:'anton', color:'white', justifyContent:'center'}}>
										<i className='fas fa-phone-square' aria-hidden='true'/>
											(626)-817-1996
									</ListItemContent>
							  </ListItem>
							  <ListItem>
									<ListItemContent style={{fontSize:'25px', fontFamily:'anton', color:'white', justifyContent:'center'}}>
										<i className='fas fa-envelope' aria-hidden='true'/>
										william.sun.uiuc@gmail.com
									</ListItemContent>
							  </ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;
