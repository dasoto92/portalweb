import React, {Component} from 'react';
import '../global/css/bootstrap.css';
import '../global/css/General.css';
import 'rc-collapse/assets/index.css';
import axios from 'axios';

import VideoModal from './VideoModal'
import TextModal from './TextModal'
import Collapse, {Panel} from 'rc-collapse';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: []
    }
  }

  getDataFromCloud() {
    let XMLParser = require('react-xml-parser');
    let result;
    let dir = "https://interviewbotstorage.file.core.windows.net/interviews?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D&restype=directory&comp=list";
    let baseDir = "https://interviewbotstorage.file.core.windows.net/interviews";
    let lastDir = "?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D&restype=directory&comp=list";

    axios.get(dir).then(response => {
      result = new XMLParser().parseFromString(response.data);
      result = result.getElementsByTagName('Name');
      result.map((value, key) => {
        axios.get(baseDir + "/" + value.value + lastDir).then(response => {
          let folderDate = new XMLParser().parseFromString(response.data);
          folderDate = folderDate.getElementsByTagName('Name');
          result[key].folder = [];
          folderDate.map((value) => {
            result[key].folder.push(value);
          });
        });
        this.setState({
          names: result
        });
      });
    })
  }

  componentDidMount() {
    //console.log("will mount");
    this.getDataFromCloud();
  }

  componentWillMount() {
    console.log("will mouint");
  }

  shouldComponentUpdate(prevState, nextState) {
    //console.log("should ",prevState,nextState);
    //console.log(this.state.names, "     ", nextState.names);
    return this.state.names !== nextState.names
  }


  componentWillUpdate(nextProps, nextState) {
    console.log("will update", nextState.names[0].folder);
    this.setState({
      names: nextState.names
    });

  }

  componentDidUpdate(currentProps, currentState) {
    console.log("did update", this.state.names);
    this.state.names.map((value, key) => {
      console.log("PRUEBAAAAAAAAA", value);

      console.log(value.folder);
      //value.folder.map((value, key) => {
      //console.log("aqaaaasssss", value);
      //console.log(value);
      //})
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  };

  getItems() {
    const items = [];
    for (let i = 0, len = 3; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel header={`This is panel header ${key}`} key={key} disabled={i === 0}>
          <p>{text}</p>
        </Panel>
      );
    }
    return items;
  }


  directories = () => {
    this.state.names.map((value, key) => {
      console.log("PRUEBAAAAAAAAA", value);

      console.log(value.folder);
      value.folder.map((value, key) => {
        console.log("aqaaaasssss", value.value);
        //console.log(value);
      })
    })
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
        <button onClick={this.directories}>a</button>
        <br />
        <Panel id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle  onClick={() => this.setState({ open: !this.state.open })}>
              Title that functions as a collapse toggle
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <PanelGroup accordion id="accordion-example">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle onClick={() => this.setState({ open: !this.state.open })}>Collapsible Group Item #1</Panel.Title>
              {console.log(this.state.open)}
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
        </PanelGroup>;
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
      <div style={{margin: 20, width: 400}}>
        <Collapse
          accordion={true}
          onChange={this.onChange}
        >
          {this.getItems()}
        </Collapse>
      </div>)
  }
}

export default Table;
