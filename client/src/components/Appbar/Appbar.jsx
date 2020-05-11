import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';

import Radio  from "../radio/radio";
import SignUp from "../signUp/signUp";
import States from "../statesSelect/statesSelect";
import Favorites from "../favorites/favorites";
import PrayerTime from '../prayerTime/prayerTime';
import { Avatar } from '@material-ui/core';


const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5)
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar className={classes.purple}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Home"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
          <Avatar alt="Eslamo" src="https://lh3.googleusercontent.com/proxy/aiSRqTTlOFmkvjjElLtJ0IfAfQnMB7qGaEkRHvMEpwM4qItI0yNgSmCMmAPJpWhSh6S_WVs2Lwp698SMCASGK8q7hwvsjBsLUiGq0Kt5qj-Ro8MjZsUB" className={classes.large}  ></Avatar>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
    <Drawer variant={variant} open={open} onClose={onClose}
                classes={{
                  paper: classes.drawerPaper
                }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
      <List>
        <Avatar style= {{marginLeft: 5, marginTop:2}}></Avatar>
        <ListItem button component={Link} to="/" onClick={onItemClick('Home')} style={{marginTop: 65}}>
          <Home>Home </Home>
          <Typography> Home </Typography>
        </ListItem>
        <ListItem button component={Link} to="/prayerTime" onClick={onItemClick('Prayer Time')}>
          <ListItemText>Prayer Time</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/favorites" onClick={onItemClick('favorites')}>
          <ListItemText>favorites</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/radio" onClick={onItemClick('radio')}>
          <ListItemText>radio</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/signup" onClick={onItemClick('sign up')}>
          <ListItemText>Sign out</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    <main className={classes.content}>
        <Route exact path="/" component={States} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/prayerTime" component={PrayerTime} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/radio" component={Radio} />
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);