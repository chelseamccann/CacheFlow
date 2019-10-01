import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Cache FLOOOOOOOW</h1>
      <GreetingContainer />
    </header>

    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;