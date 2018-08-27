import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';
import {Player} from 'video-react';

//Css
import '../global/css/modal-video.min.css';

class Video_Modal extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }


  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    let url = "https://interviewbotstorage.file.core.windows.net/interviews/pcass78@gmail.com/Test_7_4_2018_23_0_26/interview.webm?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-12-06T10:06:04Z&st=2018-08-25T02:06:04Z&spr=https&sig=5AGJ1NaX6JM97J167OUqXqWme3k1cLyvS%2Fu5wUqfKo4%3D";
    /*return (
      <div>
        <Player
          playsInline
          poster="/assets/poster.png"
          src={url}
        />
        <a onClick={this.openModal} href={"\#"}>Video</a>
      </div>
    )*/
    return (
      <div>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )


  }
}

export default Video_Modal;
