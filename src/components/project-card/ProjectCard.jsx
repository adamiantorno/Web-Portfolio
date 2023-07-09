import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ProjectCard({ key, item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ scale: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.5 }}
      layout
      key={key}
      className="col-md-4"
    >
      <button
        onClick={handleShow}
        type="button"
        key={key}
        className={`card-main card-${item.id}`}
      >
        <div className="card-img" />
        <div className="card-img-hovered" />
        <div className="card-info">
          <h1 className="card-title">{item.title}</h1>
          <span className="card-date">{item.date}</span>
          <h5 className="card-show">- Show Project -</h5>
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
            <div className="tags">
              {item.skills.map((skill) => (
                <span className="tag italics">{skill}</span>
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
    </motion.div>
  );
}
