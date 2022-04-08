import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../../../Providers';
import useApi from "../../../Utilities/rest-util";
import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AppContext);
    const api = useApi();

    const [credential, setCredential] = useState({
        email: '',
        password: ''
    });

    const handleFieldValueChange = (e) => {

        setCredential({
            ...credential,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // const resp = await api.post('/users/login', {
            //     ...credential
            // });
            const resp = {
                token: 'hello'
            }
            // save token to the store and app context and then redirect user to the dashboard
            setAuth(resp);
            navigate('/dashboard', {
                replace: true
            });
            console.log(resp)
        } catch (error) {
            console.log("error whileloggin in ::", error);
        }
    }

    return (
        <div className='login-wrapper'>
            <div className="login">
                <header>Login</header>
                <form className="form-floating" onSubmit={handleFormSubmit} noValidate autoComplete="off">
                    <div class="group">
                        <input className='material' type="email" name="email" value={credential.email} required
                            onChange={handleFieldValueChange}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Your Email</label>
                    </div>
                    <div class="group">
                        <input className='material' type="password" name="password" value={credential.password} required
                            onChange={handleFieldValueChange}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                    </div>
                    <button className="btn btn-submit" type="submit">Submit</button>
                    <br />
                    <Link to="/auth/forgot-password" className='forgot-password'>Forgot Password</Link>
                    <br />
                    <Link to="/auth/register" className='register'>I'd like to register</Link>
                    <br />
                </form >
            </div>
        </div>
    );
};

export default Login;
