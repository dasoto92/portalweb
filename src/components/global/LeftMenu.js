// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Css
import './css/bootstrap.css';
import './css/LeftMenu.css';


class Right_Menu extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const {items} = this.props;
    return (
      <div className="container">
        <div className="vertical-menu">
          {items && items.map((item, key) =>
            <a key={key} href={item.url}>{item.title}</a>
          )}
          {/*<a href="index.js" className="active">Interviews</a>*/}
        </div>
      </div>
    );
  }
}

export default Right_Menu;
