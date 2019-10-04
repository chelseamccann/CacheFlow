import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker } from '../../actions/ticker_actions'
import TickerShow from './ticker_show'

const mapStateToProps = (state, ownProps) => {
    return {ticker: ownProps.match.params.tickerSymbol}
}

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickerId => dispatch(fetchTicker(tickerId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TickerShow);