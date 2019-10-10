import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';
import PortfolioChart from './portfolio_chart'
import { fetchDailyPrices, fetchPrices } from '../../util/ticker_data_api_util';

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
            timeFrame: "",
            tickerSymbol: "",
            openValue: null,
            closeValue: null,
            change: 0,
            changePercent: 0,
            portfolioValue: null
        }
        
        this.dailyPrices = {}
        this.updatePrices = this.updatePrices.bind(this);
        this.calcVal = this.calcVal.bind(this);
    }

    componentDidMount(){
        this.props.fetchTransactions().then(response => this.calcVal(response))
    }

    calcVal(response){
        let that = this;
        const data = response.transactions.forEach((asset, idx) => {
            // if(this.state["1D"][asset.ticker_symbol] === undefined){
            fetchDailyPrices(asset.ticker_symbol).then(price => {

                let num_shares = asset.purchase_shares
                price.forEach(close_price => {
                    const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`)).toLocaleString('en-US')
                    if(close_price.close !== null)
                    {
                        if (that.dailyPrices[date] === 0 || that.dailyPrices[date] > 0){
                            that.dailyPrices[date] += close_price.close * num_shares
                        } else {
                            that.dailyPrices[date] = close_price.close * num_shares
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
            
        })
    }

    renderPrices(response, timeFramePassed){
        this.calcVal(reponse)
        this.setState({[timeFramePassed]: data, timeFrame: timeFramePassed, tickerSymbol: this.props.tickerSymbol})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {

                let that = this;
                that.props.fetchTransactions().then(response => response.transactions.forEach((asset, idx) => {
                
                fetchPrices(asset.ticker_symbol, timeFrame).then(price => {

                    let num_shares = asset.purchase_shares
                    price.forEach(close_price => {
                        const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`)).toLocaleString('en-US')
                        if(close_price.close !== null)
                        {
                            if (that.dailyPrices[date] === 0 || that.dailyPrices[date] > 0){
                                that.dailyPrices[date] += close_price.close * num_shares
                            } else {
                                that.dailyPrices[date] = close_price.close * num_shares
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
            }))
        }
            
        }
    }


    render(){
        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="5Y"){
                return <button className="btns" key={`${key}-id`} onClick={this.updatePrices(key)}>{key.slice(0, 2).toUpperCase()}</button>
            }
        })

        if(this.state.fetched){
            return (
                <>
                <ProtectedRoute exact path="/" component={TickerIndexContainer}/>
                <div className="show-wrap">
                    <div>   
                    <div className="chart-wrap"> 
                        <PortfolioChart 
                        portfolioValue={this.state["1D"]}
                        timeFrame={this.state.timeFrame}
                        openValue={Math.max(this.state["1D"].open_value)}
                        // closeValue={this.state.closeValue}
                        change={this.state.change}
                        changePercent={this.state.changePercent}
                        tF={tF}
                        />
                        
                        <div className="time-frame-buttons">{tF}</div>
    
                    </div>
    
                    </div>
                </div>
                </>
                )
            } else {
                return <div></div>
            }
    }
}

export default Portfolio;    