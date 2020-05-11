import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import "./radio.css";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioStations: [],
      filtredRadios: [],
      titles: [
        "Main Radio",
        "Quran Tafseer",
        "Amazing short Recitations",
        "Abdulrahman Alsudaes",
        "Khaled Al-Qahtani",
        "Abdullah Al-Johany",
      ],
    };
  }

  async componentDidMount() {
    var url = "http://api.mp3quran.net/radios/radio_english.json";
    var response = await fetch(url);
    var data = await response.json();

    this.setState({ radioStations: data["radios"] });
    console.log(this.state.radioStations[0]);
    var filteredRadio = this.state.radioStations.filter(
      (radio, i) =>
        [
          "-Main Radio-",
          "--Quran Tafseer--",
          "---Amazing short Recitations---",
          "Abdulrahman Alsudaes",
          "Khaled Al-Qahtani",
          "Abdullah Al-Johany",
        ].includes(radio["name"]) //radio["name"] == "--Quran Tafseer--"
    );
    this.setState({ filtredRadios: filteredRadio });
    console.log(this.state.filtredRadios);
  }

  playAudio() {
    const audio = document.getElementsByClassName("radio-audio");
    audio.play();
  }
  render() {
    var radios = this.state.filtredRadios.map((radio, i) => (
      <div id="GridRadio">
        <Typography component="h2" variant="h5" id="h2">
          {this.state.titles[i]}
        </Typography>
        <ReactAudioPlayer
          id="audioPlayer"
          src={radio["radio_url"]}
          controls></ReactAudioPlayer>
      </div>
    ));

    return <div id="container">{radios}</div>;
  }
}

export default Radio;
