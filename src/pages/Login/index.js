import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import Header from '../../components/Header';
import './Login.css'

const Auth = () => {
    const history = useHistory();

    const [login, setLogin] = useState({ email: '', password: '' });

    const handleFormSubmitLogin = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.email === login.email && user.password === login.password) {
            alert('login success');
            history.push('/movies');
            setLogin({ email: '', password: '' });
        } else {
            alert('Email or Pasword dont match');
        }
    }

    const handleInputLogin = (event) => {
        const value = event.target.value;
        setLogin({
            ...login,
            [event.target.name]: value
        })
    }

    return (
        <div>
            <Header />

            <div className="form-login">
                <Form onSubmit={handleFormSubmitLogin}>
                    <p className="title-form">Form Login</p>
                    <Form.Group controlId="formBasicEmail" className="form-email">
                        <Form.Label className="form-label">Email address</Form.Label>
                        <input className="form-input" type="email" onChange={handleInputLogin} value={login.email} name="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form-password">
                        <Form.Label className="form-label">Password</Form.Label>
                        <input className="form-input-password" type="password" onChange={handleInputLogin} value={login.password} name="password" placeholder="Password" required />
                    </Form.Group>

                    <button className="btn-login" type="submit">
                        Login
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Auth
