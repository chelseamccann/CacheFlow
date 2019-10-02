import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Cache FLOOOOOOOW</h1> 
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;