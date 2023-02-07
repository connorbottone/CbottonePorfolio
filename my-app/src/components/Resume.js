import  resume from "../public/resume.pdf";
import React,{useState} from 'react';
import "../styles/resume.css";

const handleDownload = () => {
    window.open(resume);
  };

const Resume = () => {
    return (
        <div className="resume">
         <object data={resume} type="application/pdf" width="1500px" height="700px">
        <p>
          It appears your browser doesn't support PDFs. You can download the
          PDF file{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>
      </object>
      <br />
      <button id="pdf" onClick={handleDownload}>Download PDF</button>
    </div>
    );
}
export default Resume;