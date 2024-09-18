/**
 * Renders the footer component.
 *
 * Displays copyright information and social media links.
 */
import React from 'react';

// Get current year
const getDate = () => new Date().getFullYear();

function Footer() {
  return (
    <section
      id="footer"
      style={{
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '24vh',
        backgroundImage: "url('/img/Designer.png')",
        backgroundPosition: 'center',
        fontSize: '80%',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: -1,
        }}
      ></div>
      <div className="container footer text-white">
        <footer>
          <div
            className="social d-flex justify-content-center align-items-center"
            onMouseOver={(e) => (e.target.style.color = '#0dcaf0')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            <a href="https://github.com/CookingMeister?tab=repositories">
              <i className="fab fa-github px-3 py-4"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shawn-meister-bb646b29a/"
              onMouseOver={(e) => (e.target.style.color = '#0dcaf0')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              <i className="fab fa-linkedin px-3 py-4"></i>
            </a>
          </div>
          <span>&copy; {getDate()} Meister</span>
          <p>Fredericton</p>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
