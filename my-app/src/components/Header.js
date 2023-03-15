import React from 'react';
import '../styles/header.css';
const style = {
    img:{
      width: '1%',
      height: '1%',
      paddingLeft: '2%',
      
    
    }}


const page = ["Aboutme", "Portfolio", "Contactme", "Resume"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="header">
    
            <div className="nav">
                {page.map((page) => (
                    
                    <div  id="nav-page"
                        className={currentPage === page ? "navActive" : "nav"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </div>
                ))}        <a className='test' href='https://github.com/connorbottone?tab=repositories'><svg style={style.img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path  fill="#0366d6"d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  
  </svg></a>
  <a className='test' href='https://my.indeed.com/p/connorb-movm7b2'>
  <svg style={style.img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#00A9E0" d="M471.1,227.5v-36.8h-70.5v36.8H471.1z M471.1,295.3v-70.5h-70.5v70.5H471.1z M471.1,359.8v-36.8h-70.5v36.8H471.1z M200.5,359.8h70.5v-36.8h-70.5V359.8z M471.1,0H40.9C18.3,0,0,18.3,0,40.9v430.3C0,493.7,18.3,512,40.9,512h430.3c22.6,0,40.9-18.3,40.9-40.9V40.9C512,18.3,493.7,0,471.1,0z M200.5,71.4v71.4h-70.5V71.4H200.5z M200.5,143.7v71.4h-70.5v-71.4H200.5z M471.1,430.3H40.9V40.9h430.3V430.3z M471.1,287.7H300.6v-70.5h170.5V287.7z M471.1,223.3H300.6v-36.8h170.5V223.3z"/>
  </svg>
</a>
<a className='test' href='https://www.linkedin.com/in/connor-bottone/'>
<svg style={style.img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#0077B5" d="M472.2 0H39.8C17.8 0 0 17.8 0 39.8v432.4c0 22 17.8 39.8 39.8 39.8h432.4c22 0 39.8-17.8 39.8-39.8V39.8c0-22-17.8-39.8-39.8-39.8zM152.5 416.1H84.5V198.9h68v217.2zM117.5 169.7c-22.4 0-40.6-18.2-40.6-40.6 0-22.4 18.2-40.6 40.6-40.6s40.6 18.2 40.6 40.6c0 22.4-18.2 40.6-40.6 40.6zM416.1 416.1h-67.9v-117c0-27.5-23.5-50-51.9-50 -28.4 0-51.9 22.5-51.9 50v117h-67.9V198.9h66.7v26.8h0.9c9.3-17.7 32-36.4 65.9-36.4 47.8 0 83.7 31.2 83.7 98.2V416.1z"/>
</svg></a>

            </div>
        </div>
    );
}
export default Header