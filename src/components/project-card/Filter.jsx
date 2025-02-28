// Software Developed by Adam Iantorno for Portfolio Website 2024

import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';

const categories = ["All", "Mechanical", "Electrical", "Software", "Other"]

export default function Filter({
    projects, 
    setFiltered, 
    activeGenre, 
    setActiveGenre
}) {
    
    useEffect(() => {
        if (activeGenre === "All") {
            setFiltered(projects);
        } else {
            const filtered = projects.filter((project) => 
                project.category_ids.includes(activeGenre)
            );
            setFiltered(filtered);
        }
    }, [activeGenre, projects, setFiltered]);    

return (
    <Col className="filter">
        {categories.map((cat) => (
            <button
                key={cat}
                type="button"
                className={activeGenre === cat.id ? "filter-button active" : "filter-button"}
                onClick={() => setActiveGenre(cat)}
            >
                {cat}
            </button>
        ))} 
    </Col>
)
}
