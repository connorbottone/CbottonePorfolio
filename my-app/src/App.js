import React, { useState } from 'react';
import './styles/test.css';
import { Header, Aboutme, Portfolio, Contactme, Footer, Resume} from '../src/components'
import'../src/styles/background.js'
//setting defult page to Aboutme to render on page load
function App() {

  const [currentPage, setCurrentPage] = useState("Aboutme");

  return (
    <>
  
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div  class="ball">{currentPage === "Aboutme" && <Aboutme setCurrentPage={setCurrentPage} />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contactme" && <Contactme />}
      {currentPage === "Resume" && <Resume />}
      </div>
      <br></br>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}


export default App;
