import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { getIsUserLoggedIn } from '../Selectors/login.selector'
const PrivateRoute = ({ component: Component, IsLoggedIn, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            IsLoggedIn ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

const mapStateToProps = state => ({
    IsLoggedIn: getIsUserLoggedIn(state)
})

export default connect(mapStateToProps)(PrivateRoute)