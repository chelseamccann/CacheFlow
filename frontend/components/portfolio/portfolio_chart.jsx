import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import Odometer from 'react-odometerjs';

class PortfolioChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            closeValue: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value).toFixed(2),
            change: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value).toFixed(2),
            percentChange: (parseFloat((this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value)/this.props.oldArr[0].value)*100).toFixed(2),
            timeFrame: this.props.timeFrame,
            oldArr: this.props.oldArr,
            portfolioValue: this.props.portfolioValue
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount(){
        this.setState({
            closeValue: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value).toFixed(2),
            change: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value).toFixed(2),
            percentChange: parseFloat(((this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value)/this.props.oldArr[0].value)*100).toFixed(2),
            timeFrame: this.props.timeFrame
        })
    }

    componentDidUpdate(){
        if(this.state.timeFrame !== this.props.timeFrame){

            this.setState({
                timeFrame: this.props.timeFrame,
                change: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value).toFixed(2),
                percentChange: parseFloat(((this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value)/this.props.oldArr[0].value)*100).toFixed(2),
            })

        }
    }

    handleMouseOver(e){
        if(e && e.activePayload !== undefined){
            let hoverValue = e.activePayload[0].payload.value;
            let openValue = this.props.oldArr[0].value;
            let change = hoverValue - openValue;
            let dailyPercentChange = (change/hoverValue)*100

            this.setState({closeValue: hoverValue, 
                chartX: e.chartX,
                chartY: e.chartY,
                change: parseFloat(change.toFixed(2)),
                percentChange: parseFloat(dailyPercentChange).toFixed(2)
            })
        }
    }


    handleMouseOut(e){
        let currentChange = this.props.oldArr[this.props.oldArr.length-1].value - this.props.oldArr[0].value
        let currentPercentChange = (currentChange/this.props.oldArr[this.props.oldArr.length-1].value)*100
        this.setState({
            closeValue: parseFloat(this.props.oldArr[this.props.oldArr.length-1].value).toFixed(2), 
            change: parseFloat(currentChange).toFixed(2), 
            percentChange: parseFloat(currentPercentChange).toFixed(2)
        })
    }

    render(){


        if(this.state.timeFrame === "1D"){

            return (
                <div className="ticker-chart block-paddings">
                    
                    <h3>$<Odometer value={this.state.closeValue}/></h3>
                    <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                    <LineChart 
                        // width={676} 
                        width={646} 
                        height={196} 
                        data={this.props.portfolioValue}
                        margin={{top: 5, right: 10, left: 10, bottom: 5}}
                        onMouseOver={this.handleMouseOver}   
                        onMouseLeave={this.handleMouseOut}
                    >
                        <XAxis dataKey={"date"} hide={true} /> 
                        {/* domain={[0, 400]} allowDataOverflow={false} */}
                        <YAxis hide={true} domain={['dataMin'-200, 'dataMax'+200]}/>
                        <Tooltip className='tooltip'
                                        contentStyle={{ border: '0', backgroundColor: 'transparent', color: 'grey'}}
                                        formatter={(value, name, props) => { return [""] }}
                                        // position={{ x: this.state.chartX - 5000, y: this.state.chartY -1000 }}
                                        isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}/> 
                        <Line connectNulls type="monotone" dataKey="value" dot={false} stroke="#21ce99" strokeWidth={1}/>
                    </LineChart>
                </div>
            )
        } else {
            return (
                <div className="ticker-chart block-paddings">
                    
                    <h3>$<Odometer value={this.state.closeValue}/></h3>
                    <p>{`$${this.state.change}`} {`(${this.state.percentChange}%)`}</p>

                    <LineChart 
                        // width={676} 
                        width={646} 
                        height={196} 
                        data={this.props.portfolioValue}
                        margin={{top: 5, right: 10, left: 10, bottom: 5}}
                        onMouseOver={this.handleMouseOver}   
                        onMouseLeave={this.handleMouseOut}
                    >
                        <XAxis dataKey={"date"} hide={true} /> 
                        {/* domain={[0, 390]} allowDataOverflow={false} */}
                        <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                        <Tooltip className='tooltip'
                                        contentStyle={{ border: '0', backgroundColor: 'transparent', color: 'grey'}}
                                        formatter={(value, name, props) => { return [""] }}
                                        // position={{ x: this.state.chartX - 5000, y: this.state.chartY -1000 }}
                                        isAnimationActive={false} cursor={{ stroke: "Gainsboro", strokeWidth: 1.5 }}/> 
                        <Line connectNulls type="monotone" dataKey="value" dot={false} stroke="#21ce99" strokeWidth={1}/>
                    </LineChart>
                </div>
            )
        }
    }
}


export default PortfolioChart;