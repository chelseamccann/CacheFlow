import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';
import PortfolioChart from './portfolio_chart'
import { fetchDailyPrices, fetchPrices } from '../../util/ticker_data_api_util';
import News from '../news/news';
import WatchlistContainer from '../watchlist/watchlist_container'

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
            // "ALL": [],
            fetched: false,
            timeFrame: "1D",
            tickerSymbol: "",
            openValue: null,
            closeValue: null,
            change: 0,
            changePercent: 0,

        }
        
        this.dailyPrices = {}
        this.weeklyPrices ={}
        this.updatePrices = this.updatePrices.bind(this);
        this.dailyVal = this.dailyVal.bind(this);
    }

    componentDidMount(){

        this.props.fetchTickers();
        this.props.fetchTransactions().then(response => {
            this.dailyVal(response) // DAILY PORTFOLIO CALC
        }) 
    }


    dailyVal(response){ // DAILY PORTFOLIO CALC
        let that = this;

        const data = response.transactions.forEach((asset, idx) => {
            if (this.props.tickers[asset.ticker_symbol.toUpperCase()]){
                const createdAt = new Date(Date.parse(`${asset.created_at}`))

                fetchDailyPrices(asset.ticker_symbol).then(prices => {
                    let num_shares = asset.purchase_shares
                    let currentDay = prices[0].date
                    let nullArr = []
                    let lastCost;
                    prices.forEach((close_price, idx) => {
                        const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`))
                        if (idx === prices.length-1){
                            this.setState({lastIdx: idx})
                            let currentMinute = prices[prices.length-1].minute
                            let currentDate = new Date(Date.parse(`${currentDay} ${currentMinute}`))
                            let closeTime = "16:00"
                            let closeDate = new Date(Date.parse(`${currentDay} ${closeTime}`))
                            
                            while (currentDate < closeDate){
                                currentDate = new Date(currentDate.setMinutes(currentDate.getMinutes()+1))
                                nullArr.push({date: currentDate.toLocaleTimeString([], {timeStyle: 'short'}), value: null})
                            }
                        } else if(date > createdAt){// && close_price.close !== null){
                            if (that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})] >= 0 && close_price.close!== null){
                                Math.round(that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})] += (Math.round((close_price.close * num_shares) *1e2)/1e2))
                                lastCost = Math.round((close_price.close * num_shares) *1e2)/1e2
                            } else if (close_price.close === null){
                                if (that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})]){
                                    that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})] += lastCost
                                } else {
                                    that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})] = lastCost + Math.round(this.props.currentBuyingPower) 
                                }
                            } else {
                                let bp = Math.round(this.props.currentBuyingPower)
                                let cost = close_price.close * num_shares
                                that.dailyPrices[date.toLocaleTimeString([], {timeStyle: 'short'})] = Math.round((bp+cost) *1e2)/1e2
                                lastCost = Math.round((cost) *1e2)/1e2
                            }

                        }
                    })
                    if(idx === response.transactions.length - 1){
                        let newArr = []
                        newArr = Object.keys(that.dailyPrices).map((key, idx) => {
                            return {"date": key, "value": that.dailyPrices[key]}
                        }).filter(el => {
                            return el !== undefined
                        }).sort(function (a, b) {
                            let dateA = new Date(currentDay + " " + a.date)
                            let dateB = new Date(currentDay + " " + b.date)
                            if (dateA > dateB) {
                                return 1
                            } else if (dateA < dateB){
                                return -1
                            } else {
                                return 0
                            }
                          })

                        that.setState({
                            portfolioValue: newArr.concat(nullArr), 
                            oldArr: newArr, 
                            fetched: true,
                            color: newArr[1].value < newArr[newArr.length-1].value ? "#21ce99" : "#f45531",
                            colorClass: newArr[1].value < newArr[newArr.length-1].value ? "activeGreen" : "activeRed",
                            
                        })
                    }

                })
            }
        })
    }


    updatePrices(timeFrame){ // CLICKED TIMEFRAME CALC

        if (this.state.timeFrame !== timeFrame && timeFrame !== '1D'){ 

            this.weeklyPrices = {}
            let that = this;
                Object.values(this.props.transactions).forEach((asset, idx) => {

                    if (this.props.tickers[asset.ticker_symbol.toUpperCase()]){
                        const createdAt = new Date(Date.parse(`${asset.created_at}`))

                        fetchPrices(asset.ticker_symbol, timeFrame).then(prices => {
                            let num_shares = asset.purchase_shares
                            let lastCost;

                            prices.forEach(close_price => {
                                const date = close_price.minute ? new Date(Date.parse(`${close_price.date} ${close_price.minute}`)) : new Date(Date.parse(`${close_price.date}`))
                                if(date > createdAt){

                                    if (that.weeklyPrices[date.toLocaleString('en-US')] >= 0 && close_price.close !== null){
                                        Math.round(that.weeklyPrices[date.toLocaleString('en-US')] += (Math.round((close_price.close * num_shares) *1e2)/1e2))
                                        lastCost = Math.round((close_price.close * num_shares) *1e2)/1e2
                                    } else if (close_price.close === null){
                                        if (that.weeklyPrices[date.toLocaleString('en-US')]){
                                            that.weeklyPrices[date.toLocaleString('en-US')] += lastCost
                                        } else {
                                            that.weeklyPrices[date.toLocaleString('en-US')] = lastCost + Math.round(this.props.currentBuyingPower) 
                                        }
                                    } else {
                                        let bp = Math.round(this.props.currentBuyingPower)
                                        let cost = close_price.close * num_shares
                                        that.weeklyPrices[date.toLocaleString('en-US')] = Math.round((bp+cost) *1e2)/1e2
                                        lastCost = Math.round((cost) *1e2)/1e2
                                    }

                                }
                            })

                            
                            if(idx === this.props.transactions.length - 1){
                                const newArr = Object.keys(that.weeklyPrices).map(key => {
                                    return {"date": key, "value": that.weeklyPrices[key]}
                                }).filter(el => {
                                    return el !== undefined
                                }).sort(function (a, b) {
                                    if (Date.parse(a.date) > Date.parse(b.date)) {
                                        return 1
                                    } else if (Date.parse(a.date) < Date.parse(b.date)){
                                        return -1
                                    } else {
                                        return 0
                                    }
                                  })

                                that.setState({
                                    portfolioValue: newArr, 
                                    oldArr: newArr, 
                                    fetched: true,
                                    color: newArr[1].value < newArr[newArr.length-1].value ? "#21ce99" : "#f45531",
                                    colorClass: newArr[1].value < newArr[newArr.length-1].value ? "activeGreen" : "activeRed",
                                })
                    
                            }
                        })
                        .then(this.setState({timeFrame: timeFrame}))
                    }
            })
            
        } else if (this.state.timeFrame !== timeFrame && timeFrame === '1D'){
            
            this.props.fetchTransactions().then(response => {
                this.dailyVal(response)
            }).then(this.setState({timeFrame: timeFrame}))
        }

        
    }


    render(){
        

        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="ALL"){
                // return <button className={`btns ${this.state.timeFrame === key ? 'activeGreen': ''}`} key={`${key}-id`} onClick={() => {this.updatePrices(key)}}>
                return <button className={`btns ${this.state.timeFrame === key ? this.state.colorClass : ''}`} key={`${key}-id`} onClick={() => {this.updatePrices(key)}}>
                            {key.slice(0, 2).toUpperCase()}
                       </button>
            }
        })
        if(this.state.fetched && this.state.oldArr){

            return (
                
                <>
                <div className="chart-and-news-wrap">
                    <div className="chart-wrap"> 

                        <PortfolioChart 
                        portfolioValue={this.state.portfolioValue}
                        oldArr={this.state.oldArr}
                        timeFrame={this.state.timeFrame}
                        lastIdx={this.state.lastIdx}
                        color={this.state.color}
                        />
                        
                        <div className="time-frame-buttons">{tF}</div>
                    </div>
                
                </div>
                </>
                )
        } else { 
            return <div className="lds-spinner chart-load"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
    }
}

export default Portfolio;    