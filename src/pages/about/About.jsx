// Software Developed by Adam Iantorno for Portfolio Website 2024

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import aboutAll from "./assets/aboutAll.png";
import aboutSelf from "./assets/aboutSelf.jpg";

import "./about.scss";


export default function About() {
    const skillsetDesign = [
        'Solidworks',
        'AutoCAD',
        'Adobe Creative Suite',
        'MATLAB',
    ];
    const skillsetProg = ['Python', 'Javascript', 'ROS (1 & 2)', 'C++'];
    const skillsetOther = ['Git', 'Rest APIs', 'Arduino', 'Linux (Shell)'];

    const metalsLink = (
        <a
            href="https://impossiblemetals.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-link"
        >
            Impossible Metals
        </a>
    );

    return (
        <section className="section-page" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title-white">About Me</h2>
                    </Col>
                </Row>
                <Row className="bubble justify-content-sm-center">
                    <Row>
                        <Col className="about-text">
                            <p>
                                Hi! My name is Adam.
                                <span>&#128075;</span>
                            </p>
                            <p>
                                I'm a fourth-year student studying mechanical engineering at the
                                University of Waterloo, Canada. I am a self-taught programmer with
                                a passion for learning and expanding my skillset. My goal is to
                                build sustainable and applicable products that push the limits of
                                technology and design.
                            </p>
                            <p>
                                This past winter, I was working as a Robotics Developer at the
                                start-up {metalsLink}. We were building autonomous underwater
                                vehicles (AUVs) that harvest metal nodules from the seabed without
                                harming the environment.
                            </p>
                            <p>
                                Currently, I am a software engineer at the start-up working to
                                apply machine learning towards the legal industry.
                            </p>
                        </Col>
                        <Col>
                            <Image
                                className="about-pic-self"
                                rounded
                                src={aboutSelf}
                                alt="Adam Iantorno Waterloo Headshot"
                            />
                        </Col>
                    </Row>
                    <hr className="splitter" />
                    <Row className="about-tech">
                        <span>
                            Here are a few technologies I have experience working with:
                        </span>
                        <Col>
                            <h4>Design</h4>
                            <ul>
                                {skillsetDesign.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col>
                            <h4>Controls</h4>
                            <ul>
                                {skillsetProg.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col>
                            <h4>Software</h4>
                            <ul>
                                {skillsetOther.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <hr className="splitter" />
                    <Row>
                        <Row>
                            <Col>
                                <h3 className="section-subtitle">Outside of Academia</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="about-pic-div">
                                <Image
                                    className="about-pic-fun"
                                    rounded
                                    src={aboutAll}
                                    alt="Fun picture"
                                />
                            </Col>
                            <Col className="about-text">
                                <p>
                                    Aside from school and work, I enjoy having fun with my close
                                    friends and family, while also spending personal time to
                                    recharge.
                                </p>
                                <p>
                                    I am very invested in both weight-lighting and rock-climbing,
                                    and really enjoy going to the gym with my friends in Waterloo. I
                                    also enjoy cooking and reading. I am currently reading{' '}
                                    <span className="italics">Outliers by Malcom Gladwell</span>,
                                    which discussing niche and environmental factors that can lead
                                    to high levels of success for individuals.
                                </p>
                                <p>
                                    I am constantly tinkering with this website and adding new
                                    features or updating certain designs.
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Row>
                
            </Container>
        </section>
    )


}