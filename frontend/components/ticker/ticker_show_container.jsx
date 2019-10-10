import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker } from '../../actions/ticker_actions';
import { executeTransaction } from '../../actions/transaction_actions';
import TickerShow from './ticker_show';

const mapStateToProps = (state, ownProps) => {
  return {tickerSymbol: ownProps.match.params.tickerSymbol}
}

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
  fetchTickerInfo: symbol => dispatch(fetchTickerInfo(symbol)),
  executeTransaction: transaction => dispatch(executeTransaction(transaction))
})

export default connect(mapStateToProps, mapDispatchToProps)(TickerShow);