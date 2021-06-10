import React from 'react';
import {InputLabel, Button, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const LoginForm = () => {
    return (
        <div className="login-form">
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" aria-describedby="my-helper-text" />
        </FormControl>
            <Button variant="contained" color="primary">
                Login
            </Button>
        <Button variant="contained" color="default">
            Sign-Up
        </Button>
        </div>
    )
}

export default LoginForm;