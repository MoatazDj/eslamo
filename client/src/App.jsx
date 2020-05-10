import React from "react";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn";
import States from "./components/statesSelect/statesSelect";
import Verses from "./components/verses/versesList";
import Favorites from "./components/favorites/favorites";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Verses />
    </div>
  );
}

export default App;
