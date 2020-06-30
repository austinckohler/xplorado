
import React from 'react'
import {Router} from '@reach/router'
import ProfilePage from './ProfilePage'
import PasswordReset from './PasswordReset'
import SignIn from './SignIn'
import SignUp from './SignUp'
// will render either the sign-in/sign-up routes or the profile page, depending on whether the user has been signed into the application


export default function Application() {
    const user = null
    return (
        user ?
        <ProfilePage />
        :
        <Router>
        <SignUp path='signUp' />
        <SignIn path='/' />
        <PasswordReset path='passwordReset' />
        </Router>
    )
}


