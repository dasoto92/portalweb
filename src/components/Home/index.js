import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
//CSS
import '../global/css/General.css';

// Component
import Table from './Table'
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    }
  }

  componentDidMount() {
    if (localStorage.length < 1) {
      this.props.history.push("/login");
    }
  }

  static handleLoadTable(){
    let table = "";
    if (localStorage.length > 0) {
      table =<Table/>;
    }
    return table;
  }

  render() {
    return (
      <div>
        <div className="Content Body">
          <div className="row Body">
            <div className="col-3"><LeftMenu items={items} index={0}/></div>
            <div className="col-8">
              {Home.handleLoadTable()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
