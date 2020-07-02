import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Awards extends Component {
  render() {
    return(
      <Grid style={{fontFamily:'raleway'}}>
        <Cell col={4}>
          <p>{this.props.awardYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'8px'}}>{this.props.awardName}</h4>
          <p style={{textIndent:'1%'}}>{this.props.awardDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Awards;
