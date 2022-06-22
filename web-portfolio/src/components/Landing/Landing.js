import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

import APP_STRINGS from '../../assets/scripts';


export default function Landing() {
  return (
    <section id="home">
      <Container>
        <Container>
          <Row>
            <Col>
              <h1>Adam</h1>
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
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p></p>
            <p></p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
