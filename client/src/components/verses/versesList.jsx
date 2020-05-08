import React from "react";
import Verse from "./verse";
import "./verse.css";

class VersesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versesList: [],
    };
  }
  async componentDidMount() {
    //const url = "http://localhost:5000/verses";
    const url = "http://api.alquran.cloud/v1/search/Abraham/all/en";
    const response = await fetch(url);
    const data = await response.json();
    var arr = [];
    arr.push(data);
    this.setState({ versesList: data.data.matches });
    /*** */
    console.log("dataaa" + data);
  }

  render() {
    var verses = this.state.versesList.map((verse, i) => (
      <div>
        <Verse verse={verse.text} key={i}></Verse>
        <img
          src="http://api.mp3quran.net/ayah_image/002255.png"
          id="verseImg"
        />
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
