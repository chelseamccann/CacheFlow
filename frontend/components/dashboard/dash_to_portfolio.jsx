import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import PortfolioContainer from '../portfolio/portfolio_container';
import News from '../news/news';
import {ProtectedRoute} from '../../util/route_utils';

const DashToPortfolio = () => {

    return (
        <>
            <ProtectedRoute exact path="/" component={TickerIndexContainer}/>
            <ProtectedRoute exact path="/" component={PortfolioContainer}/>
            <ProtectedRoute exact path="/" component={News}/>
        </>
    )

}

export default DashToPortfolio;