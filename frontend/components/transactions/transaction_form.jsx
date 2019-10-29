import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            purchase_price: this.props.close,
            ticker_symbol: this.props.tickerSymbol,
            currentBuyingPower: this.props.currentBuyingPower,
            message: ""
        };
        debugger
        this.handleBuySubmit = this.handleBuySubmit.bind(this);
        this.handleSellSubmit = this.handleSellSubmit.bind(this);
        this.updateShares = this.updateShares.bind(this);
    }

    handleBuySubmit(e){
        e.preventDefault();
        let currentBuyingPower = parseFloat(this.state.currentBuyingPower)
        let currentCost = this.state.purchase_price * this.state.purchase_shares 

        if (currentBuyingPower >= currentCost){
            let tr = { purchase_price: this.state.purchase_price,
                        ticker_symbol: this.state.ticker_symbol,
                        currentBuyingPower: this.state.currentBuyingPower,
                        purchase_shares: this.state.purchase_shares,
                        buy: true}
                        
            this.props.executeBuy(tr).then(response => {
                debugger
                if (Array.isArray(response.transaction)){
                    this.setState({message: response.transaction[0]})
                } else {
                    this.setState({currentBuyingPower: currentBuyingPower - currentCost, message: 'Successfully bought!'})
                }
            })
        } else {
            this.setState({message: 'Not enough buying power.'})
        }
    }

    handleSellSubmit(e){
        e.preventDefault();
        let currentBuyingPower = parseFloat(this.state.currentBuyingPower)
        let currentCost = this.state.purchase_price * this.state.purchase_shares 
        let tr = { purchase_price: this.state.purchase_price,
                        ticker_symbol: this.state.ticker_symbol,
                        currentBuyingPower: this.state.currentBuyingPower,
                        purchase_shares: this.state.purchase_shares,
                        buy: false}
                        
            this.props.executeBuy(tr).then(response => {
                if (Array.isArray(response.transaction)){
                    this.setState({message: response.transaction[0]})
                } else {
                    this.setState({currentBuyingPower: currentBuyingPower + currentCost, message: 'Successfully sold!'})
                }
            })
    }

    updateShares(){
        return e => {
            this.setState({purchase_shares: parseInt(e.target.value) })
        }
    }

    highlightClicked(e){
        e.preventDefault();
        document.getElementById(e.target.id).classList.toggle("bsactive");
    }

    render(){
        debugger
        //buy symbol if buy is clicked, else sell symbol
        //if buy - subtract from buying power and total val, if sell add to
        //show buying power on bottom of form
        
        const cost = this.state.purchase_shares ? `$${parseFloat(this.state.purchase_price * this.state.purchase_shares).toFixed(2)}` : 0
        return (
        <div className="transaction-form">
            <div className="buy-sell-buttons">
                <Tabs tabStuff={[
                    {title:`Buy ${this.props.tickerSymbol}`, content: 
                    
                    <form className="t-form" onSubmit={this.handleBuySubmit}>

                    <div className="buy-sell">
                    
                        <div className="shares">
                            <label className="share" id="shares" >Shares</label>
                            <input 
                            autoComplete="off"
                            className="share share-box"
                            id="shares" 
                            type="number" 
                            value={this.state.purchase_shares} 
                            onChange={this.updateShares()}
                            placeholder="0"
                            />
                        </div>
        
                        <div className="shares">
                            <label className="share share-two">Market Price</label>
                            <p className="share share-two">{`$${parseFloat(this.props.close).toFixed(2)}`}</p>
                        </div>
        
                        <div className="shares">
                            <label className="share share-two">Estimated Cost</label>
                            <p className="share share-two">{cost}</p>
                        </div>
        
                        <input type="submit" value="Buy" className="execute-button nav-bar-logout review-button"/>
        
                        <p className="bp share share-two">Buying power: {this.state.currentBuyingPower}</p>
                        <p>{this.state.message}</p>
        
                    </div>
                    </form>
                    }, 

                    {title: `Sell ${this.props.tickerSymbol}`, content:
                    
                    <form className="t-form" onSubmit={this.handleSellSubmit}>

                    <div className="buy-sell">
                    
                        <div className="shares">
                            <label className="share" id="shares" >Shares</label>
                            <input 
                            autoComplete="off"
                            className="share share-box"
                            id="shares" 
                            type="number" 
                            value={this.state.purchase_shares} 
                            onChange={this.updateShares()}
                            placeholder="0"
                            />
                        </div>

                        <div className="shares">
                            <label className="share share-two">Market Price</label>
                            <p className="share share-two">{`$${parseFloat(this.props.close).toFixed(2)}`}</p>
                        </div>

                        <div className="shares">
                            <label className="share share-two">Estimated Cost</label>
                            <p className="share share-two">{cost}</p>
                        </div>

                        <input type="submit" value="Sell" className="execute-button nav-bar-logout review-button"/>

                        <p className="bp share share-two">Buying power: {this.state.currentBuyingPower}</p>
                        <p>{this.state.message}</p>

                    </div>
                    </form>

                    }]} 
                />
            </div>

        </div>
        )
    }
}

export default TransactionForm;