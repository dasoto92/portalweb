import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

import '../global/css/login.css';

class Login extends Component {
  render() {
    return (
      <div className="LoginContainer">
        <Form className="loginForm">
          <div className="container">
            <FormGroup className="email">
              <Label for="email">Email</Label>
              <Input type="email" placeholder="Email" name="email" required/>
            </FormGroup>
            <FormGroup className="password">
              <Label for="password">Password</Label>
              <Input type="password" placeholder="*********" name="password" required/>
            </FormGroup>
          </div>
          <div className="buttonHolder center-block">
            <Button type="submit" className="btn btn-success loginButton">
              Login
            </Button>
          </div>
        </Form>

      </div>
    );
  }
}

export default Login;
