import React, { Component } from 'react';
import { connect } from 'react-redux';

class TempList extends Component {
  renderTempConv(tempData) {
    const number = tempData.number;
    const ctf = tempData.ctfahrenheit.toFixed(2);
    const ctk = tempData.ctkelvin.toFixed(2);
    const ftk = tempData.ftkelvin.toFixed(2);
    const ftc = tempData.ftcelsius.toFixed(2);
    const ktf = tempData.ktfahrenheit.toFixed(2);
    const ktc = tempData.ktcelsius.toFixed(2);

    return (
      <tr key={number}>
        <td>
        {number}°C = {ctf}°F
        </td>
        <td>
        {number}°C = {ctk}°K
        </td>
        <td>
        {number}°F = {ftk}°K
        </td>
        <td>
        {number}°F = {ftc}°C
        </td>
        <td>
        {number}°K = {ktf}°F
        </td>
        <td>
        {number}°K = {ktc}°C
        </td>
      </tr>
    );
  }

render() {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>°C → °F</th>
          <th>°C → °K</th>
          <th>°F → °K</th>
          <th>°F → °C</th>
          <th>°K → °F</th>
          <th>°K → °C</th>
        </tr>
      </thead>
      <tbody>
        {this.props.tempconv.map(this.renderTempConv)}
      </tbody>
    </table>
  );
}
}

function mapStateToProps({ tempconv }) {
  return { tempconv };
}

export default connect(mapStateToProps)(TempList);
