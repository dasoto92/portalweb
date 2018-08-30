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

let URL = "";

class Video_Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  validateVideo() {
    if (this.props.name === "ReactNative") {
      URL = "https://utninternship.blob.core.windows.net/media/reactnative.webm?sp=r&st=2018-08-30T03:43:14Z&se=2018-10-06T11:43:14Z&spr=https&sv=2017-11-09&sig=MOH410xYIbb%2FwnpDjM7JfZ7ES9JKBdYGUASUGgPqSQc%3D&sr=b";
    } else if (this.props.name === "CSS") {
      URL = "https://utninternship.blob.core.windows.net/media/css.webm?sp=r&st=2018-08-30T03:47:40Z&se=2018-09-08T11:47:40Z&spr=https&sv=2017-11-09&sig=%2FlqjmISNeQIkmzdnhomxClnU0QLBZuR%2B15Teny9kR7Q%3D&sr=b";
    } else {
      URL = "https://utninternship.blob.core.windows.net/media/interview.webm?sp=r&st=2018-08-30T02:11:31Z&se=2018-09-08T10:11:31Z&spr=https&sv=2017-11-09&sig=jmGNYi%2Ftf2bKaWS67rDXsrCBG5IN6Mlo37%2FPKrE3qjY%3D&sr=b";
    }
  }

  render() {
    this.validateVideo();
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
          <video width="600" height="420" controls autoPlay>
            <source src={URL} type="video/mp4"/>
          </video>
        </Modal>
      </div>
    );
  }
}

export default Video_Modal;
