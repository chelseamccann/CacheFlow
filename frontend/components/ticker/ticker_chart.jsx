import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

class TickerChart extends React.Component {

    render(){
        debugger
        let data = this.props.tickerDaily || [];
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
            )
    }
}

export default TickerChart;