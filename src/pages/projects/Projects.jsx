import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Filter, ProjectCard } from '../../components';
import ProjData from '../../assets/projects/projectdata';

import './projects.scss';

export default function Projects() {
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState('All');

  return (
    <section className="section-page" id="projects">
      <Container>
        <Container fluid>
          <Row>
            <Col>
              <h2 className="section-title">My Projects</h2>
            </Col>
          </Row>
          <Row>
            <Filter
              projects={ProjData}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
          </Row>

          <Row>
            {filtered.map((item) => {
              return (
                <ProjectCard
                  key={item.id}
                  item={item}
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

// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { motion, AnimatePresence } from 'framer-motion';

// import ProjData from '../../assets/projects/projectdata';

// import './projects.scss';

// export default function Projects() {
//   const categories = ['All', 'Mechanical', 'Electrical', 'Software', 'Other'];

//   return (

//   );
// }
