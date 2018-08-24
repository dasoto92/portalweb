import React, {Component} from 'react';

//CSS
import '../global/css/General.css';

// Component
import Table from './Table'
import LeftMenu from '../global/LeftMenu'

// Data
import items from '../../data/menu';

class Home extends Component {

  render() {
    return (
      <div className="Content Body">
        <div className="row Body">
          <div className="col-3"><LeftMenu items={items} index={0} /></div>
          <div className="col-9">
            <input type="text" name="search" placeholder="Search.."></input>
            <center><Table/></center>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
