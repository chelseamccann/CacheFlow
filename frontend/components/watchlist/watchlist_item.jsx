import React from 'react';
import { connect } from 'react-redux';
import { fetchWatchlistItems, createWatchlistItem, deleteWatchlistItem } from '../../actions/watchlist_actions';
import { fetchTickers } from '../../actions/ticker_actions';

const mapStateToProps = (state, ownProps) => {

  let tickerSymbol = ownProps.tickerSymbol || ownProps.match.params.tickerSymbol
  return {
    tickerSymbol: tickerSymbol,
    watchlistItems: Object.values(state.entities.watchlist),
    tickers: Object.values(state.entities.tickers)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWatchlistItems: () => dispatch(fetchWatchlistItems()),
  deleteWatchlistItem: id => dispatch(deleteWatchlistItem(id)),
  createWatchlistItem: item => dispatch(createWatchlistItem(item)),
  fetchTickers: () => dispatch(fetchTickers())
})

class WatchlistItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentButton: ''
    };

    this.addToWatchlist = this.addToWatchlist.bind(this);
  }

  componentDidMount(){
    this.setState({currentButton: ''})
    let button = ''
    let portfolio = false
    this.props.fetchTickers().then(response => {
      Object.values(response.tickers).forEach(el => {
        if (el.symbol.toUpperCase() === this.props.tickerSymbol.toUpperCase() && el.num_shares > 0){
          portfolio = true
        }
      })

      if (portfolio === false){
        button = 'add'
        this.props.fetchWatchlistItems().then(response => {
          Object.values(response.items).forEach(el => {
            if (el.symbol.toUpperCase() === this.props.tickerSymbol.toUpperCase()){
              button = 'remove'
            } 
          })
          
          if (button === 'remove'){
            this.setState({currentButton: 'remove'})
          } else if (button === 'add'){
            this.setState({currentButton: 'add'})
          }
        })
      }
      // (button === 'remove') ? this.setState({currentButton: 'remove'}) : this.setState({currentButton: 'add'})
    })

  }
  
  componentDidUpdate(prevProps){
    if(prevProps.tickerSymbol.toUpperCase() !== this.props.tickerSymbol.toUpperCase()){
      // this.props.fetchWatchlistItems().then(response => {
        
      let button = ''
      let portfolio = false

        this.props.tickers.forEach(el => {
          if (el.symbol.toUpperCase() === this.props.tickerSymbol.toUpperCase() && el.num_shares > 0){
            portfolio = true
          }
        })

        if (portfolio === false){
          button = 'add'
        // Object.values(response.items).forEach(el => {

          this.props.watchlistItems.forEach(el => {
            if (el.symbol.toUpperCase() === this.props.tickerSymbol.toUpperCase()){
              button = 'remove'
            } 
          })
        }

        if (button === 'remove'){
          this.setState({currentButton: 'remove'})
        } else if (button === 'add'){
          this.setState({currentButton: 'add'})
        }
        // (button === 'remove') ? this.setState({currentButton: 'remove'}) : this.setState({currentButton: 'add'})

    }
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
        return <button className={`watchlist-button addWatchlistButton ${this.props.colorClass}`} onClick={() => this.addToWatchlist()}>Add to watchlist</button>
      } else if (this.state.currentButton === 'remove'){
        return <button className={`watchlist-button removeWatchlistButton ${this.props.colorClass}`} onClick={() => this.removeFromWatchlist()}>Remove from watchlist</button>
      } else {
        return <div></div>
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchlistItem);