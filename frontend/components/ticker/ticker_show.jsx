import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import {fetchTickerData, fetchTickerDaily, fetchWeekly} from '../../util/ticker_data_api_util'; //INTRINIO

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            tickerDaily: [],
            tickerWeekly: []
        }
    }

    componentDidMount(){
        // fetchTickerData({symbol: this.props.tickerSymbol, callback: this.renderData})  //INTRINIO
        fetchTickerDaily(this.props.tickerSymbol).then(response => this.renderDaily(response))  //IEX
        fetchWeekly(this.props.tickerSymbol).then(response => this.renderWeekly(response))
    }

    renderDaily(response){
        // IEX
        const daily = response.map(price => {
            return {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}
        })
        this.setState({tickerDaily: daily})

        // INTRINIO
        // const tickerData = response.map(price => {
        //     return {price: price.last_price, time: parseInt(price.time.slice(11, 13)+price.time.slice(14, 16)+price.time.slice(17, 19))}
        //     })
        //     this.updateTickerData(tickerData)
    }


    renderWeekly(response){
        const weekly = response.map(price => {
            debugger
            return {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}
        })
        this.setState({tickerWeekly: weekly})
    }

    render(){
        debugger
        return (
            <div>
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerData={this.state.tickerDaily}
                tickerWeekly={this.state.tickerWeekly}
                />
                <TickerInfo 
                tickerSymbol={this.props.tickerSymbol} 
                />
            </div>
            )
    }
}

export default TickerShow;