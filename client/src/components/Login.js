import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../Thunk/login.thunk'
import { useHistory } from 'react-router-dom'
import { getIsUserLoggedIn, getError } from '../Selectors/login.selector'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ authenticate, IsUserLoggedIn, Error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory()

    const notify = () => Error ? toast.error(Error, { position: "top-center" }) : ''

    useEffect(() => {
        if (IsUserLoggedIn) {
            history.push('/tracker')
        }
    }, [IsUserLoggedIn, history])


    const onSubmit = e => {
        e.preventDefault();

        const user = {
            email,
            password
        }
        authenticate(user);
    }
    return (
        <>
            <ToastContainer transition={Slide} />
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password </label>
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." />
                </div>
                <button onClick={notify} className="btn">Login</button>
            </form>
        </>
    )
}

const mapStateToProps = state => ({
    IsUserLoggedIn: getIsUserLoggedIn(state),
    Error: getError(state)
})

const mapDispatchToProps = dispatch => ({
    authenticate: user => dispatch(getUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
