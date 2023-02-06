import React, { useState } from 'react';

import { Header, Aboutme, Portfolio, Contactme, Footer, Resume} from '../src/components'


function App() {

  const [currentPage, setCurrentPage] = useState("About");

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
