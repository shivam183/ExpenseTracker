import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { RegisterUser } from '../Thunk/register.thunk'
import { useHistory } from 'react-router-dom'
import { getIsRegistered, getError } from '../Selectors/register.selector'

const Register = ({ registerUser, IsRegistered, Error }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    useEffect(() => {
        if (IsRegistered) {
            history.push('/')
        }
    }, [IsRegistered, history])

    const onSubmit = e => {
        e.preventDefault();

        let user = {
            firstName,
            lastName,
            email,
            password
        }

        registerUser(user)
    }

    return (
        <>
            <h3>Register</h3>
            {Error}
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." />
                </div>
                <button className="btn">Register</button>
            </form>
        </>
    )
}

const mapStateToProps = (state) => ({
    IsRegistered: getIsRegistered(state),
    Error: getError(state)
})

const mapDispatchToProps = dispatch => ({
    registerUser: user => dispatch(RegisterUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
