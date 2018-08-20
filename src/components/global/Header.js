import React, {Component} from 'react';
import logo from './images/avantica-logo-white.png';
import './css/General.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
      </div>
    );
  }
}

export default Header;
