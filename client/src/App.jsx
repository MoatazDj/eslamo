import React from "react";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn/signIn";
import States from "./components/statesSelect/statesSelect";
import Verses from "./components/verses/versesList";
import Appbar from "./components/Appbar/Appbar";
import { BrowserRouter, Route } from "react-router-dom";
import Favorites from "./components/favorites/favorites";
import Radio from "./components/radio/radio";
import PrayerTime from "./components/prayerTime/prayerTime";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Verses></Verses>
      {/* <CssBaseline />
      <PrayerTime />
      {/* <CssBaseline />
      <Appbar /> */} 
    </React.Fragment>
  );
}

export default App;
