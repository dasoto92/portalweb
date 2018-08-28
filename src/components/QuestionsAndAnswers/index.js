import React, {Component} from 'react';

//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'
import Category from './Category'

// Data
import items from '../../data/menu';
import categories from '../../data/prueba.json';
import axios from "axios";

class QuestionsAndAnswers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      ready:false
    }
  }

  componentDidMount() {
    if (localStorage.length < 1) {
      this.props.history.push("/login");
    }
    this.pruebaY();
  }

  pruebaY = (evt) => {
    const PATH = "https://utninternship.file.core.windows.net";
    const FILE_ROOT = "/prueba/prueba.json";
    const KEY = "?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-09-26T07:13:12Z&st=2018-08-26T23:13:12Z&spr=https&sig=mJbFHNEqloNv6pFpsVITK6il%2FtYUb4E7B%2BJAjMkI3iU%3D";

    let result = axios.get(PATH + FILE_ROOT + KEY).then((response, error) => {
      console.log("Response data: ", response.data);
      this.setState({
        questions: response.data,
        ready: true
      })
    });
  };


  componentWillUpdate(nextState, nextProps){
    console.log("next_state", nextState, "next_props", nextProps.questions);

  }

  render() {
    if(this.state.ready){
      return (
        <div className="Content Body">
          <div className="row Body">
            <div className="col-3"><LeftMenu items={items} index={1}/></div>
            <div className="col-9"><Category categories={this.state.questions}/></div>
          </div>
        </div>
      );
    }else{
      return(<p>Not data found</p>)
    }

  }
}

export default QuestionsAndAnswers;
