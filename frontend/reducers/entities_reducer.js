import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tickersReducer from "./tickers_reducer";
import tickerDataReducer from "./ticker_data_reducer";
import transactionsReducer from './transactions_reducer';
import watchlistReducer from './watchlist_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tickers: tickersReducer,
  tickerData: tickerDataReducer,
  transactions: transactionsReducer,
  watchlist: watchlistReducer
});

export default entitiesReducer;
