import React from 'react';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = { stocks: [] }
    }

    componentDidMount(){
        debugger
        this.props.fetchTickerData(this.props.match.params.tickerSymbol)
        .then(response => response.json())
        .then(stocks => this.setState({ stocks }))
        // .then(data => this.setState({stocks: data}) )
    }

    // renderData(){
    //     if(this.state.stocks){
    //         console.log(this.state.stocks)
    //     }
    // }

    render(){
        const { stocks } = this.state;
        debugger
        if(stocks){
            return <div>{stocks}</div>
        } else {
            return <div></div>
        }
        // debugger
        // return (
        //     <div>
        //         {this.renderData()}
        //     </div>
        //     )
    }
}

export default TickerShow;