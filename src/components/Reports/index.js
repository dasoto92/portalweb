import React, {Component} from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Bar} from "react-charts";

//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Reports extends Component {

  componentDidMount() {
    if (localStorage.length < 1) {
      this.props.history.push("/login");
    }
  }

  render() {
    let data =
      [
        {
          label: "Interviews",
          data: [
            {x: "Monday", y: 4},
            {x: "Tuesday", y: 2},
            {x: "Wednesday", y: 6},
            {x: "Thursday", y: 1},
            {x: "Friday", y: 0}
          ]
        }
      ];

    let category =
      [
        {
          label: "Languages",
          data: [
            {x: "Java", y: 5},
            {x: "AngularJS", y: 1},
            {x: "ReactNative", y: 8},
            {x: "Ruby", y: 2},
            {x: "CSS", y: 1},
            {x: "Javascript", y: 4},
            {x: "ReactJS", y: 4},
            {x: "Angular2", y: 3},
            {x: "Python", y: 2}
          ]
        }
      ];

    return (
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} index={2}/></div>
          <div className="col-7">
            <h2>Sort by Days</h2>
            <div className={"chart"}>
              <Chart data={data}>
                <Axis primary type="ordinal"/>
                <Axis type="linear" min={0} max={0} stacked/>
                <Series type={Bar}/>
                <Cursor primary/>
                <Cursor/>
                <Tooltip/>
              </Chart>
            </div>
            <br/><br/>
            <h2>Sort by Languages</h2>
            <div className={"chart"}>
              <Chart data={category}>
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
      </div>
    );
  }
}

export default Reports;
