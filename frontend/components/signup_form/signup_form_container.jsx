import React from 'react';
import { signupUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

function mapStateToProps(state) {
  let errors = Object.values(state.errors);
  let formType = 'Sign Up';
  
  return { errors, formType }
}

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signupUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);