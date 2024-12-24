import React from 'react';

const GlobalStyle = () => {
  const globalStyle = {
    body: {
      margin: 0,
      padding: 0,
    
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e9ecef', // Light grey background for the whole page
      
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  };

  return (
    <style>
      {`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #e9ecef; /* Light grey background for the whole page */
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}
    </style>
  );
}

export default GlobalStyle;
