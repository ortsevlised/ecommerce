import React, {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.styles.scss'
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("The passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch
            (e) {
            console.error(e)
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        value={displayName}
                        name='displayName'
                        label='Username'
                        onChange={this.handleChange}
                        required/>
                    <FormInput
                        type='email'
                        value={email}
                        name='email'
                        label='Email'
                        onChange={this.handleChange}
                        required/>
                    <FormInput
                        type='password'
                        value={password}
                        name='password'
                        label='Password'
                        onChange={this.handleChange}
                        required/>
                    <FormInput
                        type='password'
                        value={confirmPassword}
                        name='confirmPassword'
                        label='Confirm password'
                        onChange={this.handleChange}
                        required/>
                    <CustomButton type='submit'>Submit Form</CustomButton>
                </form>
            </div>)
    }
}

export default SingUp
