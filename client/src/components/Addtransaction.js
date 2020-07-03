import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewTransaction } from '../Thunk/transaction.thunk'
import { getToken, getID } from '../Selectors/login.selector'

const Addtransaction = ({ AddTransaction,token,userId }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)


    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            text,
            amount: +amount,
            userId
        }
        AddTransaction(newTransaction,token)
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
const mapStateToProps = state => ({
    token: getToken(state),
    userId:getID(state)
})

const mapDispatchToProps = dispatch => ({
    AddTransaction: (transaction,token) => dispatch(addNewTransaction(transaction,token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Addtransaction)
