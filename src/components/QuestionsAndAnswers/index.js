import React, {Component} from 'react';

//CSS
import '../global/css/General.css';

// Component
import LeftMenu from '../global/LeftMenu'
import Category from './Category'

// Data
import items from '../../data/menu';
import axios from "axios";

class QuestionsAndAnswers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      ready: false
    }
  }

  componentDidMount() {
    if (localStorage.length < 1) {
      this.props.history.push("/login");
    } else {
      //console.log("DID MOUNT PRUEBA");
      this.getDataFromAzure();
    }
  }

  getDataFromAzure = () => {
    const PATH = "https://utninternship.blob.core.windows.net";
    const FILE_ROOT = "/data/category.json";
    const KEY = "?sp=rcwd&st=2018-08-29T17:12:39Z&se=2018-09-09T01:12:39Z&spr=https&sv=2017-11-09&sig=BVlOZVfcITy6WvYjE5J3jC8fPt0ze63GHcqf6XujWh0%3D&sr=b";
    axios.get(PATH + FILE_ROOT + KEY).then((response) => {
      this.setState({
        questions: response.data,
        ready: true
      })
    });
  };

  componentWillUpdate(nextState, nextProps) {
    //console.log("next_state", nextState, "next_props", nextProps.questions);
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="Content Body">
          <div className="row Body">
            <div className="col-3"><LeftMenu items={items} index={1}/></div>
            <div className="col-9"><Category categories={this.state.questions}/></div>
          </div>
        </div>
      );
    } else {
      return (<p></p>)
    }
  }
}

export default QuestionsAndAnswers;
