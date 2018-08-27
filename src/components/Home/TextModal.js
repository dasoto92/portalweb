import React, {Component} from 'react';
import Modal from 'react-modal';
import {Player} from 'video-react';

//Css
import '../global/css/modal-video.min.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Video_Modal extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let url = "https://interviewbotstorage.file.core.windows.net/interviews/pcass78@gmail.com/Test_7_4_2018_23_0_26/interview.webm?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D";
    let pdfURL="https://interviewbotstorage.file.core.windows.net/interviews/pcass78@gmail.com/Test_7_4_2018_23_20_18/interview.pdf?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D";

    return (
      <div>
        <a onClick={this.openModal} href="\#">Doc</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>X</button>
        </Modal>
      </div>
    );
  }
}

export default Video_Modal;
