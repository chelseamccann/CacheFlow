import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import {fetchTickerData, fetchTickerDaily, fetchWeekly, fetchOneMonth, fetchThreeMonth, fetchOneYear, fetchFiveYear} from '../../util/ticker_data_api_util'; //INTRINIO

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            tickerDaily: [],
            tickerWeekly: [],
            tickerOneMonth: [],
            tickerThreeMonth: [],
            tickerOneYear: [],
            tickerFiveYear: []
        }
    }

    componentDidMount(){
        // fetchTickerDaily({symbol: this.props.tickerSymbol, callback: this.renderDaily})  //INTRINIO
        fetchTickerDaily(this.props.tickerSymbol).then(response => this.renderDaily(response))  //IEX
        fetchWeekly(this.props.tickerSymbol).then(response => this.renderWeekly(response))
        fetchOneMonth(this.props.tickerSymbol).then(response => this.renderOneMonth(response))
        fetchThreeMonth(this.props.tickerSymbol).then(response => this.renderThreeMonth(response))
        fetchOneYear(this.props.tickerSymbol).then(response => this.renderOneYear(response))
        fetchFiveYear(this.props.tickerSymbol).then(response => this.renderFiveYear(response))
    }

    renderDaily(response){
        // IEX
        const daily = response.map(price => {
            return {label: parseInt(price.label.slice(0,2)+price.label.slice(3,5)), price: price.close}
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
            return {price: price.close, date: price.date}
        })
        this.setState({tickerWeekly: weekly})
    }

    renderOneMonth(response){
        const oneMonth = response.map(price => {
            return {price: price.close, date: price.date}
        })
        this.setState({tickerOneMonth: oneMonth})
    }

    renderThreeMonth(response){
        const threeMonth = response.map(price => {
            return {price: price.close, date: price.date}
        })
        this.setState({tickerThreeMonth: threeMonth})
    }

    renderOneYear(response){
        const oneYear = response.map(price => {
            return {price: price.close, date: price.date}
        })
        this.setState({tickerOneYear: oneYear})
    }

    renderFiveYear(response){
        const fiveYear = response.map(price => {
            return {price: price.close, date: price.date}
        })
        this.setState({tickerFiveYear: fiveYear})
    }

    render(){
        return (
            <div>
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerDaily={this.state.tickerDaily}
                tickerWeekly={this.state.tickerWeekly}
                tickerOneMonth={this.state.tickerOneMonth}
                tickerOneYear={this.state.tickerOneYear}
                tickerFiveYear={this.state.tickerFiveYear}
                />
                <TickerInfo 
                tickerSymbol={this.props.tickerSymbol} 
                />
            </div>
            )
    }
}

export default TickerShow;