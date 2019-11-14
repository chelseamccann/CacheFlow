import React from 'react';
import Dashboard from './dashboard';
import { logoutUser } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let userId = state.session.id
  let url = ownProps.match.params 

  return { 
    currentUser: state.entities.users[userId],
    url: url
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);