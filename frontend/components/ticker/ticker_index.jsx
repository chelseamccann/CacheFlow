import React from 'react';
import { Route, Link } from 'react-router-dom';
import TickerShowContainer from './ticker_show_container';
import { ProtectedRoute } from '../../util/route_utils';
import PortfolioContainer from '../portfolio/portfolio_container';
import WatchlistContainer from '../watchlist/watchlist_container';
import TickerShow from './ticker_show';

class TickerIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchTickers();
    }

    render(){
         
        const tickers = this.props.tickers.map((ticker, idx) => {
            if (ticker.num_shares > 0){
                return (
                    <li key={`${ticker}-${idx}`} className="each-ticker watchlist-ticker">
                        <Link to={`/${ticker.symbol}`} id={ticker.id}>
                            <div>
                                <p>{ticker.symbol}</p>
                                <p>{`${ticker.num_shares} Shares`}</p>
                            </div>

                                {/* <MiniChart
                                    tickerSymbol={ticker.symbol}
                                    tickerId={ticker.id}
                                    tickerShares={ticker.num_shares}
                                /> */}
                                <TickerShowContainer 
                                    tickerSymbol={ticker.symbol}
                                    mini={true}
                                />

                        </Link>
                    </li>
                )
            }
        })
        
        return(

            <div className="ticker-index block-paddings">
                <ul className="stock-list">
                <h1 className="watchlist">Portfolio</h1>
                    <div className="watchlists">
                        {tickers}
                    </div>
                </ul>
                <ProtectedRoute exact path="/" component={WatchlistContainer}/>
            </div>

        )
    }
}

export default TickerIndex;