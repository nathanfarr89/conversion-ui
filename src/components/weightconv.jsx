import React, { Component } from 'react';
import WeightSearch from '../containers/weight_search';
import WeightList from '../containers/weight_list';

export default class WeightConv extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="/temp">Temperature Conversion</a>
          <a className="active" href="/weight">Weight Conversion</a>
          <a href="/measure">Inches/Centimeter Conversion</a>
          <a href="/feetmeters">Feet/Meters Conversion</a>
        </div>
        <WeightSearch />
        <WeightList />
      </div>
    );
  }
}