import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
                <img src={Logo} alt="" />
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to='/services'>Services</CustomLink>
                    </Nav>
                    <Nav>
                        {user && <CustomLink to={'/appoinment'}>View Appoinment</CustomLink>}
                        {user ? <Link onClick={logOut} to={'/'}>Logout</Link> : <CustomLink to={'/login'}>Login</CustomLink>}
                        {!user && <CustomLink to={'/register'}>Register</CustomLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;