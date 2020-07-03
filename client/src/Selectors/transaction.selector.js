import { createSelector } from 'reselect'

export const getTransactions = state => state.transactionReducer.transactions
export const getLoading = state => state.transactionReducer.loading
export const getError = state => state.transactionReducer.error

export const getBalance = createSelector(getTransactions,
    (transactions) => {
        const amounts = transactions.map(transaction => transaction.amount);
        return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    })

export const getIncome = createSelector(getTransactions,
    (transactions) => {
        const amounts = transactions.map(transaction => transaction.amount);
        return amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
    })

export const getExpense = createSelector(getTransactions,
    (transactions) => {
        const amounts = transactions.map(transaction => transaction.amount);
        return (
            amounts.filter(item => item < 0)
                .reduce((acc, item) => (acc += item), 0) * -1
        ).toFixed(2);
    })