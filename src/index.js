import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
