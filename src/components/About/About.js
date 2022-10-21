import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutme from '../../assets/imgs/aboutmepic.jpg'

export default function About() {
  
  const skillset_design = ['Solidworkds', 'AutoCAD', 'Adobe Creative Suite'];
  const skillset_prog = ['Python', 'Javascript', 'ROS (2 Foxy)', 'C++'];
  const skillset_other = ['Git', 'Rest APIs'];

  const metalsLInk = <a 
                      href="https://impossiblemetals.com/" 
                      target="_blank"
                      rel='noreferrer noopener'
                      className='inline-link'
                      >Impossible Metals</a>

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
              <Col className='about-text' md={8}>
                <p>Hi! My name is Adam. <span style={{ fontSize: '1.5rem' }}>&#128075;</span></p>
                <p>I'm a third year student studying mechanical engineering at the University of Waterloo, Canada. 
                  Outside of school, I'm a self-taught programmer with a passion for learning and expanding my skillset. 
                  My goal is to build sustainable and applicable products that push the limits of technology and design.</p>
                <p>Currently, I am working as a Robotics Developer (co-op) at the start-up {metalsLInk}.
                  We are building autonomous underwater vehicles (AUVs) that harvest battery metals from the seabed without harming the environment.</p>
                <p>I am seeking a 4-month internship position for Spring 2023.</p>
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
                  {skillset_design.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
              <Col>
                <h4>Programming</h4>
                <ul>
                  {skillset_prog.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
              <Col>
                <h4>Other</h4>
                <ul>
                  {skillset_other.map((item) => (<li>{item}</li>))}
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
