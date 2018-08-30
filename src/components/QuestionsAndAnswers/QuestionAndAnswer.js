import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup} from 'reactstrap';
import Azure from 'azure-storage';
import {withAlert} from 'react-alert'

//CSS
import '../global/css/General.css';
import '../global/css/bootstrap.css';
import PropTypes from "prop-types";

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
      categoryIndex: this.props.categoryIdx
    };
  }

  handleEditQuestion = (idx, levelIdx) => (evt) => {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
      return mappedQuestionsAndAnswers;
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
      return mappedQuestionsAndAnswers;
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
      return mappedQuestions;
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
      return answers;
    });
    answers[levelIdx][idx].answers.push({text: ''});
    this.setState({});
  };

  handleRemoveQuestion = (idx, levelIdx) => () => {
    let mappedQuestions = [];
    Object.values(this.state.questions).map(function (value) {
      mappedQuestions.push(value);
      return mappedQuestions;
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
      return mappedQuestions;
    });
    mappedQuestions[levelIdx][questionIdx].answers = mappedQuestions[levelIdx][questionIdx].answers.filter((s, sidx) => answerIdx !== sidx);
    console.log(mappedQuestions);
    this.setState({});
  };

  componentDidMount() {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.json.Questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
      return mappedQuestionsAndAnswers;
    });
    this.setState({
      questions: mappedQuestionsAndAnswers[0],
      categoryIndex: this.props.categoryIdx
    })
  }

  componentWillMount() {
    //console.log("will mount:", this.props.json.Questions.Java[0][0].text);
  }

  componentWillUpdate(nextProps) {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.json.Questions).map(function (value) {
      mappedQuestionsAndAnswers.push(value);
      return mappedQuestionsAndAnswers;
    });
    if (nextProps.categoryIdx !== this.state.categoryIndex) {
      this.setState({
        questions: mappedQuestionsAndAnswers[this.props.categoryIdx],
        categoryIndex: this.props.categoryIdx
      })
    }
  }

  componentDidUpdate(currentProps, currentState) {
  }

  saveJSON = (t) => {
    let fileService = Azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=utninternship;AccountKey=h++vyiOsvkR1AYDwC8z8xG1yamdzEYKdG+SHWLLSQGdG7+SWKOHkRQ6FjpQOAmBeRUNi0pz+aTaCcBZz/lfDPw==;EndpointSuffix=core.windows.net");
    let json = this.state.json;
    let newArray = [];
    Object.keys(json.Questions).forEach(function (key) {
      newArray.push({"value": key});
    });
    json.Questions[newArray[this.state.categoryIndex].value] = this.state.questions;
    let text = JSON.stringify(this.state.json);
    this.setState({
      json: json
    });
    fileService.createBlockBlobFromText('data', 'category.json', text, function (error, result, response) {
      if (!error) {
        t.props.alert.success('Data saved successfully');
      } else {
        t.props.alert.success('Error, server did not respond');
      }
    });
  };

  static levelDiff(levelIdx, idx) {
    let level = ("");
    if (levelIdx === 0 && idx === 0) {
      level = (<h4 className={"levelD"}>Basic</h4>)
    }
    if (levelIdx === 1 && idx === 0) {
      level = (<h4 className={"levelMid"}>Intermediate</h4>)
    }
    if (levelIdx === 2 && idx === 0) {
      level = (<h4 className={"levelMid"}>Advanced</h4>)
    }
    return level;
  }

  render() {
    let mappedQuestionsAndAnswers = [];
    Object.values(this.state.questions).map(function (value, key) {
      mappedQuestionsAndAnswers.push(value);
      return mappedQuestionsAndAnswers;
    });
    return (
      <div className="QuestionAndAnswer">
        <Fragment>
          <div className={"saveData"}><Button onClick={()=>this.saveJSON(this)}> Save </Button></div>
        </Fragment>
        <Form className={"formQuestions"} onSubmit={this.handleSubmit}>
          {
            mappedQuestionsAndAnswers.map((values, levelIdx) => (
              values.map((value, idx) => (
                <FormGroup key={idx + 100}>
                  {QuestionAndAnswer.levelDiff(levelIdx, idx)}
                  <div className="row">
                    <p className={"questionNumber"}>{idx + 1}</p>
                    <div className="col-10">
                      <input
                        placeholder={`Question #${idx + 1}`}
                        value={value.text}
                        onChange={this.handleEditQuestion(idx, levelIdx)}
                        key={idx}
                        className="form-control input-lg"
                      />
                    </div>
                    <div className="col-1">
                      <button type="button"
                              onClick={this.handleRemoveQuestion(idx, levelIdx)}
                              className="w3-button w3-white"
                              style={{
                                marginLeft: '-25px'
                              }}>x
                      </button>
                    </div>
                  </div>
                  <br/>
                  {value.answers.map((value, key) => (
                    <div className="row" key={key} style={{
                      'marginLeft': '15px',
                      'marginBottom': '10px'
                    }}>
                      <div className="col-9">
                        <input
                          placeholder={`Answer #${key + 1}`}
                          value={value.text}
                          onChange={this.handleAnswerChange(idx, key, levelIdx)}
                          key={key}
                          className="form-control input-lg"
                        />
                      </div>
                      <div className="col-3">
                        <button type="button"
                                onClick={this.handleRemoveAnswer(idx, key, levelIdx)}
                                className="w3-button w3-white"
                                style={{
                                  marginLeft: '-25px'
                                }}>x
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <button type="button"
                            onClick={() => this.handleAddAnswers(idx, levelIdx)}
                            className="w3-button w3-circle newAnswer"
                            style={{
                              marginLeft: '45px'
                            }}>+
                    </button>
                  </div>
                  <br/>
                </FormGroup>
              )).concat(
                <Button type="button"
                        onClick={() => this.handleAddQuestions(values.length + 1, levelIdx)}
                        className="btn"
                        key={levelIdx + 10}
                        style={{
                          'backgroundColor': '#17a2b8',
                          'textAlign': 'center',
                          'marginLeft': '35%',
                          'marginBottom': '5%'
                        }}
                >New Question
                </Button>
              )
            ))
          }
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

export default withAlert(QuestionAndAnswer);
