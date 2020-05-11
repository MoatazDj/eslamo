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
      <div id="mainDivPrayerTime">
        <div id="mainDateDiv">
          <div id="divDate">
            <div> {prayer.date.readable}&nbsp;</div>
            <div>
              {prayer.date.hijri.day}&nbsp;
              {prayer.date.hijri.month.en}&nbsp;
              {prayer.date.hijri.year}&nbsp;
            </div>
          </div>
          <div id="datePickerDiv">
            {/* <h3>Select Date :</h3> */}
            <DatePicker
              selected={this.state.startDate}
              onChange={(date, e) => this.handleChange(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select a weekday"
              id="dtpick"
            />
          </div>
        </div>
        <div id="prayerDivContainer">
          <div className="prayerDiv">
            <h4> Fajr:</h4>

            <p>{prayer.timings.Fajr}</p>
          </div>
          <div className="prayerDiv">
            <h4>Sunrise:</h4>
            <p>{prayer.timings.Sunrise}</p>
          </div>
          <div className="prayerDiv">
            <h4>Dhuhr:</h4>

            <p>{prayer.timings.Dhuhr}</p>
          </div>
          <div className="prayerDiv">
            <h4>Asr:</h4>

            <p>{prayer.timings.Asr}</p>
          </div>
          <div className="prayerDiv">
            <h4>Maghrib:</h4>

            <p>{prayer.timings.Maghrib}</p>
          </div>
          <div className="prayerDiv">
            <h4>Isha:</h4>
            <p>{prayer.timings.Isha}</p>
          </div>
        </div>
      </div>
    ));
    return <div id="main">{prayers}</div>;
  }
}
export default PrayerTime;
