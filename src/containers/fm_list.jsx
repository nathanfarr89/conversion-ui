import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeetMetersList extends Component {
  renderFeetMetersConv(tempData) {
    const number = tempData.number;
    const ftm = tempData.meters.toFixed(2);
    const mtf = tempData.feet.toFixed(2);
    //const err = tempData.error;

    return (
      <tr key={number}>
        <td>
        {number} m = {mtf} ft
        </td>
        <td>
        {number} ft = {ftm} m
        </td>
      </tr>
    );
  }

render() {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>M → FT </th>
          <th>FT → M</th>
        </tr>
      </thead>
      <tbody>
        {this.props.feetmetersconv.map(this.renderFeetMetersConv)}
      </tbody>
    </table>
  );
}
}

function mapStateToProps({ feetmetersconv }) {
  return { feetmetersconv };
}

export default connect(mapStateToProps)(FeetMetersList);
