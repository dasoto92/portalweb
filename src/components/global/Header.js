import React, {Component} from 'react';
import logo from './images/avantica-logo-white.png';
import './css/General.css';
import {Link, withRouter} from "react-router-dom";

class Header extends Component {

  handleLogout = () => {
    localStorage.clear();
  };

  validate() {
    let logout = "";
    if (localStorage.length > 0) {
      logout = <div className={"logoutBtn"}>
        <Link to={"/login"} onClick={this.handleLogout}>Logout</Link>
      </div>
    }
    return logout;
  }

  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo"/>
          {
            this.validate()
          }
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
