import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  GrGithub,
  GrLinkedin,
  GrDocumentPdf
} from "react-icons/gr"

import APP_STRINGS from '../assets/scripts';

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Contact Me</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>
              <a href='https://www.github.com/adamiantorno'>
                <GrGithub />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/adamiantorno'>
                <GrLinkedin />
              </a>
            </li>
            <li>
              <a href=''>
                <GrDocumentPdf />
              </a>
            </li>
          </ul>
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
  )
}
