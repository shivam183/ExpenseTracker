import React from 'react'
import { connect } from 'react-redux'
import { getIsUserLoggedIn, getName } from '../Selectors/login.selector'
import { logout } from '../Actions/login.action'
import { useHistory, useLocation } from 'react-router-dom'

const Header = ({ IsLoggedIn, Logout, Name }) => {
    let history = useHistory()
    let path = useLocation().pathname
    const onLogout = e => {
        e.preventDefault();
        Logout();
        history.push('/')
    }
    return (
        <>
            <h2>
                Expense Tracker
    {IsLoggedIn ? <button onClick={e => onLogout(e)} >Logout {Name}</button> :
                    (path === '/register' ?
                        <button onClick={e => {
                            e.preventDefault(); history.push('/')
                        }}>Login</button> :
                        <button onClick={e => {
                            e.preventDefault(); history.push('/register')
                        }}>Register</button>)}
            </h2>
        </>

    )
}

const mapStateToProps = state => ({
    IsLoggedIn: getIsUserLoggedIn(state),
    Name: getName(state)
})

const mapDispatchToProps = dispatch => ({
    Logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
