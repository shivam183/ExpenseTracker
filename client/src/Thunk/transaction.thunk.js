import { getTransaction, transactionLoading, transactionError, addTransaction,deleteTransaction } from '../Actions/transaction.action'
import axios from 'axios'

export const getAllTransactions = (token,id) => async dispatch => {
    try {
        dispatch(transactionLoading());
        const config = {
            headers: {
                'Authorization': token
            }
        }
        const response = await axios.get(`/api/v1/transactions/${id}`,config)
        dispatch(getTransaction(response.data))
    }
    catch (error) {
        dispatch(transactionError(error.response.data.error))
    }
}

export const addNewTransaction = (transaction,token) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        const body = JSON.stringify(transaction)
        const response = await axios.post('/api/v1/transactions', body, config)
        dispatch(addTransaction(response.data))

    } catch (error) {
        dispatch(transactionError(error.response.data.error))
    }
}

export const deleteOneTransaction = (id,token) => async dispatch => {
    try {
        const config = {
            headers: {
                'Authorization': token
            }
        }
        await axios.delete(`/api/v1/transactions/${id}`,config);
        dispatch(deleteTransaction(id))
    } catch (error) {
        dispatch(transactionError(error.response.data.error))
    }

}