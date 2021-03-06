import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid style={{fontFamily:'raleway'}}>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'8px'}}>{this.props.schoolName}</h4>
          <p style={{textIndent:'1%'}}>{this.props.schoolDescription}</p>
          <p style={{textIndent:'1%'}}>{this.props.schoolMinor}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
