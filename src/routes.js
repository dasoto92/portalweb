import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Reports from './components/Reports';
import Home from './components/Home';
import Login from './components/Login';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/questions-and-answers" component={QuestionsAndAnswers} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
