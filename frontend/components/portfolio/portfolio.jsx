import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';
import PortfolioChart from './portfolio_chart'
import { fetchDailyPrices, fetchPrices } from '../../util/ticker_data_api_util';
import News from '../news/news';

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            "1D": [],
            "5dm": [],
            "1mm": [],
            "3M": [],
            "1Y": [],
            "5Y": [],
            fetched: false,
            timeFrame: "1D",
            tickerSymbol: "",
            openValue: null,
            closeValue: null,
            change: 0,
            changePercent: 0,
            portfolioValue: null
        }
        
        this.dailyPrices = {}
        this.weeklyPrices ={}
        this.updatePrices = this.updatePrices.bind(this);
        this.dailyVal = this.dailyVal.bind(this);
    }

    componentDidMount(){
        this.props.fetchTickers();
        this.props.fetchTransactions().then(response => {
            // this.setState({ transactions: response.transactions })
            this.dailyVal(response)
        }) // DAILY PORTFOLIO CALC

    }

    dailyVal(response){ // DAILY PORTFOLIO CALC
        let that = this;

        const data = response.transactions.forEach((asset, idx) => {
            console.log(!this.props.tickers[asset.ticker_symbol.toUpperCase()])
            if (this.props.tickers[asset.ticker_symbol.toUpperCase()]){
                const createdAt = new Date(Date.parse(`${asset.created_at}`))//.toLocaleString('en-US')

                fetchDailyPrices(asset.ticker_symbol).then(prices => {
                    let num_shares = asset.purchase_shares
                    prices.forEach(close_price => {
                        const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`))//.toLocaleString('en-US')
                        if(date > createdAt && close_price.close !== null){
                            if (that.dailyPrices[date.toLocaleString('en-US')] >= 0){
                                that.dailyPrices[date.toLocaleString('en-US')] += close_price.close * num_shares
                            } else {
                                that.dailyPrices[date.toLocaleString('en-US')] = (close_price.close * num_shares) + parseFloat(this.props.currentBuyingPower)
                            }
                        }
                    })

                    if(idx === response.transactions.length - 1){
                        const newArr = Object.keys(that.dailyPrices).map(key => {
                            return {"date": key, "value": that.dailyPrices[key]}
                        })

                        that.setState({fetched: true, "1D": newArr})
            
                    }

                })
            }
        })
    }

    renderPrices(response, timeFramePassed){ // NEVER CALLED
        this.dailyVal(reponse)
        this.setState({[timeFramePassed]: data, timeFrame: timeFramePassed, tickerSymbol: this.props.tickerSymbol})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){ // CLICKED TIMEFRAME CALC
            this.weeklyPrices = {}
            return e => {
                // let that = this;
                // this.state.transactions


///////////////////////////////////////// OLD //////////////////////////////////////
                let that = this;
                Object.values(this.state.transactions).forEach((asset, idx) => {
                fetchPrices(asset.ticker_symbol, timeFrame).then(price => {
                    let num_shares = asset.purchase_shares
                    price.forEach(close_price => {
                        const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`)).toLocaleString('en-US')
                        if(close_price.close !== null && date !== "Invalid Date")
                        {
                            if (that.weeklyPrices[date] === 0 || that.weeklyPrices[date] > 0){
                                that.weeklyPrices[date] += close_price.close * num_shares
                            } else {
                                that.weeklyPrices[date] = close_price.close * num_shares
                            }
                        }
                    })
                    if(idx === this.state.transactions.length - 1){
                        const newArr = Object.keys(that.weeklyPrices).map(key => {
                            return {"date": key, "value": that.weeklyPrices[key]}
                        })
                        that.setState({fetched: true, "1D": newArr})
                    }
                })
            })
///////////////////////////////////////// OLD //////////////////////////////////////


        }
            
        }
    }


    render(){
        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="ALL"){
                return <button className="btns" key={`${key}-id`} onClick={this.updatePrices(key)}>{key.slice(0, 2).toUpperCase()}</button>
            }
        })

        if(this.state.fetched){
            return (
                <>
                <ProtectedRoute exact path="/" component={TickerIndexContainer}/>
                <div className="chart-and-news-wrap">
                <div className="chart-wrap"> 
                    <PortfolioChart 
                    portfolioValue={this.state["1D"]}
                    tfVal={this.state[this.state.timeFrame]}
                    timeFrame={this.state.timeFrame}
                    // openValue={Math.max(this.state["1D"].open_value)}
                    // change={this.state.change}
                    // changePercent={this.state.changePercent}
                    // tF={tF}
                    />
                    
                    <div className="time-frame-buttons">{tF}</div>
                </div>
                <ProtectedRoute exact path="/" component={News}/>
                </div>
                </>
                )
            } else { 
                return <div> </div>
            }
    }
}

export default Portfolio;    