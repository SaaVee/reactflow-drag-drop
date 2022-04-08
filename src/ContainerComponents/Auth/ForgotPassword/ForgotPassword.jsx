import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../../Providers';
import useApi from "../../../Utilities/rest-util";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AppContext);
    const api = useApi();

    const [credential, setCredential] = useState({
        email: ''
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
            const resp = await api.post('/users/forgot-password', {
                ...credential
            });
            // save token to the store and app context and then redirect user to the dashboard
            setAuth(resp);
            navigate('/dashboard', {
                replace: true
            });
        } catch (error) {
            console.log("eroro whileloggin in ::", error);
        }
    }

    return (
        <div className='forgot-password-wrapper'>
            <div className="forgot-password">
                <header>Forgot Password</header>
                <form className="form-floating" onSubmit={handleFormSubmit} noValidate autoComplete="off">
                    <div class="group">
                        <input className='material' type="email" name="email" value={credential.email} required
                            onChange={handleFieldValueChange}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Your Email</label>
                    </div>
                    <button className="btn btn-submit" type="submit">Submit</button>
                    <br />
                </form >
            </div>
        </div>
    );
};


export default ForgotPassword;