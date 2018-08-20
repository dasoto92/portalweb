// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Reports from './components/Reports';
import Home from './components/Home';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/questionsandanswers" component={QuestionsAndAnswers} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
