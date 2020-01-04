import React, { Component } from 'react';
import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils';
import FormInput from '../Input-Form/Input-form';
import Custombutton from '../Custom-button/Custom-button.component';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, comfirmPassword } = this.state;
        if(password !== comfirmPassword) {
            alert(`Passwords doesn't match`);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.state({
                displayName: '',
                email: '',
                password: '',
                comfirmPassword: ''
            })

        } catch (error) {

        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value });
    }

    render() {
        const { displayName, email, password, comfirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='comfirmPassword'
                        value={comfirmPassword}
                        onChange={this.handleChange}
                        label='Comfirm Password'
                        required
                    />
                    <Custombutton type='submit' >SIGN UP</Custombutton>
                </form>
            </div>
        )
    }
}

export default SignUp;