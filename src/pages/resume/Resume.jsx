import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { AdamIantornoWebResume } from '../../assets';

export default function Resume() {
  return (
    <div className="page-section">
      <Container className="bubble">
        <Row>
          <Col>
            <Button>Download</Button>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col sm={6}>
            <Document
              file={AdamIantornoWebResume}
              options={{ workerSrc: '/pdf.worker.js' }}
            >
              <Page pageNumber={1} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
