import React from 'react';
import { Route, Link } from 'react-router-dom';
import TickerShowContainer from './ticker_show_container';
import { ProtectedRoute } from '../../util/route_utils';
import PortfolioContainer from '../portfolio/portfolio_container';

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
            return (
                <li key={`${ticker}-${idx}`} className="each-ticker watchlist-ticker">
                    <Link to={`/${ticker.symbol}`} id={ticker.id}>
                        {ticker.symbol} 
                    </Link>
                </li>
            )
        })
        
        return(

            <ul className="ticker-index block-paddings">
                <h1 className="watchlist">Watchlist</h1>
                <div className="watchlists">
                {tickers}
                </div>
            </ul>

        )
    }
}

export default TickerIndex;