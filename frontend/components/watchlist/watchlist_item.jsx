import React from 'react';
import { connect } from 'react-redux';
import { createWatchlistItem, removeWatchlistItem } from '../../actions/watchlist_actions';

const mapDispatchToProps = dispatch => ({
  removeWatchlistItem: id => dispatch(removeWatchlistItem(id)),
  createWatchlistItem: item => dispatch(createWatchlistItem(item))
})

class WatchlistItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };

    this.addToWatchlist = this.addToWatchlist.bind(this);
  }

    addToWatchlist(){
      // debugger
      this.props.createWatchlistItem({symbol: this.props.tickerSymbol}).then(r => {
        // debugger
        console.log(r)
      })
    }

    render(){
        return <button onClick={() => this.addToWatchlist()}>Add to watchlist</button>
    }
}


export default connect(null, mapDispatchToProps)(WatchlistItem);