import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';


class Portfolio extends React.Component{

    render(){
        debugger
        return <ProtectedRoute exact path="/" component={TickerIndexContainer}/>
    }
}

export default Portfolio;