import React from 'react';

class TickerShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    // this will be used for the api pull 
    // componentDidMount(){
    // }

    render(){
        return (
            <>
                <br/>
                <br/>
                <h1>{this.props.ticker}</h1>
                <br/>
                <br/>
            </>
            )
    }
}

export default TickerShow;