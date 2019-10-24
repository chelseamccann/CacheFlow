import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import TransactionForm from '../transactions/transaction_form';
import {fetchPrices, fetchDailyPrices, fetchTickerInfo } from '../../util/ticker_data_api_util'; 
import News from '../news/news';
import { ProtectedRoute } from '../../util/route_utils';

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
            open: null,
            close: null,
            change: 0,
            changePercent: 0
        }
        this.updatePrices = this.updatePrices.bind(this);
    }

    componentDidMount(){
        fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
        this.tickerInfo();
    }

    componentDidUpdate(prevProps){
        if (this.props.tickerSymbol !== prevProps.match.params.tickerSymbol){ 
            fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
            this.tickerInfo();
        }
    }

    renderDaily(response){
        const daily = response.map(price => {
            return {label: price.label, price: price.close}
        })
        this.setState({
            "1D": daily, 
            timeFrame: "1D", 
            tickerSymbol: this.props.tickerSymbol, 
            open: response[0].open, 
            close: response[response.length-1].close,
            change: parseFloat(response[response.length-1].close - response[0].open).toFixed(2),
            changePercent: parseFloat(((response[response.length-1].close - response[0].open)/response[response.length-1].close)*100).toFixed(2)
    })
    }

    renderPrices(response, timeFramePassed){
        const data = response.map(price => {
            debugger
            return {
                price: price.close, 
                // date: price.date, 
                date: timeFramePassed==="3M" || timeFramePassed==="1Y" || timeFramePassed==="5Y"  ? price.date : new Date(Date.parse(`${price.date} ${price.label}`)).toLocaleString('en-US'),
                open: price.open, 
                change: price.change, 
                changePercent: price.changePercent
            }
            debugger
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

    tickerInfo(){
        fetchTickerInfo(this.props.tickerSymbol).then(response => {
            this.setState(
            {name: response.companyName, 
                desc: response.short_description, 
                ceo: response.CEO, 
                employees: response.employees.toLocaleString(),
                city: response.city,
                state: response.state
            })
        })
    }

    render(){
        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="5Y"){
                return <button className="btns" key={`${key}-id`} onClick={this.updatePrices(key)}>{key.slice(0, 2).toUpperCase()}</button>
            }
        })
        if(this.state.timeFrame !== ""){

            return (
                <div className="show-wrap">
                    <div>
                    <div className="chart-wrap"> 
                        <h1 className="company-name">{this.state.name}</h1>
                        <TickerChart 
                        tickerSymbol={this.props.tickerSymbol}
                        ticker={this.state[this.state.timeFrame]}
                        timeFrame={this.state.timeFrame}
                        open={this.state.open}
                        close={this.state.close}
                        change={this.state.change}
                        changePercent={this.state.changePercent}
                        tF={tF}
                        />
                        
                        <div className="time-frame-buttons">{tF}</div>

                    </div>

                    <div className="info-and-transaction-form">
                    <TickerInfo 
                    tickerSymbol={this.props.tickerSymbol} 
                    desc={this.state.desc}
                    ceo={this.state.ceo}
                    employees={this.state.employees}
                    city={this.state.city}
                    state={this.state.state}
                    />
                    <ProtectedRoute exact path="/" component={News}/>
                    </div>

                    </div>
                    <TransactionForm 
                    tickerSymbol={this.props.tickerSymbol} 
                    close={this.state.close}
                    executeTransaction={this.props.executeTransaction}
                    />

                </div>
                )
            } else {
                return <div></div>
            }
        }
}

export default TickerShow;