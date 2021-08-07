import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import Header from '../../components/Header';
import './Register.css'

const Register = () => {
    const history = useHistory();

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleFormSubmitRegister = (event) => {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify(register));
        alert('Registration Successfull');
        history.push('/login');
        setRegister({
            name: '',
            email: '',
            password: ''
        });
    }

    const handleInputRegister = (event) => {
        const value = event.target.value;
        setRegister({
            ...register,
            [event.target.name]: value
        })
    }

    return (
        <div>
            <Header />

            <div className="form-login">
                <Form onSubmit={handleFormSubmitRegister}>
                    <p className="title-form">Form Register</p>
                    <Form.Group controlId="formBasicEmail" className="form-email">
                        <label className="form-label">Name</label>
                        <input className="form-input-name" type="text" onChange={handleInputRegister} value={register.name} name="name" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form-email">
                        <label className="form-label">Email address</label>
                        <input className="form-input" type="email" onChange={handleInputRegister} value={register.email} name="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form-password">
                        <label className="form-label">Password</label>
                        <input className="form-input-password" type="password" onChange={handleInputRegister} value={register.password} name="password" placeholder="Password" required />
                    </Form.Group>

                    <button className="btn-login" type="submit">
                        Register
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Register
