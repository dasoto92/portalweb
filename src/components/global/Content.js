import React, {Component} from 'react';

//CSS
import './css/General.css';

class Content extends Component {

  render() {
    const {body} = this.props;
    return (
      <div >
        {body}
      </div>
    );
  }
}

export default Content;
