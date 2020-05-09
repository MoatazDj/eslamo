import $ from 'jquery';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './statesSelect.css';

// const useStyles = makeStyles(() => {
//   root: {
//     border: '1px solid',
//     textAlign: 'center',
//     width: '100vw',
//     height: '100vh'
//   },
//   states: {

//   }
// });

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
      <div className='states'>
        <Grid 
        container
        
        spacing={1}

        alignItems="center"
        justify="center"

        >
        {
          this.state.emotionalStates.map((emotionalState, index) => {
            return (
              <Grid item key={index} xs={6} sm={3} md={3} lg={3} >
                <Paper id='stateComponent' onClick={this.getVerses}>
                  <img src={require(`../../img/emoji/${emotionalState}.svg`)} alt={emotionalState}/>
                    <Button variant='outlined'
                      color='primary'
                    >
                      {emotionalState}
                    </Button>
                </Paper>
              </Grid>
              );
          })
        }
        </Grid>
      </div>
      );
  }
}

export default States;