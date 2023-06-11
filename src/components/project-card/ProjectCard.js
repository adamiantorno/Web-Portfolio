import React, { useState } from 'react';
import { Modal, Button, Col } from 'react-bootstrap';


export default function ProjectCard({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={4}>
      <button onClick={handleShow} className={"card-main card-" + item.id}>
        <div className="card-img"></div>
        <div className="card-img-hovered"></div>
        <div className="card-info">
          <h1 className="card-title">{item.title}</h1>
          <span className="card-date">{item.date}</span>
          <h5 className='card-show'>- Show Project -</h5>
        </div>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-70w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{item.title}</h1>
            <div className='tags'>
              {item.skills.map((skill) => (
                <span className='tag italics'>{skill}</span>
              ))}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
