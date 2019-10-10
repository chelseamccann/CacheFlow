import { RECEIVE_TRANSACTION } from '../actions/transaction_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TRANSACTION:
            return Object.assign({}, {[action.transaction.id]: action.transaction})
        default:
            return state;
    }
}