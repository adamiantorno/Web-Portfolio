import { React, useState } from 'react';
import { Container, Row, Col, ButtonGroup, Image } from "react-bootstrap";

import ExpData from '../../assets/experience/expdata';

import './experience.scss';

export default function Experience() {

  const [activeExpId, setActiveExpId] = useState(0);
  const experience = ExpData;

  return (
    <section className="section-page" id="experience">
      <Container className='py-5'>
        <Container>
          <Row>
            <Col>
              <h2 className="section-title-white">Work Experience</h2>
            </Col>
          </Row>
          <Row className='exp-div'>
            <Col md={3} className="d-flex justify-content-end p-0">
              <ButtonGroup className='exp-btn-group'>
                {experience.map((item) => {
                  return (
                    <button // no bootstrap button to avoid overwriting styles
                      key={item.id}
                      onClick={() => setActiveExpId(item.id)}
                      className={
                        activeExpId === item.id
                          ? "exp-button exp-button-active"
                          : "exp-button"
                      }
                    >
                      <h4>{item.company}</h4>
                    </button>
                  );
                })}
                <div
                  className={"exp-highlight exp-h-" + activeExpId}
                ></div>
              </ButtonGroup>
            </Col>
            <Col md={9} className="exp-bubble">
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
                    <Row className='exp-info-row'>
                      <Col className='exp-title' md={9}>
                          <h3>{item.title} <a href={item.link} target="_blank" rel='noreferrer noopener' className='inline-link'>@{item.company}</a></h3>
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
