import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { config } from '../config';
import { Navigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { facebookLogin, googleLogin } from '../redux/authReducer';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const LoginPage = () => {
    const currentUser = useSelector((state) => state.authReducer.currentUser)
    const dispatch = useDispatch();
    
    useEffect(() => {
        function start() {
            gapi.client.init({
            clientId: config.googleClientId,
            scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    if (currentUser.isLoggedIn) {
        return <Navigate to="/home" />
    }

    const handleFacebookLogin = (response) => {
        dispatch(facebookLogin(response));
    };

    const handleGoogleLogin = (response) => {
        dispatch(googleLogin(response));
    };

    return (
        <div className='loginDiv'>
            <div className='container'>
                <div className='formContainer signInContainer'>
                    <div className='loginForm'>
                        <h1 className='signinHeader'>Welcome</h1>
                        <div className='socialContainer'>
                        <FacebookLogin
                            appId={config.facebookAppId}
                            callback={handleFacebookLogin}
                            render={(renderProps) => (
                                <span
                                    onClick={renderProps.onClick}
                                    className='facebookLoginButton'
                                    >
                                    <FaFacebook className='facebookButton' size={40}/>
                                </span>
                            )}
                        />
                        <GoogleLogin
                            clientId={config.googleClientId}
                            buttonText=''
                            onSuccess={handleGoogleLogin}
                            onFailure={(response) => {console.log(response);}}
                            cookiePolicy={'single_host_origin'}
                            render={(renderProps) => (
                                <span
                                    onClick={renderProps.onClick}
                                    className='googleLoginButton'
                                    >
                                    <FaGoogle className='googleButton' size={40}/>
                                </span>
                            )}
                        />
                        </div>
                        <span> Or sign in using E-Mail Address</span>
                        <label>
                            <input type='email' placeholder='Email'/>
                        </label>
                        <label>
                            <input type='password' placeholder='Password'/>
                        </label>
                        <span className='forgotPassword'>Forgot your password?</span>
                        <button className='signIn'>Sign In</button>
                    </div>
                </div>
                <div className='overlayContainer'>
                    <div className='overlay'>
                        <div className='createAccountDiv'>
                            <h1>Create Account!</h1>
                            <p>Sign up if you still don't have an account... </p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
