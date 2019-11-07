import React from 'react';
import { connect } from 'react-redux';
import { fetchWatchlistItems } from '../../actions/watchlist_actions';
import Watchlist from './watchlist';

const mapStateToProps = (state, ownProps) => {
    let userId = state.session.id;
    debugger
    return {
      watchlistItems: Object.values(state.entities.watchlist), 
      currentUser: state.entities.users[userId] 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWatchlistItems: () => dispatch(fetchWatchlistItems()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);``