import React from "react";
import ReactAudioPlayer from "react-audio-player";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioStations: [],
      filtredRadios: [],
    };
  }

  async componentDidMount() {
    var url = "http://api.mp3quran.net/radios/radio_english.json";
    var response = await fetch(url);
    var data = await response.json();

    this.setState({ radioStations: data["radios"] });
    console.log(this.state.radioStations[0]);
    var filteredRadio = this.state.radioStations.filter(
      (radio) => radio["name"] == "--Quran Tafseer--"
    );
    this.setState({ filtredRadios: filteredRadio });
    console.log(this.state.filtredRadios);
  }

  playAudio() {
    const audio = document.getElementsByClassName("radio-audio");
    audio.play();
  }
  render() {
    var radios = this.state.radioStations.map((radio, i) => (
      <div>
        <div>
          <p>{radio["name"]}</p>
        </div>
        <div>
          <ReactAudioPlayer
            src={radio["radio_url"]}
            controls></ReactAudioPlayer>
        </div>
      </div>
    ));
    return <div>{radios}</div>;
  }
}

export default Radio;
