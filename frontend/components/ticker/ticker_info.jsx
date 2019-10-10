import React from 'react';
import { fetchTickerInfo, fetchTickerStats } from '../../util/ticker_data_api_util';

class TickerInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    componentDidMount(){
        

        fetchTickerInfo(this.props.tickerSymbol).then(response => {
            this.setState(
            {name: response.name, 
                desc: response.short_description, 
                ceo: response.ceo, 
                sector: response.sector, 
                ticker: response.ticker, 
                employees: response.employees.toLocaleString(),
                city: response.hq_address_city,
                state: response.hq_state
            })
        })
        
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
        return (
        <>

        <div className="ticker-info">
        <h1>{this.state.name}</h1>
            <div className="ticker-about">
                <h3>About</h3>
                <p>{this.state.desc}</p>
            </div>

            <div className="ticker-text">
                <div>
                    <h6>CEO</h6>
                    <p>{this.state.ceo}</p>
                </div>
                <div>
                    <h6>Employees</h6>
                    <p>{this.state.employees}</p>
                </div>
                <div>
                    <h6>Headquarters</h6>
                    <p>{this.state.city}, {this.state.state}</p>
                </div>

                <div>
                    <h6>Founded</h6>
                    <p>????</p>
                </div>

                <div>
                    <h6>Market Cap</h6>
                    <p>{this.state.marketcap}</p>
                </div>

                <div>
                    <h6>Price-Earnings Ratio</h6>
                    <p>{this.state.peRatio}</p>
                </div>

                <div>
                    <h6>Dividend Yield</h6>
                    <p>{this.state.dividendYield}</p>
                </div>

                <div>
                    <h6>Average Volume</h6>
                    <p>{this.state.avg30Volume}</p>
                </div>

            </div>
        </div>
        </>
        )
    }

}

export default TickerInfo;