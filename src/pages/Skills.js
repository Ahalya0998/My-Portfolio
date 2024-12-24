import React from 'react';

const Skills = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    // width: '100vw', Full viewport width
    // height: '100vh',  Full viewport height
    minHeight: '100vh',
     background: 'linear-gradient(180deg,rgb(44, 3, 3), #121212)',
     color:'white'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: 'white'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    textAlign: 'left',
    padding: '0 1rem', // Add padding for better spacing
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem', // Add padding for list items
    margin: '0.5rem 0', // Add margin between list items
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Skills</h1>
      <div style={paragraphStyle}>
        <center>
        <b>Languages:</b>  HTML5, CSS3, JavaScript, ReactJS, SQL <br></br>
        <b>Frameworks and Libraries: </b>React JS, Bootstrap<br></br>
        <b>Tools: </b> Git,GitHub, Visual Studio Code, SQL Plus<br></br>
        <b>Version Control: </b> Git, GitHub<br></br>
        <b>Core Skills: </b> Responsive Web Design, DOM Manipulation, API Integration, CSS Animations<br></br>
        </center>
      </div>
    </div>
  );
}

export default Skills;

