import React, {Component} from 'react';
import Modal from 'react-modal';

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
    let url = "https://interviewbotstorage.file.core.windows.net/interviews/pcass78%40gmail.com/Test_7_4_2018_23_0_26/interview.webm?sv=2017-11-09&ss=bqtf&srt=sco&sp=rwdlacup&se=2018-08-28T04:30:44Z&sig=gHKIxJzhkwMI59HKxnoQe4oBducvEipeoz78%2BXV89BY%3D";
    return (
      <div>
        <a onClick={this.openModal} href="\#">Video</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Video"
          ariaHideApp={false}
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Video</h2>
          <button onClick={this.closeModal}>X</button>
          <video width="600" height="420" controls>
            <source src={url} type="video/mp4" />
          </video>
        </Modal>
      </div>
    );
  }
}

export default Video_Modal;
