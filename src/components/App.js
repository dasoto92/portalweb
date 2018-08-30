import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withAlert} from "react-alert";

//components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header header={children}/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default withAlert(App);
