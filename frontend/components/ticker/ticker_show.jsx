import React from 'react';
import Charting from '../chart/chart';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            // price: [], time: [] 
            tickerData: []
        }
    }

    componentDidMount(){
        this.props.fetchTickerData(this.props.tickerSymbol)
        .then(data => this.renderData(data))
    }

    
    renderData(data){
        // intrinio
        // data.data.map((price, idx) => {
        //     this.setState({price: [...this.state.price, price.last_price], time: [...this.state.time, price.time]})
        //     this.setState({tickerData: [...this.state.tickerData, {price: price.last_price, time: price.time}]})
        // })

        data.data.map((price, idx) => {
            this.setState(
                {tickerData: [...this.state.tickerData, 
                {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}]}
                )
            // this.setState({price: [...this.state.price, price.close], time: [...this.state.time, price.minute]})
        })
    }

    render(){
        return (
            <div>
                {/* {this.renderData()} */}
                <Charting 
                tickerSymbol={this.props.tickerSymbol} 
                tickerData={this.state.tickerData}
                />
            </div>
            )
    }
}

export default TickerShow;