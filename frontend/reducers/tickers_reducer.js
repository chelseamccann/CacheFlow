import { RECEIVE_TICKER, RECEIVE_TICKERS } from '../actions/ticker_actions';

const tickerReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_TICKERS:
            return action.tickers
        case RECEIVE_TICKER:
                return Object.assign({}, state, {[action.ticker.id]: action.ticker});
        default:
            return state;
    }
};

export default tickerReducer;