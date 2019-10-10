import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import Odometer from 'react-odometerjs';

class PortfolioChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            closeValue: this.props.portfolioValue[0].closeValue,
            change: this.props.change, 
            percentChange: this.props.changePercent,
        }
        debugger
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(e){
        if(e && e.activePayload !== undefined){
            debugger
            let hoverValue = e.activePayload[0].payload.value;
            let openValue = this.props.openValue;
            let change = hoverValue - openValue;
            let dailyPercentChange = (change/hoverValue)*100
            this.setState({closeValue: hoverValue})
            this.setState({chartX: e.chartX})
            this.setState({chartY: e.chartY}) 
            this.setState({change: parseFloat(change.toFixed(2))})
            this.setState({percentChange: parseFloat(dailyPercentChange).toFixed(2)})
        }
    }


    handleMouseOut(e){
        let currentChange = this.props.change || (this.props.open - this.props.close)
        let currentPercentChange = (currentChange/this.props.open)/100
        this.setState({
            closeValue: this.props.closeValue, 
            change: parseFloat(currentChange).toFixed(2), 
            percentChange: parseFloat(currentPercentChange).toFixed(2)
        })
    }

    render(){
        let data = Object.values(this.props.portfolioValue) || [];
        // const label = this.props.timeFrame === "1D" ? "label" : "date";

        // let odometer = this.state.hoverValue || this.state.open_value
        return (
            <div className="ticker-chart block-paddings">
                
                <h3>$<Odometer value={this.state.closeValue}/></h3>
                <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                 <LineChart 
                    width={676} 
                    height={196} 
                    data={data}
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                    onMouseOver={this.handleMouseOver}   
                    // onMouseLeave={this.handleMouseOut}
                 >
                    <XAxis dataKey={"date"} hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip className='tooltip'
                                    contentStyle={{ border: '0', backgroundColor: 'transparent', color: 'grey'}}
                                    formatter={(value, name, props) => { return [""] }}
                                    // position={{ x: this.state.chartX - 50, y: this.state.chartY -10 }}
                                    isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}/> 
                    <Line connectNulls type="linear" dataKey="value" dot={false} stroke="#21ce99" strokeWidth={1}/>
                </LineChart>
            </div>
            ) 
    }
}


export default PortfolioChart;