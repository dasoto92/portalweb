import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../global/css/bootstrap.css';
import '../global/css/General.css';

import QuestionAndAnswer from './QuestionAndAnswer'

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      categories: this.props.categories,
      json: [],
      categoryIndex: 0
    };
  }

  onClick(key) {
    this.setState({
      categoryIndex: key
    })
  }
/*
  componentWillMount(){
    console.log("will mount");
  }
  componentDidMount(){
    console.log("did mount");
  }

  componentWillReceiveProps(nextProps){
    console.log("receive props:  ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("should update" , nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("will update" , nextProps, nextState);
  }

  componentDidUpdate(currentProps, currentState){
    console.log("did update  aasd" , this.state.categoryIndex);
    //console.log("did update" , prevProps, prevState);
  }
*/

  onStateChange(arrayQuestions) {
    console.log(this.state.name);
    this.setState({
      questions: arrayQuestions,
      name: this.state.name + 1
    });
  }

  handleChange(key) {
  }

  render() {
    let newArray = [];
    const {categories} = this.props;
    Object.keys(categories.Questions).forEach(function (key) {
      newArray.push(key);
    });
    return (
      <div className="Category">
        <div className="row">
          <div className="col-3">
            <div className="vertical-menu-categories">
              <a className="active">
                <center>Categories</center>
              </a>
              {newArray.map((item, key) => {
                return <a onClick={() => this.onClick(key)} key={key}>{item}</a>
              })}
            </div>
          </div>
          <div className="col-9">
            <QuestionAndAnswer json={this.props.categories} categoryIndex={this.state.categoryIndex}/>
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.object.isRequired,
  questions: PropTypes.array,
  json: PropTypes.any,
  categoryIndex: PropTypes.number
};

export default Category;
