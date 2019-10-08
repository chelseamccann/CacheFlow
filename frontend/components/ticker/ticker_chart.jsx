import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

// const CustomTooltip = ({ active, payload}) => {
//     // let { open, change, percentChange } = this.props
//     debugger
//     // if (active && payload){
//     //     debugger
//     //     return (
//     //         <>
//     //             {/* <div>{Number(open).toLocaleString()}</div> */}
//     //             {/* <div>{Number(percentChange).toLocaleString()}</div> */}
//     //         </>
//     //     )
//     // } else {
//     //     // <div>{Number(open).toLocaleString()}</div>
//     //     return <div>hello</div>
//     // }
// }

class TickerChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            closePrice: null,
            change: null, 
            percentChange: null,
            chartX: null,
            chartY: null
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    // componentDidMount(){
    //     dailyChange();
    // }

    handleMouseOver(e){
        let hoverPrice = e.activePayload[0].payload.price;
        let openPrice = this.props.open;
        let change = hoverPrice - openPrice;
        let dailyPercentChange = (change/hoverPrice)*100
        debugger

        if(e){
            
            this.setState({closePrice: e.activePayload[0].payload.price})
            this.setState({chartX: e.chartX})
            this.setState({chartY: e.chartY})
            
            if(this.props.timeFrame === "1D" || this.props.timeFrame === "5dm" || this.props.timeFrame === "1mm"){
                this.setState({change: change})
                this.setState({percentChange: dailyPercentChange})
            } else {
                debugger
                this.setState({change: e.activePayload[0].payload.change})
                this.setState({percentChange: e.activePayload[0].payload.changePercent})
            }
        }
    }

    // handleMouseOut(e){
    //     dailyChange();
    // }

    // dailyChange(){
    //     let currentChange = this.props.change || (this.props.open - this.props.close)
    //     let currentPercentChange = (currentChange/this.props.open)/100
    //     this.setState({
    //         currentPrice = this.props.close, 
    //         change = currentChange, 
    //         percentChange = currentPercentChange
    //     })
    // }

    render(){
        debugger
        let data = this.props.ticker || [];

        return (
            <div className="ticker-chart block-paddings">
                <h3>{this.state.closePrice}</h3>
                <p>{this.state.change} {this.state.percentChange}</p>
                 <LineChart 
                    width={676} 
                    height={196} 
                    data={data} 
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                    onMouseOver={this.handleMouseOver}
                    // onMouseOut={this.handleMouseOut}
                 >
                    <XAxis dataKey="time" hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip /> 
                    <Line connectNulls type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1}/>
                </LineChart>


                
            </div>
            ) //make callback for the fetch somehow for button?
    }
}


//
export default TickerChart;