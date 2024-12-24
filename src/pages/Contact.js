import React from 'react';

const Contact = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    minHeight: '100vh',
    // width: '100vw',  Full viewport width
    // height: '100vh',  Full viewport height
    // backgroundColor: 'grey',
    color:'white',
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
      <h1 style={headingStyle}>Contact Me</h1>
      <p style={paragraphStyle}>You can reach me at <a href="mailto:ahalyakaranth09@gmail.com">ahalyakaranth09@gmail.com</a></p><br></br>
      <p style={paragraphStyle}>Call Me +91 9739370146</p>
    </div>
  );
}

export default Contact;
