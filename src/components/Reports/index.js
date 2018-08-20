// Dependencies
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Reports extends Component {

  render(){
    return(
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} /></div>
          <div className="col-9">Reports</div>
        </div>
      </div>
    );
  }
}

export default Reports;
