import React from 'react';

const AddInfo = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    color:'white',
    minHeight: '100vh',
    // width: '100vw', Full viewport width
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
    textAlign: 'center', // Align text to the left for better readability
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Additional Information</h1>
      <p style={paragraphStyle}>
        <strong>Languages:</strong> <br />
        <p>Kannada, English</p>
        <strong>Hobbies:</strong> <br />
        <p>Reading Books, Trekking, Birding, Travelling, Learning carnatic music</p>
      </p>
    </div>
  );
}

export default AddInfo;
