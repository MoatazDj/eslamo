import React from "react";
import "./verse.css";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

var Verse = (props) => {
  return (
    <div className="verse">
      <div className="decoVerseLeft">
        {/* <img src="https://i.ibb.co/JFcmgmr/left.jpg" /> */}
      </div>
      <div className="verseContent">
        <table>
          <td>
            <img
              src={`http://api.mp3quran.net/ayah_image/${props.surah_number}${props.verse_number}.png`}
              id="verseImg"
            />
            <p>{props.translatedVerses}</p>
          </td>
          <td>
            <button onClick={props.playAudio} className="addToFavoritesButton">
              <img
                src="https://i.ibb.co/GCrv0hp/play-ico.png"
                className="starIcon"
                id={props.verse_id}
              />
              <audio className="verse-audio">
                <source
                  src={`https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/${props.surah_number}${props.verse_number}.mp3`}></source>
              </audio>
            </button>
            <button
              className="addToFavoritesButton"
              id={props.verse_id}
              onClick={props.addToFavoris}
              disabled={props.disabled}>
              <img
                src="https://i.ibb.co/74S909Z/fav-icon.png"
                className="starIcon"
                id={props.verse_id}
              />
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};

export default Verse;
