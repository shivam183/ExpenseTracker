export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const addTransaction = transaction => ({
    type: ADD_TRANSACTION,
    payload: { transaction }
})


export const GET_TRANSACTION = 'GET_TRANSACTION'
export const getTransaction = transactions => ({
    type: GET_TRANSACTION,
    payload: { transactions }
})

export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'
export const deleteTransaction = id => ({
    type: DELETE_TRANSACTION,
    payload: id
})

export const TRANSACTION_ERROR = 'TRANSACTION_ERROR'
export const transactionError = error => ({
    type: TRANSACTION_ERROR,
    payload: error
})

export const TRANSACTION_LOADING = 'TRANSACTION_LOADING'
export const transactionLoading = () => ({
    type: TRANSACTION_LOADING
})
