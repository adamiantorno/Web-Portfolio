import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import APP_STRINGS from '../../assets/strings';

export default function Landing() {
  return (
    <section id="home">
      <Container fluid className='home-bg'>
        <Container>
          <Row>
            <Col className='name-title'>
              <h1 className='name'>Adam</h1>
              <h1 className='name'>Iantorno</h1>
              <div>
              <Typewriter
                  options={{
                    strings: APP_STRINGS.adjectives,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='page-section'>
        <Container className='bubble'>
          <Row>
            <Col>
              <h2 className='section-title'>About Me</h2>
            </Col>
          </Row>
          <Row className='justify-content-sm-center'>
            <Col sm={8}>
              <p>{APP_STRINGS.about1}</p>
              <p>{APP_STRINGS.about2}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
