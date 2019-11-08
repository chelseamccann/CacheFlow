import React from 'react';
import { connect } from 'react-redux';
import { createWatchlistItem, deleteWatchlistItem } from '../../actions/watchlist_actions';

const mapDispatchToProps = dispatch => ({
  deleteWatchlistItem: id => dispatch(deleteWatchlistItem(id)),
  createWatchlistItem: item => dispatch(createWatchlistItem(item))
})

class WatchlistItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentButton: 'add'
    };

    this.addToWatchlist = this.addToWatchlist.bind(this);
  }

    addToWatchlist(){
      this.setState({currentButton: 'remove'})
      this.props.createWatchlistItem({symbol: this.props.tickerSymbol})
    }

    removeFromWatchlist(){
      debugger
      this.setState({currentButton: 'add'})
      this.props.deleteWatchlistItem({symbol: this.props.tickerSymbol})
    }

    render(){
      if (this.state.currentButton === 'add'){
        return <button className="watchlist-button addWatchlistButton" onClick={() => this.addToWatchlist()}>Add to watchlist</button>
      } else if (this.state.currentButton === 'remove'){
        return <button className="watchlist-button removeWatchlistButton" onClick={() => this.removeFromWatchlist()}>Remove from watchlist</button>
      }
    }
}


export default connect(null, mapDispatchToProps)(WatchlistItem);