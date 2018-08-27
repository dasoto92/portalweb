import React, {Component} from 'react';
import '../global/css/bootstrap.css';
import '../global/css/General.css';
import 'rc-collapse/assets/index.css';
import axios from 'axios';

import VideoModal from './VideoModal'
import TextModal from './TextModal'
import Collapse, {Panel} from 'rc-collapse';

let p = [];


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
      ]
    }
  }

  componentDidMount() {
  /*  console.log("asda");
    let XMLParser = require('react-xml-parser');
    let dir = "https://interviewbotstorage.file.core.windows.net/interviews?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D&restype=directory&comp=list";
    let baseDir = "https://interviewbotstorage.file.core.windows.net/interviews";
    let lastDir = "?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D&restype=directory&comp=list";

    let url = "https://interviewbotstorage.file.core.windows.net/interviews/pcass78@gmail.com/Test_7_4_2018_23_0_26/interview.webm?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D";


    let result = axios.get(dir).then(response => {
      result = new XMLParser().parseFromString(response.data);
      result = result.getElementsByTagName('Name');
      console.log("first inside");
      result.map((value, key) => {
        let fold = axios.get(baseDir + "/" + value.value + lastDir).then(response => {
          fold = new XMLParser().parseFromString(response.data);
          fold = fold.getElementsByTagName('Name');
          result[key].children = fold;
          p.push(
            <Panel header={`Employee Email: ${value.value}`} key={key} expandIcon={() => this.directories}>
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
                          <td>{text[2]+" - "+text[1]+" - "+text[3]}</td>
                          <td><TextModal/></td>
                          <td><VideoModal/></td>
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
        });
        console.log("second");
      });
    });
    console.log("first");
    */
  }

  componentWillMount() {
    console.log("will mouint");
  }

  shouldComponentUpdate(prevState, nextState) {
    return this.state.names !== nextState.names
  }


  componentWillUpdate(nextProps, nextState) {
    //console.log("will update", nextState);
    this.setState({
      names: nextState.names
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", this.state.names[0].children, "+++", this.state.names[1].children);
  }

  onChange = (activeKey) => {
    this.state.names.map((value, key) => {
    });
  };

  getItems() {
    const items = [];
    this.state.names.map((value, key) => {
      items.push(
        <Panel header={`This is panel header ${value.value}`} key={key} expandIcon={() => this.directories}>
          {
            p
          }

          {
            console.log("COMPONEEENT - -- - -:", this.state.names[key].children)
          }
        </Panel>
      )
    });


    return items;
  }

  directories = () => {
    console.log("did update", this.state.names[0].children[0].value, "+++", this.state.names[1].children[0].value);
    console.log(this.state.test)
  };

  render() {
    /*
    const names = this.state.names.map((name, key) => {
      return (
        <tr key={key}>
          <td>{name.value}
          </td>
          <td>Doe</td>
          <td>
            {name.value}
          </td>
          <td><TextModal/></td>
          <td><VideoModal/></td>
        </tr>)
    });
    return (
      <div className="TableScroll">
        <p>Or use a Panel.Toggle component to customize</p>
        <table className="table table-hover ">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Interview</th>
            <th>Interview Video</th>
          </tr>
          </thead>
          <tbody>
          {names}
          </tbody>
        </table>
      </div>
    );*/
    return (
      <div style={{margin: 20, width: 700}}>
        <Collapse
          accordion={true}
          onChange={this.onChange}
        >
          {p}
        </Collapse>
      </div>)
  }
}

export default Table;
