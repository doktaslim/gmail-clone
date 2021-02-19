import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../../Firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL 
            }))
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
                    alt="Gmail_logo"
                />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
