import { RECEIVE_TICKER, RECEIVE_TICKERS } from '../actions/ticker_actions';

const tickerReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_TICKERS:
            return action.tickers
        case RECEIVE_TICKER:
            debugger
            return Object.assign({}, state, {[action.ticker.symbol]: action.ticker.num_shares});
        default:
            return state;
    }
};

export default tickerReducer;