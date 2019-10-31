import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS } from '../actions/transaction_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TRANSACTION:
            return Object.assign({}, state, {[action.transaction.id]: action.transaction})
        case RECEIVE_TRANSACTIONS:
            return action.transactions
        default:
            return state;
    }
}