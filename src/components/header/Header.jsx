import React, { useState } from 'react';

import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { AdamIantornoWebResume } from '../../assets';

import './header.scss';

export default function Header() {
  const [navColor, updateNavbar] = useState(false);

  function scrolling() {
    if (window.scrollY >= 10) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrolling);

  return (
    <Navbar
      fixed="top"
      expand="md"
      variant="dark"
      className={navColor ? 'scrollbar' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/">ADAM IANTORNO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                className="nav-link"
                to="home"
                spy
                smooth
                offset={5}
                duration={200}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                className="nav-link"
                to="about"
                spy
                smooth
                offset={0}
                duration={400}
              >
                About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                className="nav-link"
                to="experience"
                spy
                smooth
                offset={0}
                duration={400}
              >
                Experience
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                className="nav-link"
                to="projects"
                spy
                smooth
                offset={0}
                duration={400}
              >
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={AdamIantornoWebResume}>Resume</Nav.Link>
            </Nav.Item>

            <span className="nav-indicator" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
