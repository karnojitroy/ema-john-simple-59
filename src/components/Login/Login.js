import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import useAuth from '../../hooks/useAuth'
const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h3>Login</h3>

                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>

                <p>New to ema-john?<Link to="/register">Create new account</Link></p>

                <div>---------------Or---------------</div>

                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Signin</button>
            </div>
        </div>
    );
};

export default Login;