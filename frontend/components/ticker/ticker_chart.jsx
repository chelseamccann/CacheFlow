import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
// import Odometer from 'react-odometerjs';


class TickerChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            closePrice: this.props.close,
            change: this.props.change, 
            percentChange: this.props.changePercent,
            chartX: null,
            chartY: null
        }
        debugger
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount(){
        debugger
    }

    handleMouseOver(e){
        if(e && e.activePayload !== undefined){
            let hoverPrice = e.activePayload[0].payload.price;
            let openPrice = this.props.open;
            let change = hoverPrice - openPrice;
            let dailyPercentChange = (change/hoverPrice)*100

            this.setState({closePrice: parseFloat(e.activePayload[0].payload.price).toFixed(2)})
            this.setState({chartX: e.chartX})
            this.setState({chartY: e.chartY}) 
            this.setState({change: parseFloat(change.toFixed(2))})
            this.setState({percentChange: parseFloat(dailyPercentChange).toFixed(2)})
            // if(this.props.timeFrame === "1D" || this.props.timeFrame === "5dm" || this.props.timeFrame === "1mm"){
            //     this.setState({change: parseFloat(change.toFixed(2))})
            //     this.setState({percentChange: parseFloat(dailyPercentChange).toFixed(2)})
            // } else {
            //     debugger
            //     this.setState({change: parseFloat(e.activePayload[0].payload.change).toFixed(2)})
            //     this.setState({percentChange: parseFloat(e.activePayload[0].payload.changePercent).toFixed(2)})
            // }
        }
    }


    handleMouseOut(e){
        let currentChange = this.props.change || (this.props.open - this.props.close)
        let currentPercentChange = (currentChange/this.props.open)/100
        debugger
        this.setState({
            closePrice: this.props.close, 
            change: parseFloat(currentChange).toFixed(2), 
            percentChange: parseFloat(currentPercentChange).toFixed(2)
        })
    }

    render(){
        debugger
        let data = this.props.ticker || [];

        return (
            <div className="ticker-chart block-paddings">
                {/* <Odometer value={this.state.closePrice} format="(.ddd),dd" /> */}

                <h3>{`$${this.state.closePrice}`}</h3>
                <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                 <LineChart 
                    width={676} 
                    height={196} 
                    data={data} 
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOut}
                 >
                    <XAxis dataKey="time" hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip dataKey="time"/> 
                    <Line connectNulls type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1}/>
                </LineChart>
            </div>
            ) 
    }
}


export default TickerChart;


// <link rel="stylesheet" href="odometer-theme-default.css" />