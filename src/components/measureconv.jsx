import React, { Component } from 'react';
import MeasureSearch from '../containers/measure_search';
import MeasureList from '../containers/measure_list';

export default class MeasureConv extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="/temp">Temperature Conversion</a>
          <a href="/weight">Weight Conversion</a>
          <a className="active" href="/measure">Inches/Centimeter Conversion</a>
          <a href="/feetmeters">Feet/Meters Conversion</a>
        </div>
        <MeasureSearch />
        <MeasureList />
      </div>
    );
  }
}