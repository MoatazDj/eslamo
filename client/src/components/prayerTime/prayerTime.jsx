import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import DatePicker from "react-datepicker";
import format from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";

import "./prayerTime.css";

class PrayerTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTime: [],
      todayPrayer: [],
      day: ("0" + new Date().getDate()).slice(-2),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      currentDate: "10-05-2020",
      startDate: new Date(),
      setStartDate: new Date(),
    };
  }
  async componentDidMount() {
    var url = `http://api.aladhan.com/v1/calendarByCity?city=Tunis&country=Tunisia&method=2&month=${this.state.month}&year=2020`;
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ prayerTime: data.data });

    var today = this.state.prayerTime.filter(
      (prayer) => prayer.date.gregorian.date == this.state.currentDate
    );
    this.setState({
      todayPrayer: today,
    });
  }

  handleChange(date) {
    var selectedDate =
      ("0" + date.getDate()).slice(-2) +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getFullYear();

    this.setState({
      startDate: date,
      currentDate: selectedDate,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });
    console.log(date.getMonth());
    this.componentDidMount();
    console.log("Date SELECTED TO UPDATE THE CALANDER", selectedDate);
  }

  render() {
    var prayers = this.state.todayPrayer.map((prayer) => (
      <div>
        <div id="divDate">
          <div> {prayer.date.readable}&nbsp;</div>
          <div>
            {prayer.date.hijri.day}&nbsp;
            {prayer.date.hijri.month.en}&nbsp;
            {prayer.date.hijri.year}&nbsp;
          </div>
        </div>
        <div id="prayerDivContainer">
          <div className="prayerDiv">
            Fajr:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Fajr}</p>
          </div>
          <div className="prayerDiv">
            Sunrise:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Sunrise}</p>
          </div>
          <div className="prayerDiv">
            Dhuhr:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Dhuhr}</p>
          </div>
          <div className="prayerDiv">
            Asr:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Asr}</p>
          </div>
          <div className="prayerDiv">
            Maghrib:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Maghrib}</p>
          </div>
          <div className="prayerDiv">
            {" "}
            Isha:&nbsp;&nbsp;&nbsp;<br></br>
            <p>{prayer.timings.Isha}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div id="DatePicker">
          <DatePicker
            selected={this.state.startDate}
            onChange={(date, e) => this.handleChange(date)}
            dateFormat="dd-MM-yyyy"
            id="dtpick"
          />
        </div>
        <p></p>
        <div></div>
        {prayers}
      </div>
    );
  }
}
export default PrayerTime;
