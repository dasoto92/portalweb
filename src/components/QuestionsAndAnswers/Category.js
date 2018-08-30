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

  componentDidMount() {
    document.getElementById((this.state.categoryIdx+1)*100).className = "active";
  }

  onClick(key) {
    document.getElementById((this.state.categoryIdx + 1) * 100).className = "";
    document.getElementById((key + 1) * 100).className = "active";
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
            <div className="vertical-menu-categories col-xs-2 col-sd-2 col-md-3 col-lg-3">
              {newArray.map((item, key) => {
                return <a onClick={() => this.onClick(key)} id={(key + 1) * 100} key={key}>{item}</a>
              })}
            </div>

          <div className="questions col-xs-10 col-sd-10 col-md-9 col-lg-9">
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
