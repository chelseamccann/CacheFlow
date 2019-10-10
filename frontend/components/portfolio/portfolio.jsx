import React from 'react';
import TickerIndexContainer from '../ticker/ticker_index_container';
import {ProtectedRoute} from '../../util/route_utils';
import PortfolioChart from './portfolio_chart'

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
            timeFrame: "",
            tickerSymbol: "",
            open: null,
            close: null,
            change: 0,
            changePercent: 0,
            portfolioValue: null
        }
        debugger
    }

    componentDidMount(){
        // fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));

        this.props.fetchTransactions().then(results => this.calcVal(results))
        // this.props.fetchTickers().then(results => calcVal(results))
    }

    calcVal(response){
        const data = response.transactions.map(asset => {
            let date = asset.created_at
            let value = asset.purchase_price * asset.purchase_shares
            let pVal = this.state.portfolioValue || 0
            pVal += value
            debugger
            return {pVal, date}
        })
        debugger
        this.setState({portfolioValue: data})
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {
                fetchPrices(this.props.tickerSymbol, timeFrame).then(response => this.renderPrices(response, timeFrame))
            }
        }
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
                        portfolioValue={this.props.portfolioValue}
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