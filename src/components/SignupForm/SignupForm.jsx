import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        }
        catch(err) {
            console.log(err);
        }
    }
    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordCheck);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={this.state.name} name='name' placeholder='Name' onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="email" value={this.state.email} name='email' placeholder='email' onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password" value={this.state.password} name='password' placeholder='Password' onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password" name='passwordCheck' placeholder='Confirm Password' onChange={this.handleChange}/>
                </div>
                
                <button disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>

            </form>
        )
    }
}

export default SignupForm;