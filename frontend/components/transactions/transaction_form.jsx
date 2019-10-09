import React from 'react';

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cost: this.props.close
        };
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    updateShares(){
        return e => {
            this.setState({shares: parseInt(e.target.value) ? parseInt(e.target.value) : "", cost: e.target.value * this.props.close})
        }
    }

    render(){
        //buy symbol if buy is clicked, else sell symbol
        //if buy - subtract from buying power and total val, if sell add to
        //show buying power on bottom of form?
        return (
        <div className="transaction-form">
            <button className="drop-down-button nav-bar-logout buy-sell-buttons" >Buy {this.props.tickerSymbol}</button>
            <button className="drop-down-button nav-bar-logout buy-sell-buttons" >Sell {this.props.tickerSymbol}</button>
            
            <form className="t-form" onSubmit={this.handleSubmit}>

                <div >
                    <label id="shares">Shares</label>
                    <input 
                    id="shares" 
                    type="text" 
                    value={this.state.shares} 
                    onChange={this.updateShares('shares')}
                    placeholder="0"
                    />
                </div>

                <div>
                    <label>Market Price</label>
                    <p>{`$${parseFloat(this.props.close).toFixed(2)}`}</p>
                </div>

                <div>
                    <label>Estimated Cost</label>
                    <p>{`$${parseFloat(this.state.cost).toFixed(2)}`}</p>
                </div>

                <input type="submit" value="Execute Order" className=" nav-bar-logout review-button"/>
            </form>
        </div>
        )
    }
}

export default TransactionForm;