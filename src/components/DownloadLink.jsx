import React from 'react';

const DownloadLink = () => {
  return (    
      <a
        href="/Resume_Apr2024.docx"
        download
        style={{
          textDecoration: 'none',
          color: '#C20024',
          textShadow: '1px 1px 3px black',
          fontSize: '1.2rem',
          marginLeft: '28%',
          width: '40%',
        }}
        className="my-2 mb-5 pb-5 text-center"
      >
        <i class="fas fa-file-download mx-2"></i>
        Download Resume
      </a>
  );
};

export default DownloadLink;
