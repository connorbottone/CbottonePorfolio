import { useState } from 'react';
import { send } from 'emailjs-com';
import FormData from "./Formdata";
import'../styles/contactMe.css'

const ContactMe = () => {

   

    return (
        <div>
            <h1>ContactMe Me</h1>
            <card id='h2'>
                <h3>Contact Me Directly Via email  </h3>
                <h3>by filling out the to the side.
                    </h3>
                    <h3>This email sumbission was made using emailjs</h3>
                        </card>
            <FormData />
       
            
        </div>)
}

export default ContactMe;