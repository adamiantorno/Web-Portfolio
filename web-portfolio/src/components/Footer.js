import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  GrGithub,
  GrLinkedin
} from "react-icons/gr"

import APP_STRINGS from '../assets/strings';

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <h3 className="footer-title">Contact Me</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='footer-socialicons'>
            <a href="https://www.github.com/adamiantorno">
              <GrGithub />
            </a>
            <a href="https://www.linkedin.com/in/adamiantorno">
              <GrLinkedin />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Toronto, ON. Canada</h4>
        </Col>
        <Col>
          <h4>Designed and Built by Adam Iantorno</h4>
        </Col>
        <Col>
          <h4>{APP_STRINGS.email}</h4>
        </Col>
      </Row>
    </Container>
  );
}
