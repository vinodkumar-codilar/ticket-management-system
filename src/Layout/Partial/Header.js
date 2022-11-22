import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import image1 from '../../../src/Assests/Images/Logo.png';


const Header = () => {
  return (
    <Navbar 
    collapseOnSelect
    bg='info'
    variant='dark'
    expand="md"
    >
        <Navbar.Brand>
            <img src= {image1} alt = 'logo' width= "50px"/>
        </Navbar.Brand>
        <Navbar.Toggle
        aria-controls='basic-navbar-nav'/>
        <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Link href='/dashboard'>
                    Dashboard
                </Nav.Link>
                <Nav.Link href='/Tickets'>
                    Tickets
                </Nav.Link>
                <Nav.Link href='/Logout'>
                    Logout
                </Nav.Link>
            </Nav>
        </NavbarCollapse>
    </Navbar>
  )
}

export default Header