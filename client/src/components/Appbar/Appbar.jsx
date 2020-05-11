import React, { useState, Fragment } from "react";
import clsx from "clsx";
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


import Radio  from "../radio/radio";
import Calender from "../calender/calender";
import States from "../statesSelect/statesSelect";
import Favorites from "../favorites/favorites";
import PrayerTime from '../prayerTime/prayerTime';
import { Avatar } from '@material-ui/core';


const drawerWidth = 240;
const history = createBrowserHistory();

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
});


const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
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
          
        </Toolbar>
        <Avatar></Avatar>
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
        <ListItem button component={Link} to="/" onClick={onItemClick('Home')}>
          <Home> Home </Home>
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
        <ListItem button component={Link} to="/calender" onClick={onItemClick('calender')}>
          <ListItemText>Calender</ListItemText>
        </ListItem>
      </List>
    </Drawer>
    <main className={classes.content}>
        <Route exact path="/" component={States} />
        <Route path="/calender" component={Calender} />
        <Route path="/prayerTime" component={PrayerTime} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/radio" component={Radio} />
        <Route path="/prayerTime" component={PrayerTime} />
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = (title) => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
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
