import React from 'react'
import 'typeface-share-tech-mono';
import backgroundImage from '../backgroungimage.jpg';
export default function Profile() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Vertically center the content
        height: '100vh', // 100% of the viewport height
        margin: 0, // Remove default margin
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        
      };

    const imageStyle = {
    borderRadius: '50%',
    maxWidth: '15%',
    height: 'auto',
    };

    const nameStyle = {
        color: 'white',
        fontFamily: 'Share Tech Mono, monospace', // Change this to your desired font family
        marginTop: '20px',
        fontSize: '5rem',
      };

      const jobStyle = {
        color: 'white',
        fontFamily: 'Share Tech Mono, monospace', // Change this to your desired font family
        marginTop: '10px'
      };


  return (
    <div style={containerStyle}>
        <img src="./myImage.jpeg" alt="Myself"  style={imageStyle}/>
        <h1 style={nameStyle}>Shreya Sanaye</h1>
        <h2 style={jobStyle}>Student at BITS Pilani</h2>
    </div>
  )
}
