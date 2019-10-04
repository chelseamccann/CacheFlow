import React from 'react';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        debugger
        this.props.fetchTicker(this.props.match.params.tickerId); // front end routes **
    }

    componentDidUpdate(prevProps){
        if (prevProps.ticker.id != this.props.match.params.tickerId){
            this.props.fetchTicker(this.props.match.params.tickerId);
        }
    }

    render(){
        if (!this.props.ticker){
            return (
                <div>
                    Loading..
                </div>
            )
        }
    }
}

export default TickerShow;