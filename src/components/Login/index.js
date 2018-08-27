import React, {Component} from 'react';
import {Button, Form, Input} from 'reactstrap';
import axios from 'axios';
import {withRouter} from "react-router-dom";

import '../global/css/login.css';

function validate(username, password) {

  return {
    username: username.length === 0,
    password: password.length === 0,
  };
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials: [],
      username: '',
      password: '',
      touched: {
        username: false,
        password: false,
      },
    }
  }

  componentWillMount() {
    if (localStorage.length > 0) {
      this.props.history.push("/");
    } else {
      this.handleGetCredentials();
    }
  }

  componentDidMount() {
    if (this.state.credentials === []) {
      this.handleGetCredentials();
    }
  };

  handleGetCredentials() {
    const PATH = "https://utninternship.file.core.windows.net";
    const FILE_ROOT = "/prueba/credentials.txt";
    const KEY = "?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-09-26T07:13:12Z&st=2018-08-26T23:13:12Z&spr=https&sig=mJbFHNEqloNv6pFpsVITK6il%2FtYUb4E7B%2BJAjMkI3iU%3D";

    let result = axios.get(PATH + FILE_ROOT + KEY).then(response => {
      result = response.data.split(';');
      this.setState({
        credentials: result
      });
     // console.log(result);
    });
  };

  handleValidateCredentials() {
    let username = this.state.credentials[0].split(':');
    let password = this.state.credentials[1].split(':');
    return this.state.password === password[1] && username[1] === this.state.username;
  };

  handleUsernameChange = (evt) => {
    this.setState({username: evt.target.value});
  };

  handlePasswordChange = (evt) => {
    this.setState({password: evt.target.value});
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]: true},
    });
  };

  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    if (!this.handleValidateCredentials()) {
      return alert(`Error: Wrong email or password`);
    }
    localStorage.setItem('username', this.state.username);
    this.props.history.push("/", this.state);
  };

  canBeSubmitted() {
    const errors = validate(this.state.username, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.username, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

    return (
      <div className="LoginContainer">
        <Form className={"loginForm"}>
          <Input
            className={shouldMarkError('username') ? "error" : ""}
            type="text/email"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            onBlur={this.handleBlur('username')}
          />
          <br/>
          <Input
            className={shouldMarkError('password') ? "error" : ""}
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.handleBlur('password')}
          />
          <br/>
          <div className="buttonHolder center-block">
            <Button onClick={this.handleSubmit} disabled={isDisabled}>Sign up</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default withRouter(Login);
