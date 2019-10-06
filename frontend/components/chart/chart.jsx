import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';

class Chart extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
         }
    }

    render(){
        debugger

        const data03 = [
            { date: 'Jan 04 2016', price: 105.35 },
            { date: 'Jan 05 2016', price: 102.71 },
            { date: 'Jan 06 2016', price: 100.7 },
            { date: 'Jan 07 2016', price: 96.45 }
        ]
        return (
            <>
            <LineChart
                width={400}
                height={400}
                data={data03}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>

            {/* <Line data={data} /> */}
            <p>{this.props.price}</p>
            <p>{this.props.time}</p>
            </>
            )


            

    }
}

export default Chart;