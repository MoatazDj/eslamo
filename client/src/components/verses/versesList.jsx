import React from "react";
import Verse from "./verse";
import "./verse.css";
import $ from "jquery";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


class VersesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versesList: [],
      selectedVerse: 0,
      // translatedVerses: [
      //   "And when they are told,‘Believe like the people who have believed, ’they say, " +
      //     " ‘Shall we believe like the fools who have believed ?’" +
      //     " Look! They are themselves the fools, but they do not know.",
      // ]
      //verseID: "100",
    };
  }
  async componentDidMount(){
    const { text, match: { params } } = this.props;
    const { emotionalState } = params;
    console.log('fetching verses for state', emotionalState)
    const url = `http://localhost:5000/verses/${emotionalState}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ versesList: data });
    console.log('Received data from DB : \n', this.state.versesList)
    for (var i = 0; i < this.state.versesList.length; i++) {
      const url2 =
        "http://api.mp3quran.net/api/aya?surah=" +
        this.state.versesList[i].surah_number +
        "&aya=" +
        this.state.versesList[i].verse_number +
        "&language=en";
      const response2 = await fetch(url2);
      const data2 = await response2.json();

      // this.state.translatedVerses.push(data2.ayah_text_lang);
      console.log("TransVerses*** ", this.state.versesList);
    }
  }

  
  playAudio(i) {
    const audio = document.getElementsByClassName("verse-audio");
    audio[i].play();
  }
  addToFavoris(e) {
    e.preventDefault();
    var idVerse = e.target.id;
    var data = { verse_id: idVerse };

    $.post("http://localhost:5000/verses", data, function () {
      console.log("Post success" + idVerse);
    });
    console.log("versesId " + idVerse);
    //this.ref.btn.setAttribute("disabled", "disabled");
  }

  render() {
    return (
    this.state.versesList.map((verse, i) => (
      <Container>
       <CssBaseline />
        <Verse
          verse={verse.verse_text}
          key={i}
          surah_number={verse.surah_number}
          verse_number={verse.verse_number}
          // translatedVerses={this.state.translatedVerses[0]}
          playAudio={() => {
            this.playAudio(i);
          }}
          verse_id={verse.verse_id}
          addToFavoris={this.addToFavoris}></Verse>
      </Container>
    ))
    )

  }
}

export default VersesList;
