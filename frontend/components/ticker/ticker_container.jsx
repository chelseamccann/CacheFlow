import React from 'react';
import { connect } from 'react-redux';
import { fetchTicker, fetchTickers } from '../../actions/ticker_actions'

function mapStateToProps(state) {
}

const mapDispatchToProps = dispatch => ({
  fetchTicker: tickers => dispatch(fetchTicker(tickers)),
  fetchTickers: tickerId => dispatchEvent(fetchTickers(tickerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);