import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: 'url(/forest-path-at-night.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    margin: 0,
    padding: 0,
    width: '100%',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    maxWidth: '800px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My Portfolio</h1>
      <p style={paragraphStyle}>I am a Full Stack Developer specializing in React.js, Java, and other modern web technologies.</p>
    </div>
  );
}

export default Home;
