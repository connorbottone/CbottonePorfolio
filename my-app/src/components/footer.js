import * as React from 'react';

const style = {
    img:{
        width: '100px',
        height: '100px',
        padding: '20px',
        marginLeft: '260px',
      
        
      
       
        


    
 
    
   

},
border: {
    display: 'flex',
    
    alignItems: 'center',
    width: '80%',
    height: '110px',
    border: '1px solid black',
    margin: 'auto',
    marginTop: '750px',
    borderRadius: '80px',
    border: '2px solid bisque',
   
        
},}
const Footer= ({x,setCurrentPage}) => {
  return (
    <div style={style.border}>
   
    <a href='https://github.com/connorbottone?tab=repositories'><svg style={style.img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path  fill="#0366d6"d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  
  </svg></a><p>Github</p>
  <br></br>
  <br></br>

  <a  onClick={() => setCurrentPage('Contactme') }>
  <svg style={style.img}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill= "#D14836" d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
  </svg></a><p>Gmail</p>
  <br></br>
  <br></br>
  <a href='https://www.indeed.com/'>
  <svg style={style.img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#00A9E0" d="M471.1,227.5v-36.8h-70.5v36.8H471.1z M471.1,295.3v-70.5h-70.5v70.5H471.1z M471.1,359.8v-36.8h-70.5v36.8H471.1z M200.5,359.8h70.5v-36.8h-70.5V359.8z M471.1,0H40.9C18.3,0,0,18.3,0,40.9v430.3C0,493.7,18.3,512,40.9,512h430.3c22.6,0,40.9-18.3,40.9-40.9V40.9C512,18.3,493.7,0,471.1,0z M200.5,71.4v71.4h-70.5V71.4H200.5z M200.5,143.7v71.4h-70.5v-71.4H200.5z M471.1,430.3H40.9V40.9h430.3V430.3z M471.1,287.7H300.6v-70.5h170.5V287.7z M471.1,223.3H300.6v-36.8h170.5V223.3z"/>
  </svg>
</a> Indeed



  </div> 
    
  
  );
}
export default Footer;