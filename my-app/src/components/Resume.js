import  resume from "../public/resume.pdf";
import React,{useState} from 'react';


const handleDownload = () => {
    window.open(resume);
  };

const Resume = () => {
    return (
        <div className="resume">
         <object data={resume} type="application/pdf" >
        <p>
          It appears your browser doesn't support PDFs. You can download the
          PDF file{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>
      </object>
      <br />
      <button onClick={handleDownload}>Download PDF</button>
    </div>
    );
}
export default Resume;