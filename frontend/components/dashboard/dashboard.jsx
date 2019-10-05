import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import TickerShow from '../ticker/ticker_show';
import { Link, Route } from 'react-router-dom'
import {ProtectedRoute} from '../../util/route_utils'
import TickerShowContainer from '../ticker/ticker_show_container'

class Dashboard extends React.Component {

    render(){
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <Link to="/"><button onClick={this.props.logout}>Log Out</button></Link>
                <ProtectedRoute exact path='/:tickerSymbol' component={TickerShowContainer}/>
                {/* <ProtectedRoute exact path="/" component={TickerIndexContainer}/> */}
                <ProtectedRoute path="/" component={TickerIndexContainer}/>
            </div>
        )
    }
}

export default Dashboard;