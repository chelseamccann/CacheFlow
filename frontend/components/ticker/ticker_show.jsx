import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import {fetchPrices, fetchDailyPrices } from '../../util/ticker_data_api_util'; 

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
            open: 0,
            // change: 0,
            // changePercent: 0
        }

        this.updatePrices = this.updatePrices.bind(this);
    }

    componentDidMount(){
        fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
    }

    componentDidUpdate(prevProps){
        // debugger
        // if (prevProps.match.params.tickerSymbol !== this.state.tickerSymbol){ // diff symbol and switching timeframe
        //     this.setState({"1D": [], "5dm": [], "1mm": [], "3M": [], "1Y": [], "5Y": []})
        // }
        // debugger
    }

    renderDaily(response){
        debugger
        const daily = response.map(price => {
            return {label: parseInt(price.label.slice(0,2)+price.label.slice(3,5)), price: price.close}
        })
        this.setState({"1D": daily, timeFrame: "1D", tickerSymbol: this.props.tickerSymbol, open: response[0].open})
    }

    renderPrices(response, timeFramePassed){
        debugger
        const data = response.map(price => {
            return {price: price.close, date: price.date, open: price.open, change: price.change, changePercent: price.changePercent}
        })
        this.setState({[timeFramePassed]: data, timeFrame: timeFramePassed, tickerSymbol: this.props.tickerSymbol})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {
                fetchPrices(this.props.tickerSymbol, timeFrame).then(response => this.renderPrices(response, timeFrame))
            }
        }
    }

    render(){
        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="5Y"){
                return <button key={`${key}-id`} onClick={this.updatePrices(key)}>{key}</button>
            }
        })

        return (
            <div>

                <TickerChart 
                tickerSymbol={this.props.tickerSymbol}
                ticker={this.state[this.state.timeFrame]}
                timeFrame={this.state.timeFrame}
                open={this.state.open}
                change={this.state.change}
                changePercent={this.state.changePercent}
                tF={tF}
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