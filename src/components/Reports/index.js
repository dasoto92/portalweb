import React, {Component} from 'react';
import {Chart, Axis, Series, Tooltip, Cursor, Bar} from "react-charts";


//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'
import HiddenMenu from '../global/HiddenMenu'

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
            {x: "Monday", y: 5},
            {x: "Tuesday", y: 7},
            {x: "Wednesday", y: 1},
            {x: "Thursday", y: 3},
            {x: "Friday", y: 0}
          ]
        }
      ];

    let category =
      [
        {
          label: "Languages",
          data: [
            {x: "Java", y: 1},
            {x: "AngularJS", y: 1},
            {x: "ReactNative", y: 3},
            {x: "Ruby", y: 2},
            {x: "CSS", y: 2},
            {x: "Javascript", y: 2},
            {x: "ReactJS", y: 2},
            {x: "Angular2", y: 2},
            {x: "Python", y: 1}
          ]
        }
      ];

    return (
      <div className="Content Body">
        <HiddenMenu hid={"drop"}/>
        <div className="row Body">
          <div className="col-2 menuContainer"><LeftMenu items={items} index={2}/></div>
          <div className="col-10">
            <div className={"chart chartStyle"}>
              <h2>Sort by Days</h2>
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
            <div className={"chart chartStyle"}>
              <h2>Sort by Languages</h2>
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
