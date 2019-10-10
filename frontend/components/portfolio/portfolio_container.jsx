import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchTickers } from '../../actions/ticker_actions';

const msp = state => {
    let userId = state.session.id;
    return { currentUser: state.entities.users[userId] }
}

const mdp = dispatch => ({
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchTickers: () => dispatch(fetchTickers())
})

export default connect(msp, mdp)(Portfolio);