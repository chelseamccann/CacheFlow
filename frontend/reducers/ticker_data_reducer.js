import { RECEIVE_TICKER_DATA } from '../actions/ticker_data_actions';

const tickerDataReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        // case RECEIVE_TICKERS:
        //     return action.tickers
        case RECEIVE_TICKER_DATA:
            debugger
            return Object.assign({}, state, {[action.symbol]: action.data});
        default:
            return state;
    }
};

export default tickerDataReducer;