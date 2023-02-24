import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { config } from '../config';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ssoLogin } from '../redux/authReducer';
import { useGoogleLogin } from '@react-oauth/google';
import texts from '../texts';
import AuthApi from '../api/AuthApi';
import { SsoType } from '../consts';

const LoginPage = () => {
    const currentUser = useSelector((state) => state.authReducer.currentUser)
    const dispatch = useDispatch();
    
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: googleResponse => {
            AuthApi.Login(SsoType.Google, '', googleResponse.access_token, '', '').then(response => dispatch(ssoLogin(response)));
        }
    });
    
    const handleFacebookLogin = (fbResponse) => {
        let nameArr = fbResponse.name.split(' ');
        AuthApi.Login(SsoType.Facebook, fbResponse.id, fbResponse.accessToken, nameArr[0], nameArr[1]).then(response => dispatch(ssoLogin(response)));
    };

    if (currentUser && currentUser.isLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <div className='loginDiv'>
            <div className='container'>
                <div className='signInContainer'>
                    <div className='loginForm'>
                        <h1 className='signinHeader'>{texts.general.welcome}</h1>
                        <span className='signInExplanation'>{texts.general.signInExplanation}</span>
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
                                <span className='googleLoginButton' onClick={() => handleGoogleLogin()}>
                                    <FaGoogle className='googleButton' size={40}/>
                                </span>
                            </div>
                        {/* <span> Or sign in using E-Mail Address</span>
                        <label>
                            <input type='email' placeholder='Email'/>
                        </label>
                        <label>
                            <input type='password' placeholder='Password'/>
                        </label>
                        <span className='forgotPassword'>Forgot your password?</span> */}
                        {/* <button className='signIn'>Sign In</button> */}
                        {/* <div className='loaderDiv'>
                            <InfinitySpin className='loaderSpinner' />
                        </div> */}
                    </div>
                </div>
                <div className='overlayContainer'>
                    <div className='overlay'>
                        <div className='createAccountDiv'>
                            <h1>{texts.general.createAccount}</h1>
                            <p>{texts.general.comingSoon}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
