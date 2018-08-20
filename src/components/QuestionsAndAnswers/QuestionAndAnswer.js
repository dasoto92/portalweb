// Dependencies
import React, {Component} from 'react';
import {Button, Form, FormGroup} from 'reactstrap';

//CSS
import '../global/css/General.css';
import '../global/css/bootstrap.css';
import PropTypes from "prop-types";

// Component

class QuestionAndAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        "Basic": [
          {
            "number": "1",
            "text": "pregunta 1",
            "extra": {
              "video": "?",
              "img": "?"
            },
            "answers": [{"text": "respuesta 1"}]
          },
          {
            "number": "2",
            "text": "pregunta 2",
            "extra": {
              "video": "?",
              "img": "?"
            },
            "answers": [{"text": "basic answer pregunta 2"}, {"text": "basic answer pregunta 3"}]
          }
        ],
        "Intermediate": [
          {
            "number": "1",
            "text": "Int pregunta 1",
            "extra": {
              "video": "?",
              "img": "?"
            },
            "answers": [{"text": "Int respuesta 1"}]
          },
          {
            "number": "2",
            "text": "Int pregunta 2",
            "extra": {
              "video": "?",
              "img": "?"
            },
            "answers": [{"text": "int answer pregunta 2"}, {"text": "int answer pregunta 3"}]
          }
        ]
      },
      json: this.props.json,
      categoryIndex: this.props.categoryIndex
    };
  }

  handleEditQuestion = (idx, levelIdx) => (evt) => {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
    });
    let selectedQuestion;
    selectedQuestion = mappedQuestionsAndAnswers[levelIdx].map((value, key) => {
      if (key !== idx) return value;
      return {...value, text: evt.target.value};
    });
    mappedQuestionsAndAnswers[levelIdx] = selectedQuestion;
    this.setState({questions: mappedQuestionsAndAnswers});
  };

  handleAnswerChange = (questionIdx, answerIdx, levelIdx) => (evt) => {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
    });
    const newShareholders = mappedQuestionsAndAnswers[levelIdx][questionIdx].answers.map((value, key) => {
      if (key !== answerIdx) return value;
      value = evt.target.value;
      return {...value, text: value};
    });
    mappedQuestionsAndAnswers[levelIdx][questionIdx].answers[answerIdx].text = newShareholders[answerIdx].text;
    this.setState({});
  };

  handleSubmit = (evt) => {
    const {name, questions} = this.state;
    alert(`Incorporated: ${name} with ${questions.length} shareholders`);
  };

  handleAddQuestions = (idx, levelIdx) => {
    let mappedQuestions = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestions.push(value);
    });
    let addedQuestion;
    addedQuestion = mappedQuestions[levelIdx].concat([
      {
        number: idx,
        text: '',
        extra: {
          "video": "?", "img": "?"
        },
        answers: []
      }]);
    mappedQuestions[levelIdx] = addedQuestion;
    this.setState({
      questions: mappedQuestions
    });
  };

  handleAddAnswers = (idx, levelIdx) => {
    let answers = [];
    Object.values(this.state.questions).map(function (value) {
      answers.push(value);
    });
    answers[levelIdx][idx].answers.push({text: ''});
    this.setState({});
  };

  handleRemoveQuestion = (idx, levelIdx) => () => {
    let mappedQuestions = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestions.push(value);
    });
    let removedQuestion;
    removedQuestion = mappedQuestions[levelIdx].filter((s, sidx) => idx !== sidx);
    mappedQuestions[levelIdx] = removedQuestion;
    this.setState({
      questions: mappedQuestions
    });
  };

  handleRemoveAnswer = (questionIdx, answerIdx, levelIdx) => () => {
    let mappedQuestions = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestions.push(value);
    });
    mappedQuestions[levelIdx][questionIdx].answers = mappedQuestions[levelIdx][questionIdx].answers.filter((s, sidx) => answerIdx !== sidx);
    console.log(mappedQuestions);
    this.setState({});
  };

  handleGetQuestions = (categoryIdx) => {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.json.Questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
    });
    //this.setState({
    this.state.questions = mappedQuestionsAndAnswers[categoryIdx];
    //})
  };

  //componentDidMount();
  render() {
    this.handleGetQuestions(this.props.categoryIndex);
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
    });
    return (
      <div className="QuestionAndAnswer">
        <Form onSubmit={this.handleSubmit}>
          <h4>Basic</h4>
          {
            mappedQuestionsAndAnswers.map((values, levelIdx) => (
              values.map((value, idx) => (
                <FormGroup key={idx + 100}>
                  <div className="row">
                    <div className="col-8">
                      <input
                        placeholder={`Question #${idx + 1}`}
                        value={value.text}
                        onChange={this.handleEditQuestion(idx, levelIdx)}
                        key={idx}
                        className="form-control input-lg"
                      />
                    </div>
                    <div className="col-3">
                      <Button type="button"
                              onClick={this.handleRemoveQuestion(idx, levelIdx)}
                              className="btn btn-danger"
                              style={{
                                marginLeft: '-25px'
                              }}>-
                      </Button>
                    </div>
                  </div>
                  <br/>
                  {
                    //console.log(value.answers)
                  }
                  {value.answers.map((value, key) => (
                    <div className="row" key={key} style={{
                      'marginLeft': '15px',
                      'marginBottom': '10px'
                    }}>
                      <div className="col-7">
                        <input
                          placeholder={`Answer #${key + 1}`}
                          value={value.text}
                          onChange={this.handleAnswerChange(idx, key, levelIdx)}
                          key={key}
                          className="form-control input-lg"
                        />
                      </div>
                      <div className="col-3">
                        <Button type="button"
                                onClick={this.handleRemoveAnswer(idx, key, levelIdx)}
                                className="btn btn-danger"
                                style={{
                                  marginLeft: '-25px'
                                }}>-
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <Button type="button"
                            onClick={() => this.handleAddAnswers(idx, levelIdx)}
                            className="btn btn-success"
                            style={{
                              marginLeft: '45px',
                              marginTop: '5px'
                            }}>+
                    </Button>
                  </div>
                </FormGroup>
              )).concat(
                <Button type="button"
                        onClick={() => this.handleAddQuestions(values.length + 1, levelIdx)}
                        className="btn btn-success"
                        key={levelIdx + 10}
                        style={{
                          'textAlign': 'center',
                          'margin': '5px'
                        }}
                >Add
                </Button>)
            ))
          }
          <hr/>
          <Button className="btn btn-info" style={{
            'textAlign': 'center',
            'margin': '5px'
          }}>Save</Button>
        </Form>
      </div>
    );
  }
}

QuestionAndAnswer.propTypes = {
  questions: PropTypes.array,
  json: PropTypes.any,
  categoryIndex: PropTypes.number
};

export default QuestionAndAnswer;
