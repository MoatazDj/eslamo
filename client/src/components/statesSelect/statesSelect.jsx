import $ from 'jquery';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './statesSelect.css';


class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionalStates: ['angry', 'scared', 'stuck', 'sick']
    }
  }

  getVerses(event) {
    event.preventDefault();
    const state = event.target.innerHTML
    $.get('http://localhost:5000/verses', {state}, function(){});
  }
  render() {
    return (
        <Grid 
          container
          className='states'
          spacing={1}
          
          alignItems="center"
          justify="center"
          
        >
          {
            this.state.emotionalStates.map((emotionalState, index) => {
              return (
                <Grid item key={index} xs={6} sm={6} md={3} lg={3} >
                    <Paper id='stateComponent' onClick={this.getVerses}>
                      <Grid item>
                        <img src={require(`../../img/emoji/${emotionalState}.svg`)} alt={emotionalState}/>
                      </Grid>
                      <Grid item>
                        {emotionalState}
                      </Grid>
                    </Paper>
                </Grid>
              );
            })
          }
        </Grid>
      
    );
  }
}

export default States;


        // <div className='state' key={index} onClick={this.getVerses}>
        //           {emotionalState}
        //         </div>