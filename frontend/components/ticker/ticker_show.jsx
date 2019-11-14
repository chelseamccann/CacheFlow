import React from 'react';
import TickerChart from './ticker_chart';
import TickerInfo from './ticker_info';
import TransactionForm from '../transactions/transaction_form';
import {fetchPrices, fetchDailyPrices, fetchTickerInfo, fetchTickerStats } from '../../util/ticker_data_api_util'; 
import News from '../news/news';
import { ProtectedRoute } from '../../util/route_utils';
import WatchlistItem from '../watchlist/watchlist_item';
import {fetchAnalystRatings} from '../../util/analyst_api_util';

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
            changePercent: 0,
            dailyDone: false,
            isLoading: true
        }
        this.updatePrices = this.updatePrices.bind(this);
        this.tickerInfo = this.tickerInfo.bind(this);
        this.updateStats = this.updateStats.bind(this);
        this.tickerRating = this.tickerRating.bind(this);
    }

    componentDidMount(){
        fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
        fetchAnalystRatings(this.props.tickerSymbol).then(ratings => { this.tickerRating(ratings) });
        this.tickerInfo();
        this.updateStats();
    }

    componentDidUpdate(prevProps){
        let prev = prevProps.tickerSymbol || prevProps.match.params.tickerSymbol
        if (this.props.tickerSymbol !== prev){
            this.setState({dailyDone: false})
            fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response));
            fetchAnalystRatings(this.props.tickerSymbol).then(ratings => { this.tickerRating(ratings) });
            this.tickerInfo();
            this.updateStats();

        }
    }

    componentWillUnmount(){
        this.setState({dailyDone: false})
    }

    renderDaily(response){
        const daily = response.map(price => {
            return {label: price.label, price: price.close}
        })

        let lastValidIdx = response.length - 1
        while(response[lastValidIdx].close === null){
            lastValidIdx -= 1
        }
        let lastValidClose = response[lastValidIdx].close

        let firstValidIdx = 0
        while(response[firstValidIdx].close === null){
            firstValidIdx += 1
        }
        let firstValidOpen = response[firstValidIdx].open


        let currentMinute = response[lastValidIdx].minute
        let currentDate = new Date(Date.parse(`${response[lastValidIdx].date} ${currentMinute}`))
        let closeTime = "16:00"
        let closeDate = new Date(Date.parse(`${response[lastValidIdx].date} ${closeTime}`))

        while (currentDate < closeDate){
            currentDate = new Date(currentDate.setMinutes(currentDate.getMinutes()+1))
            daily.push({label: currentDate.toLocaleTimeString([], {timeStyle: 'short'}), price: null})
        }

        this.setState({
            "1D": daily, 
            timeFrame: "1D", 
            tickerSymbol: this.props.tickerSymbol, 
            open: firstValidOpen, 
            close: lastValidClose, 
            change: parseFloat(lastValidClose - firstValidOpen).toFixed(2),
            changePercent: parseFloat(((lastValidClose - firstValidOpen)/firstValidOpen)*100).toFixed(2),
            dailyDone: true,
            colorClass: firstValidOpen < lastValidClose ? "activeGreen" : "activeRed",
            color: firstValidOpen < lastValidClose ? "#21ce99" : "#f45531",
            backgroundColor: firstValidOpen < lastValidClose ? "activeGreenBackground" : "activeRedBackground"
             })

    }

    renderPrices(response, timeFramePassed){
        const data = response.map(price => {
            
            return {
                price: price.close, 
                date: timeFramePassed==="3M" || timeFramePassed==="1Y" || timeFramePassed==="5Y"  ? price.date : new Date(Date.parse(`${price.date} ${price.label}`)).toLocaleString('en-US'),
                open: price.open, 
                change: price.change, 
                changePercent: price.changePercent
            }
        })
        
        this.setState({
            [timeFramePassed]: data, 
            timeFrame: timeFramePassed, 
            tickerSymbol: this.props.tickerSymbol, 
            open: response[0].open,
            close: response[response.length-1].close,
            change: response[response.length-1].change,
            changePercent: response[response.length-1].changePercent,
            colorClass: response[0].open < response[response.length-1].close ? "activeGreen" : "activeRed",
            color: response[0].open < response[response.length-1].close ? "#21ce99" : "#f45531",
            backgroundColor: response[0].open < response[response.length-1].close ? "activeGreenBackground" : "activeRedBackground"

        })
    }

    updatePrices(timeFrame){
        if (this.state.timeFrame !== timeFrame){
            return e => {
                timeFrame === "1D" ? fetchDailyPrices(this.props.tickerSymbol).then(response => this.renderDaily(response)) : fetchPrices(this.props.tickerSymbol, timeFrame).then(response => this.renderPrices(response, timeFrame)) 
            }
            
        }
    }

    tickerRating(ratings){
        let rating;
        let netRatings = ratings[0].ratingBuy + ratings[0].ratingSell + ratings[0].ratingHold;
        if (ratings[0].ratingBuy > ratings[0].ratingSell && ratings[0].ratingBuy > ratings[0].ratingHold){
            rating = `${Math.round((ratings[0].ratingBuy / netRatings) *1e2)/1e2 *100}% Buy`
        } else if (ratings[0].ratingSell > ratings[0].ratingBuy && ratings[0].ratingSell > ratings[0].ratingHold){
            rating = `${Math.round((ratings[0].ratingSell / netRatings) *1e2)/1e2 *100}% Sell`
        } else if (ratings[0].ratingHold > ratings[0].ratingBuy && ratings[0].ratingHold > ratings[0].ratingSell){
            rating = `${Math.round((ratings[0].ratingHold / netRatings) *1e2)/1e2 *100}% Hold`
        }
        this.setState({ rating: rating, isLoading: false }) 
    }

    tickerInfo(){
        fetchTickerInfo(this.props.tickerSymbol).then(response => {
            this.setState(
            {name: response.companyName, 
                desc: response.short_description, 
                ceo: response.CEO, 
                employees: response.employees.toLocaleString(),
                city: response.city,
                state: response.state,
                sector: response.sector,
                industry: response.industry
            })
        })
    }


    updateStats(){
        fetchTickerStats(this.props.tickerSymbol).then(res => {
            this.setState({
                marketcap: res.marketcap.toLocaleString(),
                peRatio: parseFloat(res.peRatio).toFixed(2),
                dividendYield: parseFloat(res.dividendYield).toFixed(2),
                avg30Volume: res.avg30Volume.toLocaleString()
            })
        })
    }
    

    render(){


        const tF = Object.keys(this.state).map(key => {
            if (key==="1D" || key==="5dm" || key==="1mm" || key==="3M" || key==="1Y" || key==="5Y"){
                // return <button className={`btns ${this.state.timeFrame === key ? 'active': ''}`} key={`${key}-id`} onClick={this.updatePrices(key)} >{key.slice(0, 2).toUpperCase()}</button>
                return <button className={`btns ${this.state.timeFrame === key ? this.state.colorClass : ''}`} key={`${key}-id`} onClick={this.updatePrices(key)} >{key.slice(0, 2).toUpperCase()}</button>   
            }
        })


        if(this.state.dailyDone === false){
            return <div className="lds-facebook ticker-show-loader"><div></div><div></div><div></div></div>

        } else if(this.props.mini === true){
            
            return (
                <TickerChart 
                mini={this.props.mini}
                oldTicker={this.state.oldTicker}
                tickerSymbol={this.props.tickerSymbol}
                ticker={this.state[this.state.timeFrame]}
                timeFrame={this.state.timeFrame}
                open={this.state.open}
                close={this.state.close}
                change={this.state.change}
                changePercent={this.state.changePercent}
                tF={tF}
                color={this.state.color}
                />
            )
        }
         else if(this.state.timeFrame !== "" && this.state.marketcap && this.state.dailyDone){

            let data = this.state[this.state.timeFrame].slice()
            
            return (
                <div className="show-wrap">
                    <div className="chart-info-wrap">
                    <div className="chart-wrap"> 

                        <div className={`ticker-info-bubbles ${this.state.colorClass}`}>
                            <div className={`bubble ${this.state.backgroundColor}`}>
                                {this.state.sector}
                            </div>
                            <div className={`bubble ${this.state.backgroundColor}`}>
                                {this.state.industry}
                            </div>
                        </div>

                        <div className="bubble rating">{this.state.rating}</div>
                    
                        <h1 className="company-name">{this.state.name}</h1>

                        <TickerChart 
                        mini={this.props.mini}
                        oldTicker={this.state.oldTicker}
                        tickerSymbol={this.props.tickerSymbol}
                        ticker={data}
                        timeFrame={this.state.timeFrame}
                        open={this.state.open}
                        close={this.state.close}
                        change={this.state.change}
                        changePercent={this.state.changePercent}
                        tF={tF}
                        color={this.state.color}
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
                    marketcap={this.state.marketcap}
                    peRatio={this.state.peRatio}
                    dividendYield={this.state.dividendYield}
                    avg30Volume={this.state.avg30Volume}
                    sector={this.state.sector}
                    />
                    <ProtectedRoute exact path="/" component={News} show={true}/>
                    </div>

                    </div>
                    <div className="sidebar">
                    <TransactionForm 
                    tickerSymbol={this.props.tickerSymbol} 
                    close={this.state.close}
                    executeBuy={this.props.executeBuy}
                    currentBuyingPower={this.props.currentBuyingPower}
                    fetchTicker={this.props.fetchTicker}
                    colorClass={this.state.colorClass}
                    backgroundColor={this.state.backgroundColor}
                    />

                    <WatchlistItem
                    tickerSymbol={this.props.tickerSymbol}
                    fetchTickers={this.props.fetchTickers}
                    colorClass={this.state.colorClass}
                    />
                    </div>
                </div>
                )
            } else {
                return (
                    
                    <WatchlistItem
                    tickerSymbol={this.props.tickerSymbol}
                    colorClass={this.state.colorClass}
                    />
                    )
            }
        }
}

export default TickerShow;