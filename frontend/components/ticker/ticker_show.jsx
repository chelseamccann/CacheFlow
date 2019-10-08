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
            timeFrame: "",
            tickerSymbol: "",
        }

        this.updatePrices = this.updatePrices.bind(this);
    }

    componentDidMount(){
        fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response))
    }

    componentDidUpdate(prevProps){
        // if (prevProps.match.params.tickerSymbol !== this.state.tickerSymbol){ // diff symbol and switching timeframe
        //     this.setState({"1D": [], "5dm": [], "1mm": [], "3M": [], "1Y": [], "5Y": []})
        // }
        debugger
        // this.setState({timeFrame: timeFramePassed})
    }

    renderDaily(response){
        const daily = response.map(price => {
            return {label: parseInt(price.label.slice(0,2)+price.label.slice(3,5)), price: price.close, open: price.open, change: price.change, changePercent: price.changePercent}
        })
        this.setState({"1D": daily, timeFrame: "1D", tickerSymbol: this.props.tickerSymbol})
    }

    renderPrices(response, timeFramePassed){
        const data = response.map(price => {
            return {price: price.close, date: price.date, open: price.open, change: price.change, changePercent: price.changePercent}
        })
        this.setState({[timeFramePassed]: data, timeFrame: timeFramePassed, tickerSymbol: this.props.tickerSymbol})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {
                debugger
                fetchPrices(this.props.tickerSymbol, timeFrame).then(response => this.renderPrices(response, timeFrame))
            }

            //higher order fnc that returns fnc that does the above 
        }
    }

    render(){
        debugger

        const tF = Object.keys(this.state).map(key => {
            if (key !== "timeFrame" && key !== "tickerSymbol"){
                debugger
                return (
                    <>

                        <button key={`${key}-id`} onClick={this.updatePrices(key)}>{key}</button>
                    </>
                )
            }
        })

        return (
            <div>
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol}
                ticker={this.state[this.state.timeFrame]}
                />

                {tF}
                <TickerInfo 
                tickerSymbol={this.props.tickerSymbol} 
                />
            </div>
            )
    }
}

export default TickerShow;