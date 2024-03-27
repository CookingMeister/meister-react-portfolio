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
        height: '15vh',
        backgroundColor: 'rgb(30, 6, 245)',
        padding: '10vh',
      }}
    >
      <div className="container footer">
        <footer>
          <div className="social">
            <ul>
              <li>
                <a href="https://github.com/CookingMeister?tab=repositories">
                  <i class="fab fa-github fa-2x m-1 mb-3"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shawn-meister-bb646b29a/">
                  <i class="fab fa-linkedin fa-2x m-1 mb-3"></i>
                </a>
              </li>
            </ul>
          </div>
          <span>&copy; {getDate()} Meister</span>
          <p>Fredericton | New Bunswick | Canada</p>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
