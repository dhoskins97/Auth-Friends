import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem(`token`)) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />
    }
  }} />
};

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/friends" component={Friends} />
    </div>
    </Router>
  );
}

export default App;
