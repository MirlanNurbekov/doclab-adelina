import React from 'react';
import ServicesPage from '../Assets/images/Главная.svg';

function Home() {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%' // Adjust the width as needed
  };

  const imageStyle = {
    width: '100%', // This will make the image stretch to container width
    height: 'auto' // This maintains the aspect ratio of the image
  };

  const buttonsStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column', // Stack buttons vertically
    alignItems: 'center',
    gap: '10px' // Space between buttons
  };

  return (
    <div style={containerStyle}>
      <img src={ServicesPage} alt="Services Background" style={imageStyle} />
      
    </div>
  );
}

export default Home;
