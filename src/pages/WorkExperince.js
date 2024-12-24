import React from 'react';

const WorkExperience = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    margin: 0,
    // width: '100vw',
    // height: '100vh',
    minHeight: '100vh',
    // backgroundImage: 'url(/work.jpg)',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // position: 'relative',
    color: 'white', // Set text color to white for better contrast
    background: 'linear-gradient(180deg,rgb(44, 3, 3), #121212)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay to improve text readability
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <p>
          <strong>Junior Analyst, EOX Vantage</strong><br />
          <em>Nov 2021 - May 2023</em><br /><br />
          <strong>Project : Insurance Policy Analysis and Optimization</strong><br />
          <ul>
          <li>Improved data accuracy accross insurance policies, achieving a 20% increase in accuracy and a 15% reduction in risk for policyholders by standardizing data validation practices.</li><br />
          <li>Analyzed and restructured 500+ policies using Connect and Velocity, leading to a 25% boost in retention rates and a 30% increase in operational efficiency by refining internal workflows.</li><br />
          <li>Implemented policy updates that reduced policy lapse rates by 10% , enhancing user engagement and supporting robust risk management strategies.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default WorkExperience;
