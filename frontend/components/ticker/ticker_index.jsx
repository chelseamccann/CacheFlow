import React from 'react';
import { Route, Link } from 'react-router-dom';
import TickerShowContainer from './ticker_show_container';
import { ProtectedRoute } from '../../util/route_utils';

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
                <li key={`${ticker}-${idx}`} className="each-ticker">
                    <Link to={`/${ticker.symbol}`} id={ticker.id}>
                        {ticker.symbol} 
                    </Link>
                </li>
            )
        })
        
        return(
            <ul className="ticker-index block-paddings">
                
                {tickers}
            </ul>
        )
    }
}

export default TickerIndex;