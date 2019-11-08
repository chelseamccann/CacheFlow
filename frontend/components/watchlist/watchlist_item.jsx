import React from 'react';
import { connect } from 'react-redux';
import { fetchWatchlistItems, createWatchlistItem, deleteWatchlistItem } from '../../actions/watchlist_actions';

const mapStateToProps = (state, ownProps) => {
  let tickerSymbol = ownProps.match.params.tickerSymbol
  return {
    tickerSymbol: tickerSymbol,
    watchlistItems: Object.values(state.entities.watchlist)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWatchlistItems: () => dispatch(fetchWatchlistItems()),
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

  componentDidMount(){
    this.props.fetchWatchlistItems().then(response => {
      Object.values(response.items).forEach(el => {
        console.log(this.props.tickerSymbol)
        if (el.symbol === this.props.tickerSymbol){
          this.setState({currentButton: 'remove'})
        } 
        
      })
    })
  }

    addToWatchlist(){
      this.setState({currentButton: 'remove'})
      this.props.createWatchlistItem({symbol: this.props.tickerSymbol})
    }

    removeFromWatchlist(){
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