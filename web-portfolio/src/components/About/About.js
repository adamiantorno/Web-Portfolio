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
              <Row>
                <Col>
                  <ul>{APP_STRINGS.skillset_design.foreach((item) => {
                    <li>{item}</li>
                  })}</ul>
                </Col>
                <Col>
                  <ul>{APP_STRINGS.skillset_prog.map((item) => {
                    <li>{item}</li>
                  })}</ul>
                </Col>
                <Col>
                  <ul>{APP_STRINGS.skillset_other.map((item) => {
                    <li>{item}</li>
                  })}</ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
