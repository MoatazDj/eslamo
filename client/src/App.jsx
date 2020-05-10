import React from "react";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn";
import States from "./components/statesSelect/statesSelect";
import Verses from "./components/verses/versesList";
import Favorites from "./components/favorites/favorites";
import Radio from "./components/radio/radio";
import PrayerTime from "./components/prayerTime/prayerTime";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Radio />
    </div>
  );
}

export default App;
