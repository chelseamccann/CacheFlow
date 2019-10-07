import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker } from '../../actions/ticker_actions'
import { fetchTickerData } from '../../actions/ticker_data_actions'
import TickerShow from './ticker_show'

const mapStateToProps = (state, ownProps) => {
    return {tickerSymbol: ownProps.match.params.tickerSymbol}
}

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
  fetchTickerData: symbol => dispatch(fetchTickerData(symbol)),
  fetchTickerInfo: symbol => dispatch(fetchTickerInfo(symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(TickerShow);