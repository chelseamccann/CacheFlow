import React from 'react';
import { connect } from 'react-redux';
import Watchlist from './watchlist';

const mapStateToProps = (state, ownProps) => {
    let userId = state.session.id;
    return {
    //   watchlistItems: Object.values(state.entities.watchlistItems), 
      currentUser: state.entities.users[userId] 
    }
}

// const mapDispatchToProps = dispatch => {
    // return {fetchWatchlistItems: () => dispatch(fetchWatchlistItems())}
// }

export default connect(mapStateToProps, null)(Watchlist);