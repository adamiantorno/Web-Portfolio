import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page } from "react-pdf";

import AdamIantorno_Web_Resume from '../assets/files/AdamIantorno_Web_Resume.pdf';

export default function Resume() {

    return (
        <div className='page-section'>
          <Container className='bubble'>
            <Row>
              <Col>
                <Button>Download</Button>
              </Col>
            </Row>
            <Row className="justify-content-sm-center">
              <Col sm={6}>
                <Document 
                file={AdamIantorno_Web_Resume}
                options={{ workerSrc: "/pdf.worker.js" }}
                >
                    <Page pageNumber={1} />
              </Document>
              </Col>
            </Row>

          </Container>
        </div>
      );
}
