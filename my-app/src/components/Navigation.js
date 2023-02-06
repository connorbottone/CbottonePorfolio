import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
    
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
         
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#About-me"
          onClick={() => handlePageChange('About-me')}
          className={currentPage === 'About-me' ? 'nav-link active' : 'nav-link'}
        >
          Contact/AboutMe
        </a>
      </li>
      </ul>
  );
}

export default Navigation;
