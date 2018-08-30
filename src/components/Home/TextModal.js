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
      name: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  validateVideo() {
    if (this.props.name === "ReactNative") {
      URL = "https://utninternship.blob.core.windows.net/media/reactnative.pdf?sp=r&st=2018-08-30T03:53:04Z&se=2018-09-08T11:53:04Z&spr=https&sv=2017-11-09&sig=RoSbhtFhigJbMm4VuTTOgin0yJ%2FD0IIzgS5SxdwN%2Fp0%3D&sr=b";
    } else if (this.props.name === "CSS") {
      URL = "https://utninternship.blob.core.windows.net/media/css.pdf?sp=r&st=2018-08-30T03:57:07Z&se=2018-09-08T11:57:07Z&spr=https&sv=2017-11-09&sig=B58nT4chpA9xWAzf%2B8W8MkSr2vl6NEBieHLya5fhXsw%3D&sr=b";
    } else {
      URL = "https://utninternship.blob.core.windows.net/media/interview.pdf?sp=r&st=2018-08-30T03:55:02Z&se=2018-09-08T11:55:02Z&spr=https&sv=2017-11-09&sig=KlmTZh2Qd30%2BbeQHPLXcIQRuudNlBAbrTtDeKq84vGo%3D&sr=b";
    }
  }

  render() {
    this.validateVideo();
    return (
      <div>
        <a onClick={this.openModal} href="\#">Document (.pdf)</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <embed src={URL} width="800px" height="800px"/>
        </Modal>
      </div>
    );
  }
}

export default Video_Modal;
