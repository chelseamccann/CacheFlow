import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Scatter, ScatterChart, ZAxis } from 'recharts';

class TickerChart extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = { 
    //         // data: this.props.tickerData,
    //         list: [
    //             { x: 10, y: 30 },
    //             { x: 30, y: 200 },
    //             { x: 45, y: 100 },
    //             { x: 50, y: 400 },
    //             { x: 70, y: 150 },
    //             { x: 100, y: 250 }
    //           ]
    //      }
    // }


    render(){
        debugger
        // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
        //                 {name: 'Page B', uv: 400, pv: 2400, amt: 1000},
        //                 {name: 'Page C', uv: 400, pv: 2400, amt: 800}];

        let data = this.props.tickerData || [];
        
        return (
            <>
            <div>
            {/* <ScatterChart
            isAnimationActive={false}
            width={600}
            height={400}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
                <CartesianGrid />
                {/* <XAxis type="number" dataKey={"time"} name="stature" unit="EST" />
                <YAxis type="number" dataKey={"price"} name="weight" unit="$" /> */}
                {/* <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
                <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
                <ZAxis range={[100]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter name="AAPL" data={list} fill="#8884d8" line shape="circle" />
            </ScatterChart> */} 

        {/* <LineChart width={600} height={300} data={data}>
            <Line type="linear" dataKey="uv" stroke="#8884d8" />
            {/* <CartesianGrid stroke="#ccc" /> */}
            {/* <XAxis dataKey="name" />
            <YAxis />
        </LineChart> */} 

                    {/* isAnimationActive={false}  */}
                 <LineChart 
                    width={677} 
                    height={250} 
                    data={data} 
                    margin={{top: 5, right: 3, left: 0, bottom: 5}}
                 >
                    <XAxis dataKey="label" hide={true} />
                    <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
                    <Tooltip />
                    <Line type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={2}/>
                </LineChart>
            </div>

            </>
            )


            

    }
}

export default TickerChart;