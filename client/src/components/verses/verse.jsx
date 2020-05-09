import React from "react";
import "./verse.css";

var Verse = (props) => {
  return (
    <div className="verse">
      <p> {props.verse}</p>
    </div>
  );
};

export default Verse;
