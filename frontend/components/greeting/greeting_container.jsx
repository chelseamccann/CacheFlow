import React from 'react';
import { logoutUser } from '../../actions/session_actions';
import { Greeting } from './greeting';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  let userId = state.session.id;
  return { currentUser: state.entities.users[userId] }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);