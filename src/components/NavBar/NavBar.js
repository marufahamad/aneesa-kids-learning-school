import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/android-chrome-512x512.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/home"> <img height="40" src={logo} alt="" /> </Navbar.Brand>
                <ul className="d-flex ">
                    <Link to="/home" className="Nav-items">
                        <li>Home</li>
                    </Link>
                    <Link to="/services" className="Nav-items">
                        <li>Services</li>
                    </Link>
                    <Link to="/support" className="Nav-items">
                        <li>Our Supports</li>
                    </Link>
                    <Link to="/about" className="Nav-items">
                        <li>About us</li>
                    </Link>

                </ul>
            </Container>
        </Navbar>
    );
};

export default NavBar;