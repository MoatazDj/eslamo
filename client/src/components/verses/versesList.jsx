import React from "react";
import Verse from "./verse";

class VersesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versesList: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:5000/verses";
    //const url = "http://api.mp3quran.net/api/ayat";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ versesList: data });
    console.log(data);
  }

  render() {
    var verses = this.state.versesList.map((verse, i) => (
      <Verse verse={verse.verse_text} key={i}></Verse>
    ));
    return <div>{verses}</div>;
  }
}

export default VersesList;
