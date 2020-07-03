import { ADD_TRANSACTION, GET_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_ERROR, TRANSACTION_LOADING } from '../Actions/transaction.action'

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const transactions = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TRANSACTION: {
            return {
                ...state,
                transactions: [...state.transactions, payload.transaction.data]
            }
        }
        case GET_TRANSACTION: {
            return {
                ...state,
                loading: false,
                transactions: payload.transactions.data
            }
        }
        case DELETE_TRANSACTION: {
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== payload)
            }
        }
        case TRANSACTION_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case TRANSACTION_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state
    }
}