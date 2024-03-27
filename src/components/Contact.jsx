import React, { useState, useEffect } from 'react';
import {Fade} from'react-awesome-reveal';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    // Validate message
    if (message.trim() === '') {
      setMessageError('Please enter a message.');
    } else {
      setMessageError('');
    }
  }, [email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if email and message are valid
    if (emailError === '' && messageError === '') {
      // Submit form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (

    <section id="Contact"
    style = {{
      fontFamily: 'Roboto, sans-serif',
      backgroundImage:
      'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
      paddingTop: '18vh',
      paddingBottom: '8vh',
      color: 'antiquewhite',
      borderRadius: '2px',
    }}
    >
      <div className="container px-4">
        <h3 className="fs-2" style={{marginTop: '1vh', marginBottom: '10vh', textShadow: '1px 1px 3px black'}}>
          Contact Me
        </h3>
        <Fade duration={1900} triggerOnce>
        <form
          className="row gy-2 gx-4 align-items-center justify-content-center mx-auto w-100 d-block"
          onSubmit={handleSubmit}
        >
          <div className="col-md-12 col-lg-6 mx-auto pb-3">
            <label htmlFor="name" className="form-label mx-1">
              Name
            </label>
            <input
              style={{borderRadius: '3px', backgroundColor: 'antiquewhite'}}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-12 col-lg-6 mx-auto pb-1">
            <label htmlFor="email" className="form-label mx-1">
              Email address
            </label>
            <input
              style={{borderRadius: '3px', backgroundColor: 'antiquewhite'}}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p style={{textShadow: '1px 1px 3px black'}} className="text-danger text-center mt-3">{emailError}</p>}
          </div>
          <div className="col-md-12 col-lg-6 mx-auto pb-1">
            <label htmlFor="message" className="form-label mx-1" >
              Message
            </label>
            <textarea
            style={{borderRadius: '3px', backgroundColor: 'antiquewhite'}}
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <p style={{textShadow: '1px 1px 3px black'}} className="text-danger text-center mt-3">{messageError}</p>}
            <button type="submit" className="btn btn-dark mt-2" style={{width: '25%'}}>
              Submit
            </button>
          </div>
        </form>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
