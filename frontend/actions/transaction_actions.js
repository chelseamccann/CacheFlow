import * as API from "../util/transaction_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
})

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})


export const executeBuy = transaction => dispatch =>  API.createTransaction(transaction)
  .then(transaction => {
    return dispatch(receiveTransaction(transaction))
  }
  );

  export const fetchTransactions = () => dispatch => API.fetchTransactions()
  .then(transactions => (dispatch(receiveTransactions(transactions))))
  