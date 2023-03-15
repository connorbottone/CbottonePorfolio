import { useState } from 'react';
import { send } from 'emailjs-com';
import FormData from "./Formdata";
import contact from '../images/cont.jpg'
import'../styles/contactMe.css'

const ContactMe = () => {

   

    return (
        <div>
            <img id="contact" src={contact}></img>
            
            <FormData />
       
            
        </div>)
}

export default ContactMe;