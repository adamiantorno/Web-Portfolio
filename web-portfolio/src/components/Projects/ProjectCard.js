import React, { useState } from 'react';
import { Col, Modal, Card, Button } from 'react-bootstrap';

export default function ProjectCard({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
      <Col key={item.id}>
        <button onClick={handleShow}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imgPath} alt="card-img"/>
          <Card.Body>
              <Card.Title className='card'>{item.title}</Card.Title>
          </Card.Body>
          </Card>
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{item.desc}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>  

      
    
  )
}
