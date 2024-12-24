import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    color: '#fff',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    margin: 0,
    width: '100%',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/workexperince" style={linkStyle}>Work Experience</Link>
      <Link to="/education" style={linkStyle}>Education</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      <Link to="/links" style={linkStyle}>Links</Link>
      <Link to="/addinfo" style={linkStyle}>Additional Information</Link>
    </nav>
  );
}

export default Navbar;
