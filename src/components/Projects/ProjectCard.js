import React, { useState } from 'react';
import { Modal, Button, Col } from 'react-bootstrap';

export default function ProjectCard({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col>
      <button onClick={handleShow} className={"card-main card-" + item.id}>
        <div className="card-img"></div>
        <div className="card-img-hovered"></div>
        <div className="card-info">
          <h1 className="card-title">{item.title}</h1>
          <span className="card-date">{item.date}</span>
        </div>
      </button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" className='modal-90w'>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}
