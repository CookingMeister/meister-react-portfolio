import React, { useState, useEffect } from 'react';
import Link from './Link';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const shouldChangeColor = scrollHeight > 50;

      setIsScrolled(shouldChangeColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="Heading">
      <header
          style={{
            position: 'fixed',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            top: '0',
            padding: '20px 0',
            width: '100%',
            zIndex: '10',
            backgroundColor: isScrolled ? '#faebd7' : 'blue',
            transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
            paddingLeft: '1rem',
          }}
          >
        <a
          href="index.html"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-journal-code"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
          <span className="fs-4 head-title">
            Portfolio
          </span>
        </a>

        <ul className="nav nav-pills">
         <Link
            href="index"
            name="Home"
         />
         <Link 
            href="#About"
            name="About"
         />
         <Link 
            href="#Work"
            name="Work"
         />
         <Link 
            href="#Resume"
            name="Resume"
         />
         <Link 
            href="#Contact"
            name="Contact"
         />
        </ul>
      </header>
    </section>
  );
}

export default Header;
