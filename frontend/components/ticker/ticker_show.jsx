import React from 'react';
import Charting from '../chart/chart';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { price: [], time: [] }
    }

    componentDidMount(){
        this.props.fetchTickerData(this.props.tickerSymbol)
        .then(data => this.renderData(data))
    }

    renderData(data){
        data.data.intraday_prices.map((price, idx) => {
            this.setState({price: [...this.state.price, price.last_price], time: [...this.state.time, price.time]})
        })
    }

    render(){
        debugger
        return (
            <div>
                {/* {this.renderData()} */}
                <Charting 
                tickerSymbol={this.props.tickerSymbol} 
                fetchTickerData={this.props.fetchTickerData}
                price={this.state.price}
                time={this.state.time}
                />
            </div>
            )
    }
}

export default TickerShow;

