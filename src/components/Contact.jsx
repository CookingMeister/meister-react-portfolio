import React, { useState, useEffect } from 'react';

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
      backgroundColor: 'antiquewhite'      
    }}
    >
      <div className="container px-4 py-5">
        <h3 className="fs-2 pb-1 mb-5">Contact Me</h3>
        <form
          className="row gy-2 gx-4 align-items-center justify-content-center mx-auto w-100 d-block"
          onSubmit={handleSubmit}
        >
          <div className="col-md-12 col-lg-6 mx-auto pb-3">
            <label htmlFor="name" className="form-label mx-1">
              Name
            </label>
            <input
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
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-danger text-center mt-2">{emailError}</p>}
          </div>
          <div className="col-md-12 col-lg-6 mx-auto pb-1">
            <label htmlFor="message" className="form-label mx-1">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <p className="text-danger text-center mt-2">{messageError}</p>}
            <button type="submit" className="btn btn-dark mt-2" style={{width: '25%'}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
