import React, {Component} from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Bar} from "react-charts";

//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Reports extends Component {
  render() {
    let data =
      [
        {
          label: "Interviews",
          data: [{x: "Monday", y: 5}, {x: "Tuesday", y: 3}, {x: "Wednesday", y: 8}, {x: "Thursday", y: 1}, {
            x: "Friday",
            y: 0
          }]
        }
      ];

    return (
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} index={2}/></div>
          <div className="col-7">
            <Chart data={data}>
              <Axis primary type="ordinal"/>
              <Axis type="linear" min={0} max={0} stacked/>
              <Series type={Bar}/>
              <Cursor primary/>
              <Cursor/>
              <Tooltip/>
            </Chart>
            <Chart data={data}>
              <Axis primary type="ordinal" position="left"/>
              <Axis type="linear" stacked position="bottom"/>
              <Series type={Bar}/>
              <Cursor primary/>
              <Cursor/>
              <Tooltip/>
            </Chart>

          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
