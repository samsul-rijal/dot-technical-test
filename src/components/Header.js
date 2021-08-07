import React from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="header">
                <Nav className="mr-auto menu">
                    <Link to="/" className="link-header">Movies</Link>
                </Nav>

                <Form inline>
                    <Link to="/register" className="link-header">Register</Link>
                    <Link to="/login" className="link-header">Login</Link>
                </Form>

            </Navbar>
        </div>
    )
}

export default Header
