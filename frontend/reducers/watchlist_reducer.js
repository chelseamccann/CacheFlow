import { RECEIVE_WATCHLIST_ITEMS, RECEIVE_WATCHLIST_ITEM, REMOVE_WATCHLIST_ITEM } from "../actions/watchlist_actions";

export default (state = {}, action) => {
const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHLIST_ITEMS:
        return action.items;
    case RECEIVE_WATCHLIST_ITEM:
        return Object.assign({}, oldState, { [action.item.id]: action.item});// {[action.currentUser.id]: action.currentUser});
    case REMOVE_WATCHLIST_ITEM:
      debugger
        let newState = Object.assign({}, oldState);
        delete newState[action.symbol];
        return newState;
    default:
      return state;
  }
};
