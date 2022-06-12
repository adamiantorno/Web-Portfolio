import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

import APP_STRINGS from '../../assets/scripts';
import './landing.scss';

export default function Landing() {
  return (
    <section id="home">
      <Container fluid className="home-section">
        <Container fluid className="home-content">
          <Row>
            <Col>
              <h1>Hi!</h1>
              <div>
                <h2>I'm</h2>
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
    </section>
  );
}
