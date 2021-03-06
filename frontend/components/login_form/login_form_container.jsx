import React from 'react';
import { loginUser, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  let errors = Object.values(state.errors);
  let formType = 'Log In';

  return { errors, formType }
}

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(loginUser(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);