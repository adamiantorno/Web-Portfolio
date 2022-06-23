import React, { useState } from 'react';
import { Modal, Card, Button } from 'react-bootstrap';

export default function ProjectCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <Button onClick={handleShow}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
        <Card.Body>
            <Card.Title className='card'>{props.title}</Card.Title>
        </Card.Body>
        </Card>
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    
  )
}
