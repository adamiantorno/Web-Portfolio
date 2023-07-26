import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

import './footer.scss';

const socialLinks = [
  {
    name: 'Github',
    icon: <GrGithub />,
    url: 'https://www.github.com/adamiantorno',
  },
  {
    name: 'LinkedIn',
    icon: <GrLinkedin />,
    url: 'https://www.linkedin.com/in/adamiantorno',
  },
];

export default function Footer() {
  return (
    <Container fluid className="footer-container">
      <Container className="footer-social-links">
        <ul>
          {socialLinks.map(({ name, icon, url }) => (
            <li key={name}>
              <a href={url} aria-label={name}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container fluid className="footer-credits">
        <Row>
          <Col>
            <Row className="credit-text">
              <h3>ADAM IANTORNO</h3>
              <span>
                A versatile engineering student passionate about building
                innovating and sustainable products that push the limits of
                techonology and design
              </span>
            </Row>
          </Col>
          <Col md={2} />
          <Col>
            <Row className="credit-text">
              <h4>CONTACT</h4>
              <span>aiantorno@uwaterloo.ca</span>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <span>
              &copy; Copyright 2023. Designed and Built by Adam Iantorno
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
