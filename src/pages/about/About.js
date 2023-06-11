import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import { about_all } from '../../assets';
import { about_self } from '../../assets';

import './about.scss';


export default function About() {
  
  const skillset_design = ['Solidworkds', 'AutoCAD', 'Adobe Creative Suite', 'MATLAB'];
  const skillset_prog = ['Python', 'Javascript', 'ROS (2 Foxy)', 'C++'];
  const skillset_other = ['Git', 'Rest APIs', 'Arduino', 'Linux (Shell)'];

  const metalsLink = <a 
                      href="https://impossiblemetals.com/" 
                      target="_blank"
                      rel='noreferrer noopener'
                      className='inline-link'
                      >Impossible Metals</a>

  return (
    <section className="section-page" id="about">
      <Container fluid className='py-5'>
        <Container>
          <Row>
            <Col>
              <h2 className="section-title-white">About Me</h2>
            </Col>
          </Row>
          <Row className="bubble justify-content-sm-center">
            <Row className="about-info">
              <Col className="about-text" md={8}>
                <p>
                  Hi! My name is Adam. <span style={{ fontSize: "1.5rem" }}>&#128075;</span>
                </p>
                <p>
                  I'm a third year student studying mechanical engineering at the University of
                  Waterloo, Canada. Outside of school, I'm a self-taught programmer with a passion
                  for learning and expanding my skillset. My goal is to build sustainable and
                  applicable products that push the limits of technology and design.
                </p>
                <p>
                  Most recently, I was working as a Robotics Developer at the start-up{" "}
                  {metalsLink}. We were building autonomous underwater vehicles (AUVs) that harvest
                  metal nodules from the seabed without harming the environment.
                </p>
                <p>I am currently seeking a 4-month internship position for Summer 2023.</p>
              </Col>
              <Col>
                <Image
                  className="about-pic"
                  rounded={true}
                  src={about_self}
                  alt="Adam Iantorno Waterloo Portrait"
                />
              </Col>
            </Row>
            <Row className="about-tech">
              <span>Here are a few technologies I have experience working with:</span>
              <Col>
                <h4>Design</h4>
                <ul className="about-tech-list">
                  {skillset_design.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col>
                <h4>Programming</h4>
                <ul>
                  {skillset_prog.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col>
                <h4>Other</h4>
                <ul>
                  {skillset_other.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <hr></hr>
            <Row className="about-fun">
              <h3>Outside of Academia</h3>
              <Col md={6} className='about-pic-div'>
              <Image 
                className="about-adventure"  
                src={about_all} 
                alt="Adventure" />
              </Col>
              <Col md={6} className="about-text py-3">
                <p> Aside from engineering and projects, I enjoy having fun with my close friends and
                  family, while also spending personal time to recharge.</p>
                <p>
                  I am very invested in
                  both weight-lifting and rock-climbing, and really enjoy going to the gym with my
                  friends in Waterloo. I also enjoy cooking and reading. I am curerntly
                  reading{" "}
                  <span className="italics">
                    The Poppy War by R. F. Kuang
                  </span>{" "}
                  , which is a historical fiction novel that draws its plot and politics from mid-20th-century China.
                </p>
                <p>
                  I am constantly tinkering with this website and adding new features. I hope to
                  add a blog section where I can post about my latest travels, books, and other
                  interesting topics all in one place.
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
