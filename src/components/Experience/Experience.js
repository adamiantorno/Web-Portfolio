import { React, useState } from 'react';
import { Container, Row, Col, ButtonGroup, Image } from "react-bootstrap";

import ExpData from './expdata';

export default function Experience() {

  const [activeExpId, setActiveExpId] = useState(0);
  const experience = ExpData;
  const highlightHeight = '57px';

  return (
    <section className="exp-section" id="experience">
      <Container className='filler'>
        <Container>
          <Row>
            <Col>
              <h2 className="section-title-white">Work Experience</h2>
            </Col>
          </Row>
          <Row className='exp-div'>
            <Col xs={4} className="d-flex justify-content-end p-0">
              <ButtonGroup vertical>
                {experience.map((item) => {
                  return (
                    <button // no bootstrap button to avoid overwriting styles
                      key={item.id}
                      onClick={() => setActiveExpId(item.id)}
                      className={
                        activeExpId === item.id
                          ? "job-button-active"
                          : "job-button"
                      }
                    >
                      <h4>{item.company}</h4>
                    </button>
                  );
                })}
                <div
                  className="highlight-exp"
                  style={{
                    transform: `translateY(calc(${activeExpId}*${highlightHeight}))`,
                  }}
                ></div>
              </ButtonGroup>
            </Col>
            <Col xs={8} className="bubble-exp">
              {experience.map((item) => {
                return (
                  <Container
                    key={item.id}
                    className={
                      activeExpId === item.id
                        ? "exp-desc exp-active"
                        : "exp-desc exp-inactive"
                    }
                    aria-hidden={activeExpId !== item.id}
                    hidden={activeExpId !== item.id}
                  >
                    <Row>
                      <Col className='exp-title' md={9}>
                          <h4>{item.title} <a href={item.link} target="_blank" rel='noreferrer noopener' className='inline-link'>@{item.company}</a></h4>
                          <span className='exp-period'>{item.period}</span>
                      </Col>
                      <Col>
                        <Image
                          className={'exp-logo logo-' + item.company}
                          src={item.img}
                          alt={item.company + "company logo"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <ul className='exp-list'>
                          {item.desc.map((description) => {
                            return <li className='exp-item'>{description}</li>;
                          })}
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
