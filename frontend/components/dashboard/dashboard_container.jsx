import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  let userId = state.session.id;
  return { currentUser: state.entities.users[userId] }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);