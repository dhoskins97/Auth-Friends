import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Login} />
    </div>
    </Router>
  );
}

export default App;
