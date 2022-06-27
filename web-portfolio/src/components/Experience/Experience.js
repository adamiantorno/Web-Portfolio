import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

import ExpData from '../../assets/expdata';

export default function Experience() {

  const [activeExpId, setActiveExpId] = useState(0);
  const experience = ExpData;

  return (
    <section className='page-section'>
      <Container>
        <Container>
          <Row>
            <Col>
              <h2 className='section-title-white'>Where I've Worked</h2>
            </Col>
          </Row>
          <Row className='bubble'>
            <Col xs={3}>
              <ButtonGroup vertical>
                {experience.map((item) => {
                  return (
                    <Button 
                      key={item.id}
                      onClick={() => setActiveExpId(item.id)}
                    >
                      {item.company}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </Col>
            <Col xs={9}>
              {experience.map((item) => { 
                return (
                  <Container 
                    key={item.id}
                    className={activeExpId === item.id ? "active-exp" : "inactive-exp"}
                    hidden={activeExpId !== item.id}
                  >
                    <h3>
                      <span>{item.title}</span>
                      <span> @{item.company}</span>
                    </h3>
                    <h4>
                      <span>{item.period}</span>
                    </h4>
                    <ul>
                      {item.desc.map((description) => {
                        return (
                          <li>{description}</li>
                        );
                      })}
                    </ul>
                  </Container>
                )
              })}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
