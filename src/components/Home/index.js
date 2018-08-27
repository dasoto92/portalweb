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


  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <div className={"row"}>
          <button onClick={this.handleLogout} className={"logoutBtn"}>Logout</button>
        </div>
        <div className="Content Body">
          <div className="row Body">
            <div className="col-3"><LeftMenu items={items} index={0}/></div>
            <div className="col-9">
              <input type="text" name="search" placeholder="Search.."></input>
              <center><Table/></center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
