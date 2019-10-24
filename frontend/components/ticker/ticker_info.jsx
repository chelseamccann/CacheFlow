import React from 'react';
import { fetchTickerInfo, fetchTickerStats } from '../../util/ticker_data_api_util';

class TickerInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }


    render(){

        
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