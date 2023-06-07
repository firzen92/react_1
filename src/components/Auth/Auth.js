import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Form, redirect } from 'react-router-dom'

import classes from './Auth.module.scss';


const authReducer = (state, action) => {
    // console.log(first)
    if(action.type === 'EMAIL_CHANGE') {
        return {
            value: state.value,
            isValid: state.value.includes('@')
        }
    } else if(action.type === 'PASSWORD_CHANGE') {
        return {
            value: state.value,
            isValid: state.value.length > 6
        }
    }
}

const Auth = () => {

    const [email, dispatchEmail] = useReducer(authReducer, {value: '', isValid: false});
    const [password, dispatchPassword] = useReducer(authReducer, {value: '', isValid: false});

    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {

        console.log('eventlistener added');
        emailRef.current.addEventListener('value-changed', (e) => {
            console.log('value changed in email');
            dispatchEmail({type: 'EMAIL_CHANGE'});
        })
    
        passwordRef.current.addEventListener('value-changed', (e) => {
            console.log('value changed in password');
            dispatchPassword({type: 'PASSWORD_CHANGE'});
        })
    }, []);


    const submitHandler = () => {
        // e.preventDefault();

        localStorage.setItem('auth', 'joker');

        redirect('/dashboard');
    }

  return (
    <div className={classes.container}>
    <h3>Sign In To Your Account</h3>
    <Form>
        <div className={classes['form-content']}>
            <label htmlFor="email">Email</label>
            <coral-input placeholder="Email" type="email" ref={emailRef} id="email" value={email.value}></coral-input>
        </div>

        <div className={classes['form-content']}>
            <label htmlFor="password">Password</label>
            <coral-input placeholder="Password" type="password" ref={passwordRef} id="password" value={password.value}></coral-input>
        </div>
        <coral-button onClick={submitHandler}>Sign In</coral-button>
    </Form>
    </div>
  )
}

export default Auth