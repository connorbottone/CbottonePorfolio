import { useState } from 'react';
import { send } from 'emailjs-com';
import '../styles/dataform.css'
const FormData = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_p4lfrx5',
          'template_ok240dj',
          toSend,
          'AGPFhv9zC94kWN0r5'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>S U B M I T</button>
            </form>
        </div>
    );
}

export default FormData;