import React, {Component} from 'react';
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
    let url = "https://interviewbotstorage.file.core.windows.net/interviews/pcass78@gmail.com/Test_7_4_2018_23_0_26/interview.webm?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D";
    return (
      <div>
        <ModalVideo isOpen={this.state.isOpen} videoId='L61p2uyiMSo'
                    onClose={() => this.setState({isOpen: false})}/>
        <a onClick={this.openModal} href="\#">Video</a>
      </div>
    )
  }
}

export default Video_Modal;
