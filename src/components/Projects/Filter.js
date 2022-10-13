import React, { useEffect } from 'react';
import { Col, Button } from 'react-bootstrap';

export default function Filter({categories, projects, setFiltered, activeGenre, setActiveGenre}) {
    
    useEffect(() => {
        if (activeGenre === 0){
            setFiltered(projects);
            return;
        }
        const filtered = projects.filter((project) => 
            project.category_ids.includes(activeGenre)
        );
        console.log(filtered);
        setFiltered(filtered);
    }, [activeGenre, projects, setFiltered]);    

return (
    <Col>
        {categories.map((cat) => {
            return (
                <Button
                    key={cat.id}
                    className={activeGenre === cat.id ? "active" : ""}
                    onClick={() => setActiveGenre(cat.id)}
                >
                    {cat.name}
                </Button>
            );
        })}  
    </Col>
)
}
