import React from 'react';
import TickerChart from './ticker_chart';
import {fetchTickerData} from '../../util/ticker_data_api_util'

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            tickerData: []
        }
    }

    componentDidMount(){
        debugger
        // let arr = [];
        // let that = this;
        fetchTickerData({symbol: this.props.tickerSymbol, callback: this.renderData})
        // .then(response => { this.renderData(response)

        // let next_page = true;
        // fetchTickerData(this.props.tickerSymbol, next_page)
        // .then(response => { 
        //     debugger
        //     arr.push(response)

        //     while(response.next_page !== null){
        //         return fetchTickerData(that.props.tickerSymbol, response.next_page)

        //     }
        //     that.renderData(arr)

            // if (response.data.next_page === null) {  
            //     debugger
            //     that.renderData(arr)
            // } else {
            //     debugger
            //     return that.props.fetchTickerData(that.props.tickerSymbol, response.data.next_page)
            // }
        // })
        // debugger
    }

    renderData(response){
        debugger
        // INTRINIO
        const tickerData = response.map((price, idx) => {
            return {price: price.last_price, time: price.time}
            // this.setState(
                //     {tickerData: [...this.state.tickerData, 
                //     {time: parseInt(price.time.slice(11, 13)+price.time.slice(14, 16)+price.time.slice(17, 19)), price: price.last_price}]}
                //     )
            })
            this.setState({tickerData: tickerData})

        // IEX
        // response.data.map((price, idx) => {
        //     this.setState(
        //         {tickerData: [...this.state.tickerData, 
        //         {time: parseInt(price.minute.slice(0,2)+price.minute.slice(3)), price: price.close}]}
        //         )
        //     // this.setState({price: [...this.state.price, price.close], time: [...this.state.time, price.minute]})
        // })
    }

    render(){
        debugger
        return (
            <div>
                {console.log(this.state.tickerData)}
                <TickerChart 
                tickerSymbol={this.props.tickerSymbol} 
                tickerData={this.state.tickerData}
                />
            </div>
            )
    }
}

export default TickerShow;