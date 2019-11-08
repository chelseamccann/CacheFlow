import { RECEIVE_TICKER, RECEIVE_TICKERS } from '../actions/ticker_actions';

const tickerReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_TICKERS:
            return action.tickers
        case RECEIVE_TICKER:
            return Object.assign({}, state, {[action.ticker.id]: {symbol: action.ticker.symbol, id: action.ticker.id, num_shares: action.ticker.num_shares}});
        default:
            return state;
    }
};

export default tickerReducer;