import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
                <img src={Logo} alt="" />
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/services'}>Services</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink to={'/appoinment'}>View Appoinment</CustomLink>
                        <CustomLink to={'/login'}>Login</CustomLink>
                        <CustomLink to={'/register'}>Register</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;