import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeasureList extends Component {
  renderMeasureConv(tempData) {
    const number = tempData.number;
    const cti = tempData.inches.toFixed(2);
    const itc = tempData.centimeters.toFixed(2);
    //const err = tempData.error;

    return (
      <tr key={number}>
        <td>
        {number} in = {itc} cm
        </td>
        <td>
        {number} cm = {cti} in
        </td>
      </tr>
    );
  }

render() {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>IN → CM </th>
          <th>CM → IN</th>
        </tr>
      </thead>
      <tbody>
        {this.props.measureconv.map(this.renderMeasureConv)}
      </tbody>
    </table>
  );
}
}

function mapStateToProps({ measureconv }) {
  return { measureconv };
}

export default connect(mapStateToProps)(MeasureList);
