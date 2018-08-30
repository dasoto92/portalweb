import React, {Component} from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';


//Css
import './css/bootstrap.css';
import '../global/css/General.css';

class HiddenMenu extends Component {


  render() {
    return (
      <div className={this.props.hid}>
        <DropdownMenu>
          <MenuItem text='Interviews' location='/' />
          <MenuItem text='Questions & Answers' location='/questions-and-answers' />
          <MenuItem text='Reports' location='/reports' />
        </DropdownMenu>
      </div>
    );
  }
}

export default HiddenMenu;
