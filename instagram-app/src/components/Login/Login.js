import React, { useState } from 'react';
import './Login.css';

export default function Login(props) {
    let { updateAuth } = props;
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    
    let passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    let login = (event) => {
        event.preventDefault();
        if (!username || !password)
            return;
        let user = JSON.stringify({
            username: username,
        })
        localStorage.setItem('user', user);
        updateAuth();
    }

    return (
        <div className="login">
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={usernameHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordHandler}
                />
                <input
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    )
}