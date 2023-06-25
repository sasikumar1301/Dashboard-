import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LogInPage from './Components/LogInPage';
import SignupPage from './SignupPage';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default App;
