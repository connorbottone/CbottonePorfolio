import React, { useState } from 'react';
import './styles/background.css';
import { Header, Aboutme, Portfolio, Contactme, Footer, Resume} from '../src/components'

//setting defult page to Aboutme to render on page load
function App() {

  const [currentPage, setCurrentPage] = useState("Aboutme");

  return (
    <>
  
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div id= "background">{currentPage === "Aboutme" && <Aboutme />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contactme" && <Contactme />}
      {currentPage === "Resume" && <Resume />}
      </div>
      <Footer />
    </>
  );
}


export default App;
