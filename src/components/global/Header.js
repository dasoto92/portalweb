import React, {Component} from 'react';
import logo from './images/avantica-logo-white.png';
import './css/General.css';
import {withRouter} from "react-router-dom";

class Header extends Component {

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  validate() {
    let logout = "";
    if (localStorage.length > 0) {
      logout = <div className={"logoutBtn"}>
        <a href="" onClick={this.handleLogout}>Logout</a>
      </div>
    }
    return logout;
  }

  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo"/>
          {this.validate()}
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
