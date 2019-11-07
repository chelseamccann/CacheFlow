import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker } from '../../actions/ticker_actions';
import { executeBuy } from '../../actions/transaction_actions';
import TickerShow from './ticker_show';

const mapStateToProps = (state, ownProps) => {

  let userId = state.session.id;
  let tickerSymbol = ownProps.match.params.tickerSymbol
  return {
    tickerSymbol: tickerSymbol,
    currentUser: state.entities.users[userId],
    currentBuyingPower: state.entities.users[userId].buying_power,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
  fetchTickerInfo: symbol => dispatch(fetchTickerInfo(symbol)),
  executeBuy: transaction => dispatch(executeBuy(transaction)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TickerShow);