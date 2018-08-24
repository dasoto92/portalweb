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
      categoryIdx: 0
    };
  }

  onClick(key) {
    this.setState({
      categoryIdx: key
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.categoryIdx !== this.state.categoryIdx;
  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({
      categoryIdx: nextState.categoryIdx
    })
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
            <QuestionAndAnswer json={this.props.categories} categoryIdx={this.state.categoryIdx}/>
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
  categoryIdx: PropTypes.number
};

export default Category;
