import * as API from "../util/transaction_api_util";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";


export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
})


export const executeTransaction = transaction => dispatch =>  API.createTransaction(transaction)
  .then(transaction => dispatch(receiveTransaction(transaction))
  );