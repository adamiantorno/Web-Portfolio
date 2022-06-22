import React from 'react';
import Card from 'react-bootstrap/Card';

import APP_SCRIPTS from '../../assets/scripts';

export default function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    </Card>
  )
}
