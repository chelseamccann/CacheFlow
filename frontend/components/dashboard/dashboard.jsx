import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import TickerShow from '../ticker/ticker_show';
import { Link, Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_utils';
import TickerShowContainer from '../ticker/ticker_show_container';
import NavBar from '../nav_bar/nav_bar';
import PortfolioContainer from '../portfolio/portfolio_container';
import News from '../news/news';
import Search from '../search/search';
import DashToPortfolio from './dash_to_portfolio';

class Dashboard extends React.Component {

    render(){
        return (
            <div className="dashboard">
                <NavBar logout={this.props.logout}/>
                <div className="dashboard-middle">
                
                    <Switch>
                        <ProtectedRoute exact path='/:tickerSymbol' component={TickerShowContainer}/>
                        <ProtectedRoute exact path='/' component={DashToPortfolio}/>
                        {/* <ProtectedRoute exact path="/" component={PortfolioContainer}/> */}
                        {/* <DashToPortfolio /> */}
                    </Switch>
                
                </div>
                
            </div>
        )
    }
}

export default Dashboard;
