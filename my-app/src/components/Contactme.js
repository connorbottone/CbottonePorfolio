import { useState } from 'react';
import { send } from 'emailjs-com';
import FormData from "./Formdata";
import'../styles/contactMe.css'

const ContactMe = () => {

   

    return (
        <div>
            <h1>ContactMe Me</h1>
            <div id ="h3"></div>
            <card id='h2'>
                <h3>CONTACT ME DIRECTLY </h3>
                
                <h3>VIA EMAIL   </h3>
                <h1>&#8594;</h1>
                   
                    <h3>MADE USING EMAILJS</h3>
                        </card>
            <FormData />
       
            
        </div>)
}

export default ContactMe;