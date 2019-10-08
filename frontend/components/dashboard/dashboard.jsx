import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import TickerShow from '../ticker/ticker_show';
import { Link, Route } from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_utils';
import TickerShowContainer from '../ticker/ticker_show_container';
import NavBar from '../nav_bar/nav_bar';

class Dashboard extends React.Component {

    render(){
        return (
            <div className="dashboard">
                <NavBar logout={this.props.logout}/>
                <div className="dashboard-middle">
                    <ProtectedRoute exact path='/:tickerSymbol' component={TickerShowContainer}/>
                    <ProtectedRoute path="/" component={TickerIndexContainer}/>
                </div>
            </div>
        )
    }
}

export default Dashboard;




{/* <ProtectedRoute exact path="/" component={TickerIndexContainer}/> */}