import React from "react";

class PrayerTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTime: [],
    };
  }
  async componentDidMount() {
    var url =
      "http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=5&year=2020";
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ prayerTime: data.data });
    console.log(data.data);
  }
  render() {
    var prayers = this.state.prayerTime.map((prayer, i) => (
      <div>{prayer.date.hijri.date}</div>
    ));
    return <div>{prayers}</div>;
  }
}
export default PrayerTime;
