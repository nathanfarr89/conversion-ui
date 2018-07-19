import React, { Component } from 'react';
import FeetMetersSearch from '../containers/feetmeters_search';
import FmList from '../containers/fm_list';

export default class FeetMetersConv extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="/temp">Temperature Conversion</a>
          <a href="/weight">Weight Conversion</a>
          <a href="/measure">Inches/Centimeter Conversion</a>
          <a className="active" href="/feetmeters">Feet/Meters Conversion</a>
        </div>
        <FeetMetersSearch />
        <FmList />
      </div>
    );
  }
}