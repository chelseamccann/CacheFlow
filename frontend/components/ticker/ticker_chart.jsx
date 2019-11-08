import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import Odometer from 'react-odometerjs';
import { withRouter } from 'react-router-dom';

class TickerChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tickerSymbol: this.props.tickerSymbol,
            closePrice: this.props.close,
            change: this.props.change, 
            percentChange: this.props.changePercent,
            open: this.props.open,
            chartX: null,
            chartY: null,
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        
    }

    handleMouseOver(e){
        if(e && e.activePayload !== undefined){

            let hoverPrice = e.activePayload[0].payload.price;
            let openPrice = this.state.open;
            let change = hoverPrice - openPrice;
            let dailyPercentChange = (change/hoverPrice)*100

            this.setState({
                closePrice: parseFloat(e.activePayload[0].payload.price).toFixed(2), 
                chartX: e.chartX, 
                chartY: e.chartY,
                change: parseFloat(change.toFixed(2)),
                percentChange: parseFloat(dailyPercentChange).toFixed(2)
            })
        }
    }


    handleMouseOut(e){
        let currentChange = this.props.change || (this.props.open - this.props.close)
        let currentPercentChange = (currentChange/this.props.open)/100
        this.setState({
            closePrice: this.props.close, 
            change: parseFloat(currentChange).toFixed(2), 
            percentChange: parseFloat(currentPercentChange).toFixed(2)
        })
    }

    
    render(){
        
        let data = this.props.ticker || [];
        const label = this.props.timeFrame === "1D" ? "label" : "date";
        if (this.props.mini === true){

            return (
            <>
                <div className="ticker-chart block-paddings mini-chart">
                            
                    {/* <h3>$<Odometer value={this.state.closePrice}/></h3>
                    <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p> */}
                    <LineChart 
                        width={60} 
                        height={30} 
                        data={data}
                    >
                    <XAxis hide={true} dataKey="label"/>
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Line connectNulls type="monotone" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1.2}/>
                    </LineChart>
                </div>

                <div className="mini-close-price">


                    {`$${this.props.close}`}

                </div> 
            </>
            )
        }
        else {

            return (
                <div className="ticker-chart block-paddings">
                    
                    <h3>$<Odometer value={this.state.closePrice}/></h3>
                    <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                    <LineChart 
                        // width={676} 
                        width={646} 
                        height={196} 
                        data={data}
                        margin={{top: 5, right: 10, left: 10, bottom: 5}}
                        onMouseOver={this.handleMouseOver}
                        onMouseLeave={this.handleMouseOut}
                    >
                        <XAxis dataKey={label} hide={true} />
                        <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                        <Tooltip className='tooltip'
                                        contentStyle={{ border: '0', backgroundColor: 'transparent', color: 'grey'}}
                                        formatter={(value, name, props) => { return [""] }}
                                        // position={{ x: this.state.chartX - 50, y: this.state.chartY -10 }}
                                        isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}/> 
                        <Line connectNulls type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1}/>
                    </LineChart>
                </div>
                ) 
            }
    }
}


export default withRouter(TickerChart);