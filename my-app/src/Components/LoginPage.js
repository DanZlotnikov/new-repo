import React, { useState } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError({});

        if (!email) {
            setError((prevError) => ({
                ...prevError,
                email: "Email is required"
            }));
        }

        if (!password) {
            setError((prevError) => ({
                ...prevError,
                password: "Password is required"
            }));
        }

        if (email && password) {
            // Add your login logic here
        }
    }

    const responseFacebook = (response) => {
        console.log(response);
        setIsLoggedIn(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                    {error.email && <div>{error.email}</div>}
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    {error.password && <div>{error.password}</div>}
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <FacebookLogin socialId="347160866103236"
                language="en_US"
                scope="public_profile,email"
                responseHandler={responseFacebook}
                xfbml={true}
                fields="id,email,name"
                version="v4.0"
                className="facebook-login"
                buttonText="Login With Facebook"/>
            {isLoggedIn ? <div>You are logged in!</div> : null}
        </div>
    );
}

export default LoginPage;
