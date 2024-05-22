// Software Developed by Adam Iantorno for Portfolio Website 2024

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from "react-bootstrap";

import "./header.scss";


export default function Header() {
  const [navColor, updateNavbar] = useState(false);

  function scrolling() {
    if (window.scrollY >= 10) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrolling);

  return (
    <Navbar
      fixed='top'
      expand='md'
      variant='dark'
      className={navColor ? "scrollbar" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">ADAM IANTORNO</Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
        ></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Link className='nav-link' to='home' spy={true} smooth={true} offset={5} duration={200}>Home</Link>
            </Nav.Item>

            <Nav.Item>
              <Link className='nav-link' to='about' spy={true} smooth={true} offset={0} duration={400}>About</Link>
            </Nav.Item>

            <Nav.Item>
              <Link className='nav-link' to='experience' spy={true} smooth={true} offset={0} duration={400}>Experience</Link>
            </Nav.Item>

            <Nav.Item>
              <Link className='nav-link' to='projects' spy={true} smooth={true} offset={0} duration={400}>Projects</Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link href={AdamIantornoWebResume}>Resume</Nav.Link>
            </Nav.Item> */}

            <span className='nav-indicator'></span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
