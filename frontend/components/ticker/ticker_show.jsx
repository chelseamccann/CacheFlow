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
        if(this.state.stocks){
            // console.log(this.state.stocks.data)
            return Object.values(this.state.stocks.data.companies).map(stock => {
                if (this.props.tickerSymbol === stock.ticker) { this.stockName = stock.name }   
            })
        }
    }

    render(){
        
        debugger
        return (
            <div>
                {this.renderData()}
                {this.state.stocks ? this.state.stocks.symbol : ""}
            </div>
            )
    }
}

export default TickerShow;