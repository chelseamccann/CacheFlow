import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            purchase_price: this.props.close,
            ticker_symbol: this.props.tickerSymbol,
        };
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.executeTransaction(this.state)
        // .success(message => {
        //     debugger
        //     this.setState({message: "Sucessful Buy!"})
        // });
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
        //either use two different forms under content or put conditional inside the handleUpdate
        const cost = this.state.purchase_shares ? `$${parseFloat(this.state.purchase_price * this.state.purchase_shares).toFixed(2)}` : 0
        return (
        <div className="transaction-form">
            <div className="buy-sell-buttons">
                <Tabs tabStuff={[
                    {title:`Buy ${this.props.tickerSymbol}`, content:             <form className="t-form" onSubmit={this.handleSubmit}>

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
        
                        <p className="bp share share-two">Buying power</p>
        
                    </div>
                    </form>}, 

                    {title: `Sell ${this.props.tickerSymbol}`, content:             <form className="t-form" onSubmit={this.handleSubmit}>

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

                <p className="bp share share-two">Buying power</p>

            </div>
            </form>}]} 
                />
            </div>
                {/* <button id="buy" className="" onClick={this.highlightClicked}>Buy {this.props.tickerSymbol}</button> */}
                {/* <button id="sell" className="" onClick={this.highlightClicked}>Sell {this.props.tickerSymbol}</button> */}
            
            {/* <form className="t-form" onSubmit={this.handleSubmit}>

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

                <input type="submit" value="Execute Order" className="execute-button nav-bar-logout review-button"/>

                <p className="bp share share-two">Buying power</p>

            </div>
            </form> */}
        </div>
        )
    }
}

export default TransactionForm;