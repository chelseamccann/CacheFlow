import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs';

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            purchase_price: this.props.close,
            ticker_symbol: this.props.tickerSymbol,
            currentBuyingPower: this.props.currentBuyingPower,
            currentTickerNumShares: 0,
            message: ""
        };

        this.handleBuySubmit = this.handleBuySubmit.bind(this);
        this.handleSellSubmit = this.handleSellSubmit.bind(this);
        this.updateShares = this.updateShares.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchTicker(this.state.ticker_symbol).then(response => { 
            this.setState({currentTickerNumShares: parseInt(response.ticker.num_shares)})
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.tickerSymbol !== prevProps.tickerSymbol){
            this.props.fetchTicker(this.props.tickerSymbol).then(response => { 
                this.setState({currentTickerNumShares: parseInt(response.ticker.num_shares) || 0})
            })
        }
    }

    handleBuySubmit(e){
        e.preventDefault();
        let currentBuyingPower = parseFloat(this.state.currentBuyingPower).toFixed(2)
        let currentCost = this.state.purchase_price * this.state.purchase_shares 
        if (this.state.purchase_shares < 0 || this.state.purchase_shares === 0 || this.state.purchase_shares === undefined){
            this.setState({message: 'Please enter a valid number of shares.'})
        }
        else if (currentBuyingPower >= currentCost){
            let tr = { purchase_price: this.state.purchase_price,
                        ticker_symbol: this.state.ticker_symbol,
                        currentBuyingPower: this.state.currentBuyingPower,
                        purchase_shares: this.state.purchase_shares,
                        buy: true}
            
            this.setState({buy: true})
            this.props.executeBuy(tr).then(response => {
                if (Array.isArray(response.transaction)){
                    this.setState({message: response.transaction[0]})
                } else {
                    this.setState({currentBuyingPower: currentBuyingPower - currentCost, message: 'Successfully bought!', purchase_shares: '', currentTickerNumShares: this.state.currentTickerNumShares + this.state.purchase_shares})
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
            this.setState({buy: false})     
            this.props.executeBuy(tr).then(response => {
                if (this.state.purchase_shares < 0 || this.state.purchase_shares === 0 || this.state.purchase_shares === undefined){
                    this.setState({message: 'Please enter a valid number of shares.'})
                } else if (Array.isArray(response.transaction)){
                    this.setState({message: response.transaction[0]})
                } else {
                    this.setState({currentBuyingPower: currentBuyingPower + currentCost, message: 'Successfully sold!', purchase_shares: '', currentTickerNumShares: this.state.currentTickerNumShares - this.state.purchase_shares})
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
        //buy symbol if buy is clicked, else sell symbol
        //if buy - subtract from buying power and total val, if sell add to
        //show buying power on bottom of form
        
        const cost = this.state.purchase_shares ? `$${parseFloat(this.state.purchase_price * this.state.purchase_shares).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` : `$${parseFloat(0).toFixed(2)}`
        return (
        <div className="transaction-form">
            <div className="buy-sell-buttons">
                <Tabs colorClass={this.props.colorClass} tabStuff={[
                    {title:`Buy ${this.props.tickerSymbol.toUpperCase()}`, content: 
                    
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
                            <label className={`share share-two ${this.props.colorClass}`}>Market Price</label>
                            <p className="share share-two">{`$${parseFloat(this.props.close).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</p>
                        </div>
        
                        <div className="shares">
                            <label className="share share-two">Estimated Cost</label>
                            <p className="share share-two">{cost}</p>
                        </div>
        
                        <input type="submit" value="Buy" className={`execute-button nav-bar-logout review-button ${this.props.backgroundColor}button`}/>
        
                        <p className={`bp share share-two ${this.props.colorClass}`}>Buying power: ${parseFloat(this.state.currentBuyingPower).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        <p className="transaction-message">{this.state.message}</p>
        
                    </div>
                    </form>
                    }, 

                    {title: `Sell ${this.props.tickerSymbol.toUpperCase()}`, content:
                    
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
                            <label className={`share share-two ${this.props.colorClass}`}>Market Price</label>
                            <p className="share share-two">{`$${parseFloat(this.props.close).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</p>
                        </div>

                        <div className="shares">
                            <label className="share share-two">Estimated Cost</label>
                            <p className="share share-two">{cost}</p>
                        </div>

                        <input type="submit" value="Sell" className={`execute-button nav-bar-logout review-button ${this.props.backgroundColor}button`}/>

                        <p className={`bp share share-two ${this.props.colorClass}`}>{`${this.state.currentTickerNumShares} shares available`}</p> {/* CHANGE TO SHARES HELD */}
                        <p className="transaction-message">{this.state.message}</p>

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