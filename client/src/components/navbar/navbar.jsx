import React from 'react'; 
import {Link, Navlink} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";
import {
  Favorite,
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";

const Appnav = () => { 
return (
 <Box component="nav">
   <AppBar position="static" style={{ background:"tan", overflow:"hidden"}}>
     <Toolbar>
       <Avatar href="#" className="logo">Logo</Avatar>
       <ul>
      <Home className="navbar-icons"></Home>
      <Favorite className="navbar-icons"></Favorite>
      <Link className="login-buttons" to="/signin"> SignIn </Link>
      <Link className="login-buttons" to="/signup"> SignUp </Link>
      
      </ul>
     </Toolbar>
   </AppBar>
 </Box>
)
};

export default Appnav;
