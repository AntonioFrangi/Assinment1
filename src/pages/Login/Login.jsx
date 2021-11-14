import React from 'react'
import './Login.css';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import firebaseInstance from '../../axios'
require('dotenv').config();

const Login = () => {
    const history = useHistory();
    const key = process.env.REACT_APP_FIREBASE_API_KEY;

    const loginData = (email, password) => {
        const client = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        firebaseInstance.post(`/accounts:signInWithPassword?key=${key}`, client)
            .then(response => {
                localStorage.setItem('app_token', response.data.idToken);
                alert('Login successfuly! now you will continue');
                history.push('/home');
            })
            .catch(() => {
                alert('Invalid credentials');
            })
            
    }

    const goToSignUpPage = () => {
        history.push('/SignUp');
    }

    return (
        <div className="login-container">
            <div className="login-window">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values) => {
                        loginData(values.email, values.password);
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email || values.email.trim() == "") {
                            errors.email = 'Email is required';
                        }
                        if (!values.password || values.password.trim() == "") {
                            errors.password = 'Password is required';
                        }
                        return errors;
                    }}
                >
                    {props => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="example@test.com"
                                    type="email"
                                />
                                {props.errors && props.errors.email ?
                                    <div className="errors-field">
                                        <span>{props.errors.email}</span>
                                    </div>
                                    :
                                    null}
                            </div>


                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" placeholder="Enter your password" type="password" />

                                {props.errors && props.errors.password ?
                                    <div className="errors-field">
                                        <span>{props.errors.password}</span>
                                    </div>
                                    :
                                    null}
                            </div>

                            <div className="actions">
                                <button type="submit">LOGIN</button>
                                <button onClick={goToSignUpPage}>Sign Up</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login;
