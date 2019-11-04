import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchTickers } from '../../actions/ticker_actions';

const msp = state => {
    let userId = state.session.id;

    const tickers = {}
    Object.values(state.entities.tickers).forEach(el => {
        if (el.num_shares !== 0){
            tickers[el.symbol] = el.num_shares
        }
    })

    return { 
        currentUser: state.entities.users[userId],
        currentBuyingPower: state.entities.users[userId].buying_power,
        tickers: tickers,//Object.values(state.entities.tickers),
        transactions: Object.values(state.entities.transactions)
    }
}

const mdp = dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchTickers: () => dispatch(fetchTickers())
})

export default connect(msp, mdp)(Portfolio);