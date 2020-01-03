import React, { Component } from 'react';
import './Sign-in.styles.scss';
import Custombutton from '../Custom-button/Custom-button.component';
import InputForm from '../Input-Form/Input-form';
import { signInWithGoogle } from '../../Firebase/firebase.utils';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
}

handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({[name] : value})
}
    render() {
        return(
            <div className='sign-in'>
                <h1>I have already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    {/* <label>Email</label> */}
                    <InputForm name='email'
                     type='email' 
                     handleChange={this.handleChange}
                     value={this.state.email}
                     label='email' 
                     required />
                    {/* <label>Password</label> */}
                    <InputForm
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                    <Custombutton type='submit'>
                        Sign In
                    </Custombutton>
                    <Custombutton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </Custombutton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;