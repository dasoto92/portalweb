// Dependencies

import React, { Component } from 'react';
import { reactjs } from 'react-chartjs';
import { Chart, Axis, Series, Tooltip, Cursor, Bar } from "react-charts";
//import 'react-chartjs' from './node_modules/'
//import PropTypes from 'prop-types';
//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Reports extends Component {


  render() {
    var BarChart = require("react-chartjs").Bar;

    var data =
      [
        {
          label: "Series 1",
          data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        },
        {
          label: "Series 2",
          data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        },
        {
          label: "Series 3",
          data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        }
      ];

    return (
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} /></div>
          <div className="col-9">
            <Chart data={data}>
              <Axis primary type="ordinal" />
              <Axis type="linear" min={0} max={0} stacked />
              <Series type={Bar} />
              <Cursor primary />
              <Cursor />
              <Tooltip />
            </Chart>
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
