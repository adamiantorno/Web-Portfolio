import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import APP_STRINGS from '../../assets/strings';

import APP_SCRIPTS from '../../assets/strings';


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
                    strings: APP_SCRIPTS.adjectives,
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
            <p>{APP_STRINGS.about1}</p>
            <p>{APP_STRINGS.about2}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
