import React, { Component } from "react";

class WeatherForecast extends Component {
  forecastData = [
    {
      day: "Monday",
      high: 24,
      low: 18,
      conditions: "Sunny",
    },

    {
      day: "Tuesday",
      high: 27,
      low: 20,
      conditions: "Clear",
    },

    {
      day: "Wednesday",
      high: 25,
      low: 19,
      conditions: "Partly Cloudy",
    },

    {
      day: "Thursday",
      high: 23,
      low: 17,
      conditions: "Rainy",
    },

    {
      day: "Friday",
      high: 26,
      low: 20,
      conditions: "Sunny",
    },
  ];

  render() {
    const tableStyle = {
      width: "100%",
      borderCollapse: "collapse",
      margin: "20px 0",
    };

    const thStyle = {
      border: "1px solid #ddd",
      padding: "10px",
      backgroundColor: "#f4f4f4",
      textAlign: "left",
    };

    const tdStyle = {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
    };

    const headerStyle = {
      marginBottom: "10px",
      fontSize: "24px",
      color: "#200",
    };

    return (
      <div>
        <h1 style={headerStyle}>Class Component: 5-Day Weather Forecast</h1>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Day</th>
              <th style={thStyle}>High</th>
              <th style={thStyle}>Low</th>
              <th style={thStyle}>Conditions</th>
            </tr>
          </thead>

          <tbody>
            {this.forecastData.map((dayData, index) => (
              <tr key={index}>
                <td style={tdStyle}>{dayData.day}</td>
                <td style={tdStyle}>{dayData.high}</td>
                <td style={tdStyle}>{dayData.low}</td>
                <td style={tdStyle}>{dayData.conditions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherForecast;
