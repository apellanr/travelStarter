import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FB from './facebook';

class LoginForm extends Component {
    submitForm(val) {
        console.log(val);
    }
    
    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label className='form-control-label'>{field.label}</label>
                <input
                    className='form-control'
                    name={field.name}
                    type={field.type}
                    { ...field.input }
                />
                <div className='form-control-feedback'>
                    { field.meta.touched && field.meta.error }
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit((val) => this.submitForm(val))}>
                    <Field
                        name='username'
                        type='text'
                        label='Username'
                        component={this.renderField}
                    />
                    <Field
                        name='password'
                        type='password'
                        label='Password'
                        component={this.renderField}
                    />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
                <br/>
                <FB />
            </div>
        )
    }
}

function validate(val) {
    const errors = {};

    if(!val.username) {
        errors.username = 'Please input your username!'
    }
    if(!val.password || val.password.length < 6) {
        errors.password = 'Please input the correct password!'
    }

    return errors;
}

LoginForm = reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);

export default connect(null)(LoginForm);