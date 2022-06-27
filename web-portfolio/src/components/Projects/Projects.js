import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import Filter from './Filter';

import ProjData from '../../assets/projectdata';

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
  }
]

export default function Projects() {

  const project = ProjData;
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  return (
    <section>
      <Container>
        <Container fluid>
          <Row>
            <Col>
              <h2>What's Cooking in the Kitchen...</h2>
            </Col>
          </Row>
          <Row>
            <Filter 
              categories={categories} 
              projects={project} 
              filtered={filtered} 
              setFiltered={setFiltered}
              activeGenre={activeGenre}  
              setActiveGenre={setActiveGenre}
            />
          </Row>
          <Row>
            {filtered.map((item) => {
              return <ProjectCard item={item} />;
            })}
          </Row>
        </Container>
      </Container>
    </section>
  )
}
