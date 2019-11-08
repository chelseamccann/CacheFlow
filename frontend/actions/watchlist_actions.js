import * as WatchlistApiUtil from "../util/watchlist_api_util";

export const RECEIVE_WATCHLIST_ITEMS = "RECEIVE_WATCHLIST_ITEMS";
export const RECEIVE_WATCHLIST_ITEM = "RECEIVE_WATCHLIST_ITEM";
export const REMOVE_WATCHLIST_ITEM = "REMOVE_WATCHLIST_ITEM";

export const receiveWatchlistItems = items => ({
    type: RECEIVE_WATCHLIST_ITEMS,
    items
})

export const receiveWatchlistItem = item => ({
    type: RECEIVE_WATCHLIST_ITEM,
    item
})

export const removeWatchlistItem = symbol => ({
    type: REMOVE_WATCHLIST_ITEM,
    symbol
})


export const fetchWatchlistItems = () => dispatch => WatchlistApiUtil.fetchWatchlistItems()
    .then(items => {
        return dispatch(receiveWatchlistItems(items)) 
    })

export const createWatchlistItem = item => dispatch => {
    return WatchlistApiUtil.createWatchlistItem(item)
    .then(item => dispatch(receiveWatchlistItem(item)))};

export const deleteWatchlistItem = item => dispatch => {
    return WatchlistApiUtil.deleteWatchlistItem(item)
    .then(item => dispatch(removeWatchlistItem(item)))};