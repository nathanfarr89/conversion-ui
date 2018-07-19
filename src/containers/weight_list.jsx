import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeightList extends Component {
  renderWeightConv(tempData) {
    const number = tempData.number;
    const ktp = tempData.pounds.toFixed(2);
    const ptk = tempData.kilograms.toFixed(2);
    //const err = tempData.error;

    return (
      <tr key={number}>
        <td>
        {number} lbs = {ptk} kgs
        </td>
        <td>
        {number} kgs = {ktp} lbs
        </td>
      </tr>
    );
  }

render() {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>LBS → KGS </th>
          <th>KGS → LBS</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weightconv.map(this.renderWeightConv)}
      </tbody>
    </table>
  );
}
}

function mapStateToProps({ weightconv }) {
  return { weightconv };
}

export default connect(mapStateToProps)(WeightList);
