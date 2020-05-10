import React from "react";
import "./verse.css";

var Verse = (props) => {
  return (
    <div className="verse">
      <img
        src={`http://api.mp3quran.net/ayah_image/${props.surah_number}${props.verse_number}.png`}
        id="verseImg"
      />
      <p>{props.translatedVerses}</p>
      <button onClick={props.playAudio}>
        <span>Play Audio</span>
        <audio className="verse-audio">
          <source
            src={`https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/${props.surah_number}${props.verse_number}.mp3`}></source>
        </audio>
      </button>
      <button id={props.verse_id} onClick={props.addToFavoris}>
        <img
          src="https://image.flaticon.com/icons/svg/148/148839.svg"
          className="starIcon"
          id={props.verse_id}
        />
      </button>
    </div>
  );
};

export default Verse;
