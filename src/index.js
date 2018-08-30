import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const options = {
  timeout: 5000,
  position: "top center"
};

ReactDOM.render(
  <Provider template={AlertTemplate} {...options}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
