import React from "react";
import Verse from "./verse";
import "./verse.css";
import Sound from "react-sound";
import ReactAudioPlayer from "react-audio-player";

class VersesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versesList: [],
      selectedVerse: 0,
    };
  }
  async componentDidMount() {
    const url = "http://localhost:5000/verses";
    //const url = "http://api.alquran.cloud/v1/search/Abraham/all/en";
    const response = await fetch(url);
    const data = await response.json();
    var arr = [];
    arr.push(data);
    //this.setState({ versesList: data.data.matches });
    this.setState({ versesList: data });
  }

  playAudio(i) {
    const audio = document.getElementsByClassName("verse-audio");
    //return audio;
    audio[i].play();
  }
  getTranslation(sourah, verse) {
    var url =
      "http://api.mp3quran.net/api/aya?surah=" +
      sourah +
      "&aya=" +
      verse +
      "&language=en";
    console.log(url);
  }

  render() {
    var verses = this.state.versesList.map((verse, i) => (
      <div>
        <Verse verse={verse.verse_text} key={i}></Verse>
        <img
          src={`http://api.mp3quran.net/ayah_image/${verse.number_sourah}${verse.verse_number}.png`}
          id="verseImg"
        />
        <button
          sourah={verse.number_sourah}
          verse={verse.verse_number}
          onClick={() => {
            this.playAudio(i);
          }}>
          <span>Play Audio</span>
          <audio className="verse-audio">
            <source
              src={`https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/${verse.number_sourah}${verse.verse_number}.mp3`}></source>
          </audio>
        </button>
        <img
          src="https://image.flaticon.com/icons/svg/148/148839.svg"
          id="starIcon"
        />
      </div>
    ));
    return <div>{verses}</div>;
  }
}

export default VersesList;
