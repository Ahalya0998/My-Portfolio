import React from 'react';

const About = () => {
  const containerStyle = {
    position: 'relative', // Position relative to place the overlay absolutely
    padding: '2rem',
    textAlign: 'center',
    // backgroundImage: 'url(aboume.jpg)',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    margin: 0,
    minHeight: '100vh',
    color: 'white', // Adjust text color for better contrast
    background: 'linear-gradient(180deg,rgb(44, 3, 3), #121212)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    zIndex: 1, // Place overlay above the background image
  };

  const contentStyle = {
    position: 'relative', // Position relative to place text above the overlay
    zIndex: 2,
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
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>About Me</h1>
        <p style={paragraphStyle}>
        Front-End Developer skilled in HTML,CSS, JavaScript, React.js and SQL, transitioning from an analytical role. Demonstrated experience in building responsive and user-friendly applications, integrating APIs, and enhancing performance by up to 30% . Excited to leverage analytical experience and technical skills to contribute to a collaborative development team.
        </p>
      </div>
    </div>
  );
}

export default About;
