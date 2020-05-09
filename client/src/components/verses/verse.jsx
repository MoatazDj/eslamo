import React from "react";
import "./verse.css";

var Verse = (props) => {
  return (
    <div className="verse">
      {props.sourah}
      {props.verse_number}
    </div>
  );
};

export default Verse;
