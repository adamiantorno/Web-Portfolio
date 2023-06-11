import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './footer.scss';


export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <Row className="footer-text">
            <h3>ADAM IANTORNO</h3>
            <span>
              A versatile engineering student passionate about building innovating and sustainable
              products that push the limits of techonology and design
            </span>
          </Row>
        </Col>
        <Col md={2}></Col>
        <Col>
          <Row className="footer-text">
            <h4>CONTACT</h4>
            <span>aiantorno@uwaterloo.ca</span>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <span>&copy; Copyright 2023. Designed and Built by Adam Iantorno</span>
        </Col>
      </Row>
    </Container>
  );
};
