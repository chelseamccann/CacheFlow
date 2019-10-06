import React from 'react';
import TickerChart from './ticker_chart';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            tickerData: []
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchTickerData(this.props.tickerSymbol)
        .then(response => console.log(response))
        // .then(response => this.renderData(response))
    }

    renderData(response){
        debugger
        // intrinio
        response.data.map((price, idx) => {
            debugger
            console.log(price.intraday_prices)
            // this.setState({price: [...this.state.price, price.last_price], time: [...this.state.time, price.time]})
            // this.setState({tickerData: [...this.state.tickerData, {price: price.last_price, time: price.time}]})
            // this.setState(
            //     {tickerData: [...this.state.tickerData, 
            //     {time: parseInt(price.time.slice(11, 13)+price.time.slice(14, 16)+price.time.slice(17, 19)), price: price.last_price}]}
            //     )
        })

        // data.data.map((price, idx) => {
        //     this.setState(
        //         {tickerData: [...this.state.tickerData, 
        //         {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}]}
        //         )
            // this.setState({price: [...this.state.price, price.close], time: [...this.state.time, price.minute]})
        // })
    }

    render(){
        debugger
        return (
            <div>
                
                {/* <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerData={this.state.tickerData}
                /> */}
            </div>
            )
    }
}

export default TickerShow;