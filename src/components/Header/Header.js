import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HashLink } from 'react-router-hash-link';
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
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img width={'75'} src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to={'/home'}>Home</CustomLink>
                        <HashLink style={{ "textDecoration": 'none' }} to="home#services">Services</HashLink>
                    </Nav>
                    <Nav>
                        <CustomLink to={'/blog'}>Blog</CustomLink>
                        <CustomLink to={'/about'}>About</CustomLink>
                        {user ? <Link onClick={logOut} to={'/'}>Logout</Link> : <CustomLink to={'/login'}>Login</CustomLink>}
                        {!user && <CustomLink to={'/register'}>Register</CustomLink>}
                        {user && <Link to={'/'}>Logged in as {user.displayName}</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;