import React, { useState } from 'react';
import './Login.css';

export default function Login(props) {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    
    let passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    let login = (event) => {
        let user = JSON.stringify({
            username: username,
        })
        localStorage.setItem('user', user);
    }
}