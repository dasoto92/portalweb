import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

//Css
import './css/bootstrap.css';
import './css/LeftMenu.css';

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index
    }
  }

  componentDidMount() {
    document.getElementById(this.state.index).className = "active";
  }

  render() {
    const {items} = this.props;
    return (
      <div className="container">
        <div className="vertical-menu">
          {items && items.map((item, key) =>
            <Link key={key} id={key} to={item.url}>{item.title}</Link>
          )}
        </div>
      </div>
    );
  }
}

LeftMenu.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number
};

export default LeftMenu;
