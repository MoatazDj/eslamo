import $ from 'jquery';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './statesSelect.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import VersesList from '../verses/versesList';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
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
    $.get('http://localhost:5000/verses', {state}, function(results){
      console.log(results);
    });
  }
  render() {
    return (
      <Container component="main" maxWidth="xm">
        <CssBaseline/>
        <Typography component="h1" variant="h5">
          Select your state
        </Typography>
        <Grid 
        container
        spacing={1}
        alignItems="center"
        justify="center"
        >
        <BrowserRouter>
        {
          this.state.emotionalStates.map((emotionalState, index) => {
            return (
              <Grid item key={index} xs={6} sm={3} md={3} lg={3} id = "yo" >
                <Link to='/verses'>
                <Paper id='stateComponent' >
                  <img src={require(`../../img/emoji/${emotionalState}.svg`)} alt={emotionalState}/>
                    <Button variant='outlined'
                      color='primary'
                    >
                      {emotionalState}
                    </Button>
                </Paper>
                </Link>
              </Grid>
              );
          })
        }
        <Route
        path="/greeting/:name"
        render={props => <VersesList text="Hello, " {...props} />}  
        />
        </BrowserRouter>
        </Grid>
        </Container>
      );
  }
}

export default States;