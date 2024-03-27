/**
 * Renders an error page when a 404 is encountered. Displays a heading and message
 * indicating that the page was not found.
 * Uses a Slide animation to bring in the heading and message.
 */
import React from 'react';
import { Slide } from 'react-awesome-reveal';

function Error() {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage:
          'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
        height: '90vh',
        paddingTop: '30vh',
        color: 'antiquewhite',
      }}
    >
      <Slide triggerOnce>
        <div className="container text-center">
          <h1 style={{ color: '#C20024', textShadow: '1px 1px 3px black' }}>
            404 Page Not Found
          </h1>
          <p>The page you are looking for is not available.</p>
        </div>
      </Slide>
    </div>
  );
}

export default Error;
