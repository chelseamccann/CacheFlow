import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


// protected route to be added once addtional pages added as comps
// greeting container does not need protected route since conditional checks for loggedin/loggedout and renders based on that

const App = () => (
  <div>
    <header>
      <h1>Cache Flow</h1> 
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;