import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';

class TickerChart extends React.Component {

    render(){
        let data = this.props.tickerData || [];

        return (
            <div>
                 <LineChart 
                    width={677} 
                    height={250} 
                    data={data} 
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                 >
                     <CartesianGrid />
                    <XAxis dataKey="label" hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip />
                    <Line type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={2}/>
                </LineChart>
            </div>
            )
    }
}

export default TickerChart;