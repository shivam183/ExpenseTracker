import React from 'react'
import { connect } from 'react-redux'
import { numberWithCommas } from '../utils/format'
import { getBalance } from '../Selectors/transaction.selector'

const Balance = ({ total }) => {
    const sign = total < 0 ? '-' : '';
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign}${numberWithCommas(Math.abs(total))}</h1>
        </>
    )
}

const mapStateToProps = (state) => ({
    total: getBalance(state)

})

export default connect(mapStateToProps)(Balance)
