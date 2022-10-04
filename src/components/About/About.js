import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import APP_STRINGS from '../../assets/strings';


export default function About() {
  return (
    <section className="page-section">
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h2 className="section-title-white">About Me</h2>
            </Col>
          </Row>
          <Row className="bubble justify-content-sm-center">
            <Col sm={8}>
              <p>{APP_STRINGS.about1}</p>
              <p>{APP_STRINGS.about2}</p>
              <p>{APP_STRINGS.about3}</p>
              <p>Here are a few technologies I have experience working with:</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
