import React, {Component} from 'react';
import '../global/css/bootstrap.css';
import '../global/css/General.css';
import 'rc-collapse/assets/index.css';
import axios from 'axios';

import VideoModal from './VideoModal'
import TextModal from './TextModal'
import Collapse, {Panel} from 'rc-collapse';

let dataArray = [];
let htmlArray = [];

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          "value": "",
          "children": [
            {"value": "1"},
            {"value": "2"}
          ]
        }
      ],
      update: false
    }
  }

  componentDidMount() {
    dataArray = [];
  }

  componentWillMount() {
    this.mounted = true;
    this.getItems();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  shouldComponentUpdate() {
    //return this.state.names !== nextState.names
    return !this.state.update
  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({
      names: nextState.names,
      update: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("did update", this.state.names[0].children, "+++", this.state.names[1].children);
  }

  getItems() {
    let XMLParser = require('react-xml-parser');

    //TEST AZURE
    const PATH = "https://utninternship.file.core.windows.net";
    const FILE_ROOT = "/prueba/interviews";
    const KEY = "?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-09-26T07:13:12Z&st=2018-08-26T23:13:12Z&spr=https&sig=mJbFHNEqloNv6pFpsVITK6il%2FtYUb4E7B%2BJAjMkI3iU%3D";
    const PROPS = "&restype=directory&comp=list";

    let result = axios.get(PATH + FILE_ROOT + KEY + PROPS).then(response => {
      result = new XMLParser().parseFromString(response.data);
      result = result.getElementsByTagName('Name');
      result.map((value, key) => {
        let fold = axios.get(PATH + FILE_ROOT + "/" + value.value + KEY + PROPS).then(response => {
          fold = new XMLParser().parseFromString(response.data);
          fold = fold.getElementsByTagName('Name');
          result[key].children = fold;
          let name = value.value.split('@');
          name = name[0].split('.');
          dataArray.push(
            <Panel
              header={`Name: ${name[0].toLocaleUpperCase() + " " + name[1].toLocaleUpperCase()} / Email: ${value.value}`}
              key={key}>
              <div>
                <table className="table table-hover ">
                  <thead>
                  <tr>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Interview</th>
                    <th>Interview Video</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    fold.map((value, key) => {
                      let text = value.value.split('_');
                      return (
                        <tr key={key}>
                          <td>{text[0]}</td>
                          <td>{text[2] + " - " + text[1] + " - " + text[3]}</td>
                          <td><TextModal name={text[0]}/></td>
                          <td><VideoModal name={text[0]}/></td>
                        </tr>)
                    })
                  }
                  </tbody>
                </table>
              </div>
            </Panel>
          );
          this.setState({
            names: result
          });
          htmlArray = [];
          for (let i = 0; i < dataArray.length; i++) {
            for (let y = 0; y < dataArray.length; y++) {
              if (dataArray[y].key === i.toString()) {
                htmlArray.push(dataArray[y]);
              }
            }
          }
          this.forceUpdate();
        });
        return true
      });
    });
  }

  render() {
    return (
      <div className={"panelH"}>
        <Collapse
          accordion={true}
        >
          {htmlArray}
        </Collapse>
      </div>)
  }
}

export default Table;
