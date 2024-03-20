import React from 'react';

// Get current year
const getDate = () => new Date().getFullYear();

function Footer() {
  return (
    <section id="footer">
      <div className="container footer">
        <footer>
          <span>&copy; { getDate() } Herr Meister</span>
          <p>Fredericton | New Bunswick | Canada</p>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
