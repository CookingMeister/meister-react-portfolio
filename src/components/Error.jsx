import React from 'react';
import { Bounce, Slide } from 'react-awesome-reveal';

function Error() {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage: 'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
        height: '90vh',
        paddingTop: '22vh',
        color: 'antiquewhite',
      }}
    >
      <Slide triggerOnce>
        <div className="container text-center">
          <h1 style={{color: '#C20024', textShadow: '1px 1px 3px black'}}>404 Page Not Found</h1>
          <p>The page you are looking for is not available.</p>
        </div>
      </Slide>
    </div>
  );
}

export default Error;
