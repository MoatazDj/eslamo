import React from "react";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn";
import States from "./components/statesSelect/statesSelect";
import Verses from "./components/verses/versesList";
import Appnav from "./components/navbar/navbar";
import { BrowserRouter, Route} from 'react-router-dom'; 
import Favorites from "./components/favorites/favorites";
import Radio from "./components/radio/radio";
import PrayerTime from "./components/prayerTime/prayerTime";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Appnav/>
         <Route exact path="/" component= {States}></Route>
         <Route path="/verses" component= {Verses}></Route>
         <Route path="/signin" component= {SignIn}></Route>
         <Route path="/signup" component= {SignUp}></Route>
      </div>
    </BrowserRouter>
    );
  }

export default App;