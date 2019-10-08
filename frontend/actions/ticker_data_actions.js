import * as API from '../util/ticker_data_api_util';

export const RECEIVE_TICKER_DATA = 'RECEIVE_TICKER_DATA';

export const receiveTickerData = (symbol, data) => ({
    type: RECEIVE_TICKER_DATA,
    symbol: symbol,
    data: data
})

export const fetchTickerData = symbol => dispatch => API.fetchTickerData(symbol)
    .then(data => dispatch(receiveTickerData(symbol, data)))

export const fetchTickerInfo = symbol => dispatch => API.fetchTickerInfo(symbol)
.then(data => dispatch(receiveTickerData(symbol, data)))
