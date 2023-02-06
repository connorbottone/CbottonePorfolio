import React, { useState } from 'react';

import { Header, Aboutme, Portfolio, Contactme, Footer, Resume} from '../src/components'

//setting defult page to Aboutme to render on page load
function App() {

  const [currentPage, setCurrentPage] = useState("Aboutme");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Aboutme" && <Aboutme />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contactme" && <Contactme />}
      {currentPage === "Resume" && <Resume />}
      
      <Footer />
    </>
  );
}


export default App;
