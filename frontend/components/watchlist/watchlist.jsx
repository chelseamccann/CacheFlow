import React from 'react';
import { Link } from 'react-router-dom';
import TickerShowContainer from '../ticker/ticker_show_container';

class Watchlist extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.props.fetchWatchlistItems()
    }

    render(){
        const tickers = this.props.watchlistItems.map((ticker, idx) => {
                return (
                    <li key={`${ticker}-${idx}`} className="each-ticker watchlist-ticker">
                        <Link to={`/${ticker.symbol}`} id={ticker.id}>
                            {ticker.symbol.toUpperCase()}
                            <TickerShowContainer 
                                    tickerSymbol={ticker.symbol}
                                    mini={true}
                                />
                        </Link>
                    </li>
                )
            })
        if (tickers.length > 0){
            return(

                <ul>
                    <h1 className="watchlist">Watchlist</h1>
                    <div className="watchlists">
                    {tickers}
                    </div>
                </ul>

            )
        } else {
            return <div></div>
        }

    }
}

export default Watchlist