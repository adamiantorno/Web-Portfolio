// Software Developed by Adam Iantorno for Portfolio Website 2024

import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { GrGithub, GrLinkedin } from "react-icons/gr";

import "./footer.scss";


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
        <Container fluid className="footer">
            <Container fluid className="footer-container">            
                <Row>
                    <Col>
                        <Row className="footer-subsection">
                            <h3>ADAM IANTORNO</h3>
                            <span>
                                A versatile engineering student passionate about building innovating and sustainable products that push the limits of technology and design.
                            </span>
                        </Row>
                    </Col>
                    <Col md={2} />
                    <Col>
                        <Row className="footer-subsection">
                            <Col>
                                <h4>CONTACT</h4>
                                <span>adam.iantorno99@gmail.com</span>
                            </Col>
                            <Col>
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
                            </Col>
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