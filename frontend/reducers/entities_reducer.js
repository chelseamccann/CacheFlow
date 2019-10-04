import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tickersReducer from "./tickers_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  tickers: tickersReducer
});

export default entitiesReducer;
