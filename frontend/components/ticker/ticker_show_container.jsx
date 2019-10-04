import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker } from '../../actions/ticker_actions'
import TickerShow from './ticker_show'

const mapStateToProps = (state, ownProps) => ({
    ticker: state.tickers[ownProps.match.params.tickerId]
})

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TickerShow);