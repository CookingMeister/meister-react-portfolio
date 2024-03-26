import React from 'react';
import { Bounce, Slide } from 'react-awesome-reveal';

function Error() {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'blue',
        height: '90vh',
        paddingTop: '22vh',
      }}
    >
      <Slide triggerOnce>
        <div className="container text-center">
          <h1>404 Page Not Found</h1>
          <p>The page you are looking for is not available.</p>
        </div>
      </Slide>
    </div>
  );
}

export default Error;
