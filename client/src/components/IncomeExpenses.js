import React  from 'react'
import { connect } from 'react-redux'
import { numberWithCommas } from '../utils/format'
import { getIncome,getExpense } from '../Selectors/transaction.selector'

const IncomeExpenses = ({income,expense}) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    income:getIncome(state),
    expense: getExpense(state)

})

export default connect(mapStateToProps)(IncomeExpenses)
