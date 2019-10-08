import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import {fetchPrices, fetchDailyPrices } from '../../util/ticker_data_api_util'; //INTRINIO

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            "1D": [],
            "5dm": [],
            "1mm": [],
            "3M": [],
            "1Y": [],
            "5Y": [],
            timeFrame: ""
        }
    }

    componentDidMount(){
        fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response)) 
        fetchPrices(this.props.tickerSymbol, "5dm").then(response => this.renderPrices(response, "5dm"))
        fetchPrices(this.props.tickerSymbol, "1mm").then(response => this.renderPrices(response, "1mm"))
        fetchPrices(this.props.tickerSymbol, "3M").then(response => this.renderPrices(response, "3M"))
        fetchPrices(this.props.tickerSymbol, "1y").then(response => this.renderPrices(response, "1y"))
        fetchPrices(this.props.tickerSymbol, "5y").then(response => this.renderPrices(response, "5y"))
    }


    renderDaily(response){
        const daily = response.map(price => {
            return {label: parseInt(price.label.slice(0,2)+price.label.slice(3,5)), price: price.close, open: price.open, change: price.change, changePercent: price.changePercent}
        })
        this.setState({"1D": daily, timeFrame: "1d"})
    }

    renderPrices(response, timeFrame){
        const data = response.map(price => {
            return {price: price.close, date: price.date, open: price.open, change: price.change, changePercent: price.changePercent}
        })
        this.setState({[timeFrame]: data, timeFrame: timeFrame})
    }

    render(){
        debugger
        return (
            <div>
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerDaily={this.state["1D"]}
                tickerWeekly={this.state["5dm"]}
                tickerOneMonth={this.state["1M"]}
                tickerThreeMonth={this.state["3M"]}
                tickerOneYear={this.state["1Y"]}
                tickerFiveYear={this.state["5Y"]}
                />
                <TickerInfo 
                tickerSymbol={this.props.tickerSymbol} 
                />
            </div>
            )
    }
}

export default TickerShow;