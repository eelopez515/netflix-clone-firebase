import React, { useState } from 'react'
import SignInScreen from './SignInScreen'
import '../Style/LoginScreen.css'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img
                className='loginScreen__logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Login Screen Logo"
                />
                <button
                onClick={() => setSignIn(true)}
                className='loginScreen__button'
                >
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignInScreen />
                ): (
                    <>
                    <h1>Unlimited films, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your memebership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input
                            placeholder='Email' 
                            type="email"/>
                            <button
                            onClick={() => setSignIn(true)}
                            className='loginScreen__getStarted'>
                                Get Started
                            </button>
                        </form>
                    </div> 
                    </> 
                )}
            </div>
        </div>
    )
}

export default LoginScreen
