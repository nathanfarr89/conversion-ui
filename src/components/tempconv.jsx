import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import TempList from '../containers/temp_list';

export default class TempConv extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="/temp">Temperature Conversion</a>
          <a href="/weight">Weight Conversion</a>
          <a href="/measure">Inches/Centimeter Conversion</a>
          <a href="/feetmeters">Feet/Meters Conversion</a>
        </div>
        <SearchBar />
        <TempList />
      </div>
    );
  }
}