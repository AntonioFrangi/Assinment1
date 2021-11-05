import React from 'react'
import './SignUp.css';
import { Formik, Field, Form } from 'formik';
import axios from '../axios';
import { useHistory } from 'react-router-dom';

const key = "AIzaSyBTpMytweUHdtaNay5JJAgElRscG1bjCak";


const SignUp = () => {

    const history = useHistory();

    const storeData = (email, password) => {
        const client = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, client)
            .then(response => {
                localStorage.setItem('app_token', response.data.idToken);
                alert('User created successfuly! now you will continue');
                history.push('/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="login-container">
            <div className="login-window">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={async (values) => {
                        storeData(values.email, values.password);
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email || values.email.trim() == "") {
                            errors.email = 'Email is required';
                        }

                        if (!values.password || values.password.trim() == "") {
                            errors.password = 'Password is required';
                        }

                        if (!values.confirmPassword || values.confirmPassword.trim() == "") {
                            errors.confirmPassword = 'Confirm Password is required';
                        }

                        if (values.confirmPassword && values.confirmPassword != values.password) {
                            errors.confirmPassword = 'Password and Confirm Password must match';
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

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" type="password" />

                                {props.errors && props.errors.confirmPassword ?
                                    <div className="errors-field">
                                        <span>{props.errors.confirmPassword}</span>
                                    </div>
                                    :
                                    null}
                            </div>

                            <div className="actions">
                                <button type="submit">SAVE</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp;
