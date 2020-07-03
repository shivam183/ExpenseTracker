import React from 'react'
import { connect } from 'react-redux'
import { deleteOneTransaction } from '../Thunk/transaction.thunk'
import { numberWithCommas } from '../utils/format'
import { getToken } from '../Selectors/login.selector'

const Transaction = ({transaction,deleteTransaction,token}) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id,token)} className="delete-btn">x</button>
        </li>
    )
}

const mapStateToProps=state=>({
    token:getToken(state)
})

const mapDispatchToProps = dispatch=>({

    deleteTransaction: (id,token) =>dispatch(deleteOneTransaction(id,token))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
