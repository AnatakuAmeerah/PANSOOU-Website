import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [name, setName] = useState("");
  const [matric, setMatric] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // if (!name.trim()) {
    //     validationErrors.name = 'Name is required';
    // }
    // if (!email.trim()) {
    //     validationErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //     validationErrors.email = 'Email is not valid';
    // }
    if (!message.trim()) {
      validationErrors.message = 'Message is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const serviceId = 'service_if46mzk';
      const templateId = 'template_njc9eef';
      const publicKey = 'XyuAmaP3VKVDpyubo';

      const templateParams = {
        from_name: name,
        from_matric: matric,
        to_name: 'PANSOOU',
        message: message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          toast.success('Message sent successfully!', response);
          setMatric('');
          setMessage('');
          setName('');
        })
        .catch((error) => {
          toast.error('ERROR')
          console.log('Error sending mail', error);
        });
    }
  }

  return (

    <form onSubmit={handleSubmit} className='msg-box'>
      <p>Name *optional</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Matric No *optional</p>
      <input
        type="text"
        value={matric}
        onChange={(e) => setMatric(e.target.value)}
      />
      <p> Your message</p>
      <textarea rows={8} value={message} placeholder='write your message here' onChange={(e) => setMessage(e.target.value)}>
      </textarea>
      {errors.message && <p className='validation' style={{ color: 'red', }}>{errors.message}</p>}
      <button type='submit'>SEND MESSAGE</button>
      <ToastContainer />
    </form>
  );
}

export default Contact;