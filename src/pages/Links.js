import React from 'react';

const Links = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    color:'white',
    minHeight: '100vh',
    // width: '100vw',  Full viewport width
    // height: '100vh', Full viewport height
    // backgroundColor: 'grey',
    background: 'linear-gradient(180deg,rgb(44, 3, 3), #121212)'
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
      LinkedIn: <a href="https://www.linkedin.com/in/ahalya-100276221/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ahalya-100276221/</a> <br /> <br />
        Naukri: <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">https://www.naukri.com/mnjuser/profile?id=&altresid</a> <br /> <br />
        Netlify: <a href="https://react-dash-ahalya.netlify.app" target="_blank" rel="noopener noreferrer">https://react-dash-ahalya.netlify.app</a> <br /> <br />
        Resume: <a href="/Ahalya--Resume.pdf" download="Ahalya--Resume.pdf">Download Resume</a>
      </p>
    </div>
  );
}


export default Links;
