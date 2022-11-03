import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

import aboutme from '../../assets/imgs/aboutmepic.jpg';
import about_boat from '../../assets/imgs/about_boat.jpg';
import about_camb from '../../assets/imgs/about_camb.jpg';
import about_climb from '../../assets/imgs/about_climb.png';
import about_ski from '../../assets/imgs/about_ski.jpg'

export default function About() {
  
  const skillset_design = ['Solidworkds', 'AutoCAD', 'Adobe Creative Suite'];
  const skillset_prog = ['Python', 'Javascript', 'ROS (2 Foxy)', 'C++'];
  const skillset_other = ['Git', 'Rest APIs'];

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
                  Currently, I am working as a Robotics Developer (co-op) at the start-up{" "}
                  {metalsLink}. We are building autonomous underwater vehicles (AUVs) that harvest
                  battery metals from the seabed without harming the environment.
                </p>
                <p>I am seeking a 4-month internship position for Summer 2023.</p>
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
              <Col md={6}>
                <Row>
                  <Col sm={3} className='px-0'>
                    <Image
                      className="about-pic-climbing"
                      src={about_climb}
                      alt="Climbing"
                    />
                  </Col>
                  <Col sm={9} className='px-0'>
                    <Image
                      className="about-pic-camb"
                      src={about_camb}
                      alt="Cambodia"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} className='px-0'>
                    <Image 
                      className="about-pic-boat"  
                      src={about_boat} 
                      alt="Boat" />
                  </Col>
                  <Col sm={6} className='px-0'>
                    <Image 
                      className="about-pic-ski"
                      src={about_ski} 
                      alt="Skiing" />
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="about-text">
                <p> Aside from engineering and projects, I enjoy having fun with my close friends and
                  family, while also spending personal time to recharge.</p>
                <p>
                  I have recently gotten into
                  both weight-lifting and rock-climbing and really enjoy going to the gym with
                  friends in waterloo. I also an avid cook, skateboarder, and reader. I am curerntly
                  reading{" "}
                  <span className="italics">
                    Structures or Why Things Fall Down by J. E. Gordon
                  </span>{" "}
                  which is an explanation on the basic dyanmics for ordinary and essential
                  structures of society.
                </p>
                <p>
                  I am cotinuously tinkering with this website and adding new features. I hope to
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
}
