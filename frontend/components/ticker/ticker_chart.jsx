import React from 'react';
// import { LineChart, Line } from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CustomTooltip } from 'recharts';

class TickerChart extends React.Component {

    CustomTooltip = ({ active, payload}) => {
        // let { open, change, percentChange } = this.props
        if (!active){
            // <div>{Number(open).toLocaleString()}</div>
            // <div>{Number(percentChange).toLocaleString()}</div>
            <div>hi</div>
        } else {
            // <div>{Number(open).toLocaleString()}</div>
            <div>hello</div>
        }
    }
      

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
                    <Tooltip content={<CustomTooltip />}/>
                    <Line type="linear" dataKey="price" dot={false} stroke="#21ce99" strokeWidth={1}/>
                </LineChart>

                
                <button onClick={}>1D</button>
            </div>
            ) //make callback for the fetch somehow for button?
    }
}


// const CustomTooltip = ({ active, payload, label }) => {
//     if (active) {
//       return (
//         <div className="custom-tooltip">
//           {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
//           {/* <p className="intro">{getIntroOfPage(label)}</p> */}
//           {/* <p className="desc">Anything you want can be displayed here.</p> */}
//         </div>
//       );
//     }
  
//     return null;
// };

export default TickerChart;