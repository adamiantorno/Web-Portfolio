import { useState, useRef } from 'react';
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";

import ExpData from '../../assets/expdata';

export default function Experience() {

  const [activeExpId, setActiveExpId] = useState(0);
  const experience = ExpData;
  const expRef = useRef('expRef');

  return (
    <section className='page-section' ref={expRef}>
      <Container>
        <Container>
          <Row>
            <Col>
              <h2 className='section-title-white'>Where I've Worked</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className='d-flex justify-content-end'>
              <ButtonGroup vertical>
                {experience.map((item) => {
                  return (
                    <button // no bootstrap button to avoid overwriting styles 
                      key={item.id}
                      onClick={() => setActiveExpId(item.id)}
                      className={activeExpId === item.id ? "job-button-active" : "job-button"}
                    >
                      <h4>{item.company}</h4>
                    </button>
                  );
                })}
                <div className='highlight-exp'>
                  
                </div>
              </ButtonGroup>
            </Col>
            <Col xs={8} className='bubble-exp'>
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
