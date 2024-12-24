import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    // padding: '1rem 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    margin: 0,
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 Ahalya. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
