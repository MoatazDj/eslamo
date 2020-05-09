import React from "react";
import Verse from "./verse";
import "./verse.css";
import $ from "jquery";
import Sound from "react-sound";
import ReactAudioPlayer from "react-audio-player";

class VersesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versesList: [],
      selectedVerse: 0,
      translatedVerses: [
        "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie.,But they wonder that there has come to them a warner from among themselves, and the disbelievers say, 'This is an amazing thing.  ",
      ],
      verseID: "100",
    };
  }
  async componentDidMount() {
    const url = "http://localhost:5000/verses";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ versesList: data });
    for (var i = 0; i < this.state.versesList.length; i++) {
      const url2 =
        "http://api.mp3quran.net/api/aya?surah=" +
        this.state.versesList[i].surah_number +
        "&aya=" +
        this.state.versesList[i].verse_number +
        "&language=en";
      const response2 = await fetch(url2);
      const data2 = await response2.json();

      this.state.translatedVerses.push(data2.ayah_text_lang);
      console.log("TransVerses*** " + this.state.translatedVerses);
    }
  }
  playAudio(i) {
    const audio = document.getElementsByClassName("verse-audio");
    //return audio;
    audio[i].play();
  }
  addToFavoris(e) {
    e.preventDefault();
    var idVerse = e.target.id;
    var data = { idVerse: idVerse };

    $.post("http://localhost:5000/verses", data, function () {
      console.log("Post success" + idVerse);
    });
    console.log("versesId " + idVerse);
    //this.ref.btn.setAttribute("disabled", "disabled");
  }

  render() {
    const response = this.state;
    var verses = this.state.versesList.map((verse, i) => (
      <div>
        <Verse verse={verse.verse_text} key={i}></Verse>
        <img
          src={`http://api.mp3quran.net/ayah_image/${verse.surah_number}${verse.verse_number}.png`}
          id="verseImg"
        />
        <p>{response.translatedVerses[0]}</p>
        <button
          onClick={() => {
            this.playAudio(i);
          }}>
          <span>Play Audio</span>
          <audio className="verse-audio">
            <source
              src={`https://verse.mp3quran.net/arabic/ibrahim_alakhdar/32/${verse.surah_number}${verse.verse_number}.mp3`}></source>
          </audio>
        </button>
        <button id={verse.verse_id} onClick={this.addToFavoris} ref="btn">
          <img
            src="https://image.flaticon.com/icons/svg/148/148839.svg"
            className="starIcon"
            id={verse.verse_id}
          />
        </button>
      </div>
    ));

    return <div>{verses}</div>;
  }
}

export default VersesList;
