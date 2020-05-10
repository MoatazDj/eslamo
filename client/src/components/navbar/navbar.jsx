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
} from "@material-ui/core"
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons"
const Appnav = () => { 
return (
 <Box component="nav">
   <AppBar position="static" style={{ background:"tan"}}>
     <Toolbar>
       <a href="#" className="logo">Logo</a>
       <ul>
      <Link to="/">Home</Link>
      <Link to="/verses"> Verses </Link>
      <Link to="/signin"> SignIn </Link>
      <Link to="/signup"> SignUp </Link>
      </ul>
     </Toolbar>
   </AppBar>
 </Box>
)
};

export default Appnav;
