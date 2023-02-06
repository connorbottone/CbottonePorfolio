import React, { useState } from 'react';
import './App.css';
import { Header, Aboutme, Portfolio, Contactme, Footer, Resume } from './component'


function App() {

  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "About" && <Aboutme />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contactme />}
      {currentPage === "Resume" && <Resume />}
      <br></br>
      <Footer />
    </>
  );
}


export default App;
