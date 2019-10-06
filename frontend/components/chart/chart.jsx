import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';

class Chart extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            data: this.props.tickerData
         }
    }


    render(){
        debugger
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

        
        return (
            <>
            <div>
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
				{/* <LineChart
                    isAnimationActive={false} 
                    width={730}
                    height={250}
					data={this.state.data}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Legend />
                    <Line type="monotone" dataKey="time" stroke="#ff7300" yAxisId={0} />
                    <Line type="monotone" dataKey="price" stroke="#387908" yAxisId={1} />
				</LineChart> */}
            </div>

            </>
            )


            

    }
}

export default Chart;