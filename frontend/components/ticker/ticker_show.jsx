import React from 'react';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { stockName: "" }
    }

    componentDidMount(){
        debugger
        this.props.fetchTickerData(this.props.match.params.tickerSymbol)
        .then(data => this.setState({stocks: data}) )
    }

    renderData(){
        if (this.state.stocks) {
            const stockPrices = this.state.stocks.data.intraday_prices
            debugger
            return stockPrices.map((price, idx) => {
                debugger
                return price.last_price
            })
        }
    }

    render(){


        debugger
        
        return (
            <div>
                {this.renderData()}
                {/* {this.state.stocks ? this.state.stocks.data.companies[0].name : ""} */}
                {/* {this.state.stocks ? this.state.stocks : ""} */}
            </div>
            )
    }
}

export default TickerShow;