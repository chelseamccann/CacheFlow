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
        
        this.handleBuySubmit = this.handleBuySubmit.bind(this);
        this.handleSellSubmit = this.handleSellSubmit.bind(this);
    }

    handleBuySubmit(e){
        e.preventDefault();
        debugger
        this.setState({ buy: true }, () => this.props.executeBuy(this.state) )

        // .success(message => {
        //     this.setState({message: "Sucessful Buy!"})
        // });
    }

    handleSellSubmit(e){
        e.preventDefault();
        debugger
        this.setState({ buy: false})
        this.props.executeBuy(this.state)
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
        
                        <p className="bp share share-two">Buying power</p>
        
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

                        <p className="bp share share-two">Buying power</p>

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