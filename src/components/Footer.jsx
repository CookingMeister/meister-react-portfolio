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
        height: '16vh',
        backgroundColor: 'rgb(30, 6, 245)',
        padding: '18vh',
        fontSize: '80%',
      }}
    >
      <div className="container footer text-muted">
        <footer>
          <div className="social d-flex justify-content-center align-items-center">
            <a href="https://github.com/CookingMeister?tab=repositories">
              <i class="fab fa-github px-3 py-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/shawn-meister-bb646b29a/">
              <i class="fab fa-linkedin px-3 py-4"></i>
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
