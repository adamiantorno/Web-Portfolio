import React from 'react';
import { Document, Page } from "react-pdf";

import AdamIantorno_Web_Resume from '../assets/files/AdamIantorno_Web_Resume.pdf';

export default function Resume() {

    return (
        <div>
          <Document 
            file={AdamIantorno_Web_Resume}
            options={{ workerSrc: "/pdf.worker.js" }}
            >
                <Page pageNumber={1} />
          </Document>
        </div>
      );
}
