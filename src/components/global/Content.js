// Dependencies
import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//CSS
import './css/General.css';

class Content extends Component {

  render() {
    const {body} = this.props;
    return (
      <div className="Content Body">
        {body}
      </div>
    );
  }
}

export default Content;
