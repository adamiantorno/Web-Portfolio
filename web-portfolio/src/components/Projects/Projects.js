import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from './ProjectCard';

import APP_SCRIPTS from '../../assets/scripts';

export default function Projects() {
  return (
    <section>
      <Container>
        <Container>
          <Row>
            <Col>
              <h2>What's Cooking in the Kitchen...</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li><Button>Mechanical</Button></li>
                <li><Button>Electrical</Button></li>
                <li><Button>Software</Button></li>
                <li><Button>Other</Button></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard 
                title="Hardware In Loop Testing Fixture"
                description={APP_SCRIPTS.project_hlf_desc}
              />
            </Col>
            <Col>
              <ProjectCard 
                title="Arduino Enclosure"
                description={APP_SCRIPTS.project_ard_desc}
              />
            </Col>
            <Col>
              <ProjectCard 
                title="Quadcopter Powered by Arduino"
                description={APP_SCRIPTS.project_quad_desc}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard 
                title="Sheet Metal Brackets"
                description={APP_SCRIPTS.project_sht_desc}
              />
            </Col>
            <Col>
              <ProjectCard 
                title="Carbon Greenfoot Tracker"
                description={APP_SCRIPTS.project_carb_desc}
              />
            </Col>
            <Col>
              <ProjectCard 
                title="Sensor Diagnostics Algorithm"
                description={APP_SCRIPTS.project_sens_desc}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard 
                title="This Website"
                description={APP_SCRIPTS.project_web_desc}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
