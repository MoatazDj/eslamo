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
import {Link, Navlink} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Avatar,
  Box
} from "@material-ui/core";
import {
  Favorite,
  Home,
} from "@material-ui/icons";

const Appnav = () => { 
return (
 <Box component="nav">
   <AppBar position="static" style={{ backgroundColor:"#9c27b0", overflow:"visible"}}>
     <Toolbar>
       <Avatar href="#" className="logo" style={{ cursor: 'pointer'}}>ES</Avatar>
       <ul>
      <Home className="navbar-icons" style={{ cursor: 'pointer'}}></Home>
      <Favorite className="navbar-icons" style={{ cursor: 'pointer'}}></Favorite>
      </ul>
     </Toolbar>
   </AppBar>
 </Box>
)
};

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
        <Appnav></Appnav>
        <Typography component="h1" variant="h5">
          Select your state
        </Typography>
        <Grid 
        container
        spacing={1}
        alignItems="center"
        justify="center"
        >
        {
          this.state.emotionalStates.map((emotionalState, index) => {
            return (
              <Grid item key={index} xs={6} sm={3} md={3} lg={3} id = "yo" >
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
        </Container>
      );
  }
}

export default States;