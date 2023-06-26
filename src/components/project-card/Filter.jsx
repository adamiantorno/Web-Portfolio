import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';

export default function Filter({
  categories,
  projects,
  setFiltered,
  activeGenre,
  setActiveGenre,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category_ids.includes(activeGenre),
    );
    // console.log(filtered);
    setFiltered(filtered);
  }, [activeGenre, projects, setFiltered]);

  return (
    <Col className="filter">
      <span className="filter-title">Filter by</span>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            activeGenre === cat.id ? 'active filter-button' : 'filter-button'
          }
          onClick={() => setActiveGenre(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </Col>
  );
}
