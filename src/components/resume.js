import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Awards from './awards'
class Resume extends Component {
	render(){
		return (
			<div>
			  <Grid>
				  <Cell col={4} className='resume-left-col'>
						<div style={{textAlign:'center'}}>
						  <img
								className='resume-img'
								src='https://drive.google.com/uc?id=1tThcovcxl3-raDvFXCItTkrOkSuIEKLT'
								alt='avatar'
								style={{height: '200px'}}
							/>
						</div>
						<h2>William Sun</h2>
						<h4 style={{color:'grey', paddingTop:'2em'}}>Electrical Engineer<br/>Computer Science</h4>
						<hr/>
						<h5>Phone</h5>
						<p>(626)-817-1996</p>
						<h5>Email</h5>
						<p>william.sun.uiuc@gmail.com</p>
						<h5>Web</h5>
						<p>williamsunportfolio.com</p>
						<p>github.com/wsun26</p>
						<hr/>
					</Cell>
				  <Cell className='resume-right-col' col={8}>
						<h2>Skills</h2>
						<Skills
						title1='Languages'
						title2='Lab Instruments'
						title3='Tools'
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>
						<h2>Experience</h2>
						<Experience
							startYear='April 2018'
							endYear='May 2018'
							jobName='CSMC Technologies Corporation'
							jobDescription1='Extensive use of Cadence to review and design ICs'
							jobDetail11='- Designed PCells for integrated circuits such as power MOSFETs and BJTs'
							jobDescription2='Worked with a team on reviewing IC documents sent in by companies'
							jobDetail21='- Verified layouts and ensured the submitted document will pass fabrication'
						/>
						<Experience
							startYear='October 2016'
							endYear='April 2018'
							jobName='SungWoo Nam Research Group'
							jobDescription1='Collaborate with the SungWoo Nam Research Group'
							jobDetail11='- Researched on nanomaterials on real life applications'
							jobDetail12='- Created self-assembling gold nanoparticles on crumpled graphene and MoS2'
							jobDetail13='- Real life application of uniform and parallel rows of gold nanoparticles'
							jobDetail14='- Cleanroom work on spin coating MoS2 sheets'
							jobDescription2='Independent research on implementing graphene in semiconductors'
							jobDetail21='- Responsible for testing new methods of creating nanoribbons from graphene sheets'
							jobDetail22='- Performs hydrogen plasma etching of graphene'
							jobDetail23='- Verification of nanoribbons using SEM and TEM'
							jobDetail24='- Involved in previously unprecedented sized semiconductors using reproducible nanoribbons'
							jobDescription3='Receives funding from the Illinois Student Undergraduate Research Program'
						/>
						<Experience
							startYear='August 2017'
							endYear='December 2017'
							jobName='Engineering Student IT'
							jobDescription1='Administering advice to faculty and staff regarding technical issues'
							jobDescription2='Maintain computers, printers, and other equipment in laboratory workspaces'
						/>
						<Experience
							startYear='June 2013'
							endYear='August 2013'
							jobName='Unversity of Southern California Intern'
							jobDescription1='Tracked human movement with motion sensing technology'
							jobDescription2='Research and data analysis to assess the overall strain of exercise'
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>
						<h2>Awards</h2>
						<Awards
						awardYear='December 2017'
						awardName='The Michelle and Alex Bratton Senior Design Instructor’s Award'
						awardDescription='1st place $2500 award for capstone Senior Design Course'
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>
						<h2>Education</h2>
						<Education
							startYear={2014}
							endYear={2018}
							schoolName='University of Illinois at Urbana-Champaign'
							schoolDescription='Bachelor of Science, Electrical Engineer (B.S.)'
							schoolMinor='Minor, Computer Science'
						/>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
