import React from "react";

class PrayerTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTime: [],
      currentDate: "",
    };
  }
  async componentDidMount() {
    var url =
      "http://api.aladhan.com/v1/calendarByCity?city=Tunis&country=Tunisia&method=2&month=05&year=2025";
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ prayerTime: data.data });

    var urlDate = "http://api.aladhan.com/v1/currentDate?zone=Africa/Tunis";
    var responseDAte = await fetch(urlDate);
    var dataDate = await responseDAte.json();
    this.setState({ currentDate: dataDate.data });
    console.log(dataDate);
  }
  render() {
    var prayers = this.state.prayerTime.map((prayer, i) => (
      <div>
        <div>{prayer.meta.timezone}&nbsp; </div>
        <div>
          {prayer.date.readable}&nbsp;
          {prayer.date.hijri.day}&nbsp;
          {prayer.date.hijri.month.en}&nbsp;
          {prayer.date.hijri.year}&nbsp;
        </div>
        <div>
          Fajr:&nbsp;
          {prayer.timings.Fajr}&nbsp;&nbsp;Sunrise:&nbsp;
          {prayer.timings.Sunrise}&nbsp;&nbsp;Dhuhr:&nbsp;
          {prayer.timings.Dhuhr}&nbsp;&nbsp;Asr:&nbsp;
          {prayer.timings.Asr}&nbsp;&nbsp;Maghrib:&nbsp;
          {prayer.timings.Maghrib}&nbsp;&nbsp;Isha:&nbsp;
          {prayer.timings.Isha}
        </div>
        <div>*****************</div>
      </div>
    ));
    return (
      <div>
        <p>
          CURRENT DATE:
          {this.state.currentDate}
        </p>
        <div></div>
        {prayers}
      </div>
    );
  }
}
export default PrayerTime;
