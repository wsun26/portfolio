import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid className='skills-grid'>
        <Cell col={4}>
          <h4>{this.props.title1}</h4>
          <hr/>
          <Grid>
            <Cell col={6}>
              <p>Python</p>
              <p>Java</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>System Verilog</p>
            </Cell>
            <Cell col={6}>
              <p>C</p>
              <p>C++</p>
              <p>CSS</p>
              <p>ROS</p>
              <p>SKILL</p>
            </Cell>
          </Grid>
        </Cell>

        <Cell col={4}>
          <h4>{this.props.title2}</h4>
          <hr/>
          <Grid>
            <Cell col={6}>
              <p>SEM</p>
              <p>TEM</p>
              <p>Furnace Chamber</p>
              <p>Thermal Evaporator</p>
            </Cell>
            <Cell col={6}>
              <p>Spectrometer</p>
              <p>Ion Beam Etching</p>
              <p>Plasma Etching</p>
              <p>Probe Microscope</p>
            </Cell>
          </Grid>
        </Cell>

        <Cell col={4}>
          <h4>{this.props.title3}</h4>
          <hr/>
          <Grid>
            <Cell col={6}>
              <p>Cadence</p>
              <p>PSPICE</p>
              <p>CrossLight</p>
              <p>BandEng</p>
            </Cell>
            <Cell col={6}>
              <p>Android Studio</p>
              <p>Adobe Photoshop</p>
              <p>MATLAB</p>
              <p>Word, Excel, PowerPoint</p>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
