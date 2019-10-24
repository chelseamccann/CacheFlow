import React from 'react';
import { fetchTickerInfo, fetchTickerStats } from '../../util/ticker_data_api_util';

class TickerInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    // componentDidMount(){
    //     // this.updateInfo()
    //     this.updateStats()
    // }

    // componentDidUpdate(prevProps){
    //     debugger
    //     if(this.props.tickerSymbol !== prevProps.tickerSymbol){
    //         // this.updateInfo()
    //         this.updateStats()
    //     }
    // }

    // updateInfo(){
    //     fetchTickerInfo(this.props.tickerSymbol).then(response => {
    //         this.setState(
    //         {name: response.companyName, 
    //             desc: response.short_description, 
    //             ceo: response.ceo, 
    //             sector: response.sector, 
    //             ticker: response.ticker, 
    //             employees: response.employees.toLocaleString(),
    //             city: response.hq_address_city,
    //             state: response.hq_state
    //         })
    //     })
    // }

    // updateStats(){
    //     fetchTickerStats(this.props.tickerSymbol).then(res => {
    //         debugger
    //         this.setState({
    //             marketcap: res.marketcap.toLocaleString(),
    //             peRatio: parseFloat(res.peRatio).toFixed(2),
    //             dividendYield: parseFloat(res.dividendYield).toFixed(2),
    //             avg30Volume: res.avg30Volume.toLocaleString()
    //         })
    //     })
    // }


    render(){
        debugger
        return (
        <>

        <div className="ticker-info">
        
            <div className="ticker-about">
                <h3>About</h3>
                <p>{this.props.desc}</p>
            </div>

            <div className="ticker-text">
                <div>
                    <h6>CEO</h6>
                    <p>{this.props.ceo}</p>
                </div>
                <div>
                    <h6>Employees</h6>
                    <p>{this.props.employees}</p>
                </div>
                <div>
                    <h6>Headquarters</h6>
                    <p>{this.props.city}, {this.props.state}</p>
                </div>

                <div>
                    <h6>Founded</h6>
                    <p> - </p>
                </div>

                <div>
                    <h6>Market Cap</h6>
                    <p>{this.props.marketcap}</p>
                </div>

                <div>
                    <h6>Price-Earnings Ratio</h6>
                    <p>{this.props.peRatio}</p>
                </div>

                <div>
                    <h6>Dividend Yield</h6>
                    <p>{this.props.dividendYield}</p>
                </div>

                <div>
                    <h6>Average Volume</h6>
                    <p>{this.props.avg30Volume}</p>
                </div>

            </div>
        </div>
        </>
        )
    }

}

export default TickerInfo;