import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { loginUser, signupUser, logoutUser } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  window.loginUser = loginUser;
  window.signupUser = signupUser;
  window.logoutUser = logoutUser;
  
  const store = configureStore();
  const root = document.getElementById("root");
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root)
})