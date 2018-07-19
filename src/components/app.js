import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="/temp">Temperature Conversion</a>
          <a href="/weight">Weight Conversion</a>
          <a href="/measure">Inches/Centimeter Conversion</a>
          <a href="/feetmeters">Feet/Meters Conversion</a>
        </div>
        <h3>Select Conversion Category to get started!</h3>
      </div>
    );
  }
}