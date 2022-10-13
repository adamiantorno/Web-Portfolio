import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import APP_STRINGS from './aboutdata';
import aboutme from '../../assets/imgs/aboutmepic.jpg'

export default function About() {

  return (
    <section className="page-section" id="about">
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h2 className="section-title-white">About Me</h2>
            </Col>
          </Row>
          <Row className="bubble justify-content-sm-center">
            <Row className='about-info'>
              <Col className='about-text' md={9}>
                <p>Hi! My name is Adam.</p>
                <p>{APP_STRINGS.about1}</p>
                <p>{APP_STRINGS.about2}</p>
                <p>{APP_STRINGS.about3}</p>
              </Col>
              <Col>
                <Image
                  className="about-pic"
                  rounded={true}
                  src={aboutme}
                  alt="Adam Iantorno Waterloo Portrait"
                />
              </Col>
            </Row>
            <Row className='about-tech'>
              <span>Here are a few technologies I have experience working with:</span>
              <Col>
                <h4>Design</h4>
                <ul className='about-tech-list'>
                  {APP_STRINGS.skillset_design.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
              <Col>
                <h4>Programming</h4>
                <ul>
                  {APP_STRINGS.skillset_prog.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
              <Col>
                <h4>Other</h4>
                <ul>
                  {APP_STRINGS.skillset_other.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
