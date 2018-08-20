import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

//Css
import '../global/css/modal-video.min.css';

class Video_Modal extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo'
                    onClose={() => this.setState({isOpen: false})}/>
        <a onClick={this.openModal} href="\#">Video</a>
      </div>
    )
  }
}

export default Video_Modal;
