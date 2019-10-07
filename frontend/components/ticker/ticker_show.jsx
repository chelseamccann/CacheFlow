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
        this.props.fetchTickerData(this.props.tickerSymbol)
        .then(response => this.renderData(response))
    }

    renderData(response){
        // INTRINIO
        response.data.intraday_prices.map((price, idx) => {
            this.setState({tickerData: [...this.state.tickerData, {price: price.last_price, time: price.time}]})
            // this.setState(
                //     {tickerData: [...this.state.tickerData, 
                //     {time: parseInt(price.time.slice(11, 13)+price.time.slice(14, 16)+price.time.slice(17, 19)), price: price.last_price}]}
                //     )
        })

        // IEX
        // response.data.map((price, idx) => {
        //     this.setState(
        //         {tickerData: [...this.state.tickerData, 
        //         {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}]}
        //         )
        //     // this.setState({price: [...this.state.price, price.close], time: [...this.state.time, price.minute]})
        // })
    }

    render(){
        return (
            <div>
                {console.log(this.state.tickerData)}
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerData={this.state.tickerData}
                />
            </div>
            )
    }
}

export default TickerShow;