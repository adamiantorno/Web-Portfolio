import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import Filter from './Filter';

import ProjData from './projectdata';

const categories = [
  {
    "id": 0,
    "name": "All"
  },
  {
    "id": 10,
    "name": "Mechanical"
  },
  {
    "id": 20,
    "name": "Electrical"
  },
  {
    "id": 30,
    "name": "Software"
  },
  {
    "id": 40,
    "name": "Other"
  }
]

export default function Projects() {

  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  return (
    <section className="section-page" id="projects">
      <Container className="py-5">
        <Container fluid>
          <Row>
            <Col>
              <h2 className="section-title-white">My Recent Works</h2>
            </Col>
          </Row>
          <Row className='project-filter'>
            <Filter
              categories={categories}
              projects={ProjData}
              filtered={filtered}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
          </Row>
          <Row>
            {filtered.map((item) => {
              return (
                <ProjectCard
                  item={item}
                  categories={categories}
                  className="project-card"
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </section>
  );
}
