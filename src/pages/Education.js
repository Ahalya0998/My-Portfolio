import React from 'react';

const Education = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    color:'white',
    // width: '100vw',  Full viewport width
    // height: '100vh',  Full viewport height
    minHeight: '100vh',
    // backgroundColor: '#e8f5e9',
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
    textAlign: 'Center', // Align text to the left for better readability
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Education</h1>
      <p style={paragraphStyle}>
        <strong>Bachelor of Computer Applications</strong><br />
        <em>Bhandarkars Arts and Science College, Mangalore University</em><br />
        <strong>Percentage:</strong> 82.48%<br />
        <strong>Duration:</strong> Jul 2016 - Apr 2019
      </p>
      <h1 style={headingStyle}>Certification</h1>
      <p style={paragraphStyle}>
        <strong>Java Full Stack Developer</strong><br />
        <em>Jspider, Bengaluru</em><br />
        <strong>Duration:</strong> Jul 2023 - Apr 2024
      </p>
    </div>
    
  );
}

export default Education;
