import * as TickerApiUtil from "../util/ticker_api_util";

export const RECEIVE_TICKERS = "RECEIVE_TICKERS";
export const RECEIVE_TICKER = "RECEIVE_TICKER";

export const receiveTickers = tickers => ({
    type: RECEIVE_TICKERS,
    tickers
})

export const receiveTicker = ticker => ({
    type: RECEIVE_TICKER,
    ticker
})

export const fetchTickers = tickers => dispatch => TickerApiUtil.fetchTickers(tickers)
    .then(tickers => (dispatch(receiveTickers(tickers))))


export const fetchTicker = tickerId => dispatch => TickerApiUtil.fetchTicker(tickerId)
    .then(ticker => (dispatch(receiveTicker(ticker))))