import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

// const CustomTooltip = ({ active, payload}) => {
//     // let { open, change, percentChange } = this.props
//     if (!active){
//         // <div>{Number(open).toLocaleString()}</div>
//         // <div>{Number(percentChange).toLocaleString()}</div>
//         return <div>hi</div>
//     } else {
//         // <div>{Number(open).toLocaleString()}</div>
//         return <div>hello</div>
//     }
// }

class TickerChart extends React.Component {
      

    render(){
        debugger
        let data = this.props.ticker || [];

        return (
            <div className="ticker-chart block-paddings">
                 <LineChart 
                    width={676} 
                    height={196} 
                    data={data} 
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                 >
                    <XAxis dataKey="time" hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip /> 
                    <Line type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1}/>
                </LineChart>

                
            </div>
            ) //make callback for the fetch somehow for button?
    }
}


//content={<CustomTooltip />}
export default TickerChart;