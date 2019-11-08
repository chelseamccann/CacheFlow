import React from 'react';
import { connect } from 'react-redux';
import { fetchTickers } from '../../actions/ticker_actions';
import TickerIndex from './ticker_index';

const mapStateToProps = state => {
  let userId = state.session.id;
  return {
    tickers: Object.values(state.entities.tickers), // selector would refactor this
    currentUser: state.entities.users[userId] 
  }
}

const mapDispatchToProps = dispatch => {
  return {fetchTickers: () => dispatch(fetchTickers())}
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerIndex);