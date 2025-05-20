import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from "../assets/68008917a4c1bef400fb035c_Screenshot 2025-04-17 at 12.52.19 AM.png";


const Header = () => {
  return (
    <Navbar expand="lg" bg="white" className="py-3 shadow-sm sticky-nav">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#features" className="nav-link-custom">Features</Nav.Link>
            <Nav.Link href="#products" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#blog" className="nav-link-custom">Blog</Nav.Link>

            {/* Contact Us Button */}
            <button className="contact-btn">
              Contact Us
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;