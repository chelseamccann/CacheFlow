import React from 'react';

class TickerIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        debugger
        this.props.fetchTickers();
    }

    render(){

        if (!this.props.tickers){
            return (
                <div>
                    Loading..
                </div>
            )
        }
        // const tickers = this.props.tickers.map(ticker => {
        //     return <li>{ticker}</li>
        // })

        // return(
        //     <ul>
        //         {tickers}
        //     </ul>
        // )
    }
}

export default TickerIndex;