import React from 'react';
import TickerIndex from '../ticker/ticker_index';
import TickerShow from '../ticker/ticker_show';

class Dashboard extends React.Component {

    render(){
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <button onClick={this.props.logout}>Log Out</button>
                <TickerShow/>
            </div>
        )
    }
}

export default Dashboard;