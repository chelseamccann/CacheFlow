import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';
import PortfolioChart from './portfolio_chart'
import { fetchDailyPrices } from '../../util/ticker_data_api_util';

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            "1D": {},
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
            changePercent: 0,
            portfolioValue: null
        }
        this.updatePrices = this.updatePrices.bind(this);
    }

    // add an API call to fetch daily prices 
    componentDidMount(){
        // fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
        debugger
        this.props.fetchTransactions().then(response => this.calcVal(response))
        // .then(results => {
        //     debugger
        //     this.calcVal(results)})
        // .then(secondResults => {
        //     debugger
        //     secondResults.map(price => {}
        //     return fetchDailyPrices(secondResults)})
        // .then(thirdResults => this.renderDaily(thirdResults))
    }

    calcVal(response){
        debugger
        const data = response.transactions.map(asset => {
            debugger
            if(this.state["1D"][asset.ticker_symbol] === undefined){
            fetchDailyPrices(asset.ticker_symbol).then(price => {
                let num_shares = asset.purchase_shares
                // price.map(close_price => {

                // })
                Object.freeze(this.state)
                const newState = Object.assign({}, this.state["1D"], {[asset.ticker_symbol]: price})
                debugger
                this.setState({"1D": newState})
            })}
            
            // let date = asset.created_at
            // let value = asset.purchase_price * asset.purchase_shares
            // let pVal = this.state.portfolioValue || 0
            // pVal += value
            // debugger
            // return {pVal, date}
        })
        // debugger
        // this.setState({portfolioValue: data})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {
                fetchPrices(this.props.tickerSymbol, timeFrame).then(response => this.renderPrices(response, timeFrame))
            }
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


    render(){
        debugger
        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="5Y"){
                return <button className="btns" key={`${key}-id`} onClick={this.updatePrices(key)}>{key.slice(0, 2).toUpperCase()}</button>
            }
        })

        if(this.state.portfolioValue !== null){
            return (
                <>
                <ProtectedRoute exact path="/" component={TickerIndexContainer}/>
                <div className="show-wrap">
                    <div>   
                    <div className="chart-wrap"> 
                        <PortfolioChart 
                        portfolioValue={this.state.portfolioValue}
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