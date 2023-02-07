import { useState } from 'react';
import { send } from 'emailjs-com';
import FormData from "./Formdata";


const ContactMe = () => {



    return (
        <div>
            <h1 id="title">ContactMe Me</h1>
            <h3  >To contact me directly Via Email fill out the form to the side.
            </h3>
            <h3></h3>
            <h3> This eamil submission was created using email-js</h3>
            <FormData />


        </div>)
}

export default ContactMe;