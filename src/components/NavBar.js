import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/Kali Icon.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home"> 
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills </Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                    </Nav>

                    <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/kalindu-athapaththu-342a001a9/'><img src={navicon1} alt="LinkedIn" /></a>
                        <a href='https://www.behance.net/kalinduathapat'><img src={navicon3} alt="Behance" /></a>
                        <a href='https://www.facebook.com/your-facebook-profile-url'><img src={navicon2} alt="Facebook" /></a>
                    </div>
                    <button
                        className='vvd'
                        onClick={() => {
                        const whatsappURL =
                            'https://wa.me/94772137638?text=Hello!%20Welcome%20to%20my%20portfolio.%20%0AHow%20Can%20I%20Help%20You%20%3F';
                        window.location.href = whatsappURL;
                        }}>
                        <span>Let's Connect</span>
                    </button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
