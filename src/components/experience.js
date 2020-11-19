import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid style={{fontFamily:'raleway'}}>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'8px'}}>{this.props.jobName}</h4>
          <p style={{textIndent:'1%'}}>{this.props.jobDescription1}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail11}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail12}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail13}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail14}</p>
          <p style={{textIndent:'1%'}}>{this.props.jobDescription2}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail21}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail22}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail23}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail24}</p>
          <p style={{textIndent:'1%'}}>{this.props.jobDescription3}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail31}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail32}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail33}</p>
          <p style={{textIndent:'4%'}}>{this.props.jobDetail34}</p>
          <p style={{textIndent:'1%'}}>{this.props.jobDescription4}</p>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
