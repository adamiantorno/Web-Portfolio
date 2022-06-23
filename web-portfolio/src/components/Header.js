import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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
        className={navColor ? "scrollbar" : "navbar"}
    >
      <Container>
        <Navbar.Brand>ADAM IANTORNO</Navbar.Brand>
        <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
        ></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Nav.Link as={ NavLink } to='/'>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ NavLink } to='/experience'>
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ NavLink } to='/projects'>
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={ NavLink } to='/blog'>
                Blog
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link as={ NavLink } to='/resume'>
                Resume
              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
