import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTransactions, getLoading, getError } from '../Selectors/transaction.selector'
import { getAllTransactions } from '../Thunk/transaction.thunk'
import Transaction from './Transaction'
import Loader from 'react-loader-spinner';
import { getToken, getID } from '../Selectors/login.selector'

const TransactionList = ({ startLoadingTransactions, isLoading, transactions, userId,token }) => {
    useEffect(() => {
        startLoadingTransactions(token,userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const LoadingMessage = <div>
        <h3>History</h3>
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
    const content = (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
            </ul>
        </>
    )

    return isLoading ? LoadingMessage : content
}

const mapStateToProps = (state) => ({
    isLoading: getLoading(state),
    transactions: getTransactions(state),
    error: getError(state),
    token: getToken(state),
    userId: getID(state)
})

const mapDispatchToProps = dispatch => ({
    startLoadingTransactions: (token,id) => dispatch(getAllTransactions(token,id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
