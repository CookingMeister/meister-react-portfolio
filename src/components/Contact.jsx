/**
 * Renders the contact form component. Allows users to submit their name, email, and message.
 * Validates the email and message fields on submit. Logs submitted values to the console.
 */
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  }, [email]);

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
    <section
      id="Contact"
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage:
          'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
        paddingTop: '20vh',
        paddingBottom: '10vh',
        color: 'antiquewhite',
        borderRadius: '2px',
      }}
    >
      <div className="container px-4">
        <h3
          className="fs-2"
          style={{
            marginBottom: '2.5rem',
            textShadow: '1px 1px 3px black',
          }}
        >
          Contact Me
        </h3>

        <div
          className="border-top border-light mb-5 mt-4"
          style={{ opacity: '0.6' }}
        ></div>

        {/* Fade Animation */}
        <Fade duration={1900} triggerOnce>
          <form
            className="row gy-2 gx-4 align-items-center justify-content-center mx-auto w-100 d-block my-1"
            onSubmit={handleSubmit}
          >
            <div className="col-md-12 col-lg-6 mx-auto pb-3">
              <label htmlFor="name" className="form-label mx-1">
                Name
              </label>
              <input
                style={{ borderRadius: '3px', backgroundColor: 'antiquewhite' }}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 col-lg-6 mx-auto pb-1">
              <label htmlFor="email" className="form-label mx-1">
                Email address
              </label>
              <input
                style={{ borderRadius: '3px', backgroundColor: 'antiquewhite' }}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Display email error if there is one  */}
              {emailError && (
                <p
                  style={{
                    textShadow: '1px 1px 2px black',
                    color: '#15f5ba',
                    letterSpacing: '1px',
                  }}
                  className="text-center mt-3"
                >
                  <em>{emailError}</em>
                </p>
              )}
            </div>
            <div className="col-md-12 col-lg-6 mx-auto pb-1">
              <label htmlFor="message" className="form-label mx-1">
                Message
              </label>
              <textarea
                style={{ borderRadius: '3px', backgroundColor: 'antiquewhite' }}
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-dark my-4"
                  style={{
                    width: '25%',
                    border: '1px solid antiquewhite',
                    borderRadius: '50px',
                    transition: 'all 0.3s',
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
