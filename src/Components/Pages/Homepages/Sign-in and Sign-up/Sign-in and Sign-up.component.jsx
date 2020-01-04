import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../../Sign-in/Sign-in';
import SignUp from '../../../Sign-up/Sign-up.component';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignUp;