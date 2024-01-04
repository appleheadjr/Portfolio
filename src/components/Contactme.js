import React from 'react';
import backgroundImage from '../backgroungimage.jpg';
import 'typeface-share-tech-mono';

export default function ContactMe() {
  const containStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    padding: '30px',
  };

  const textStyle = {
    color: 'white',
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '3rem',
    textAlign: 'center',
    
  };

  

  const linkStyle = {
    color: 'white',
    fontSize: '1.5rem',
    margin: '0 10px',
    textDecoration: 'none',
    marginLeft : '30px',
    marginRight : '30px',
    fontFamily: 'Share Tech Mono, monospace'
  };

  return (
    <>
      <div style={containStyle}>
        <h1 style={textStyle}>Contact Me</h1>
        <p style={{textAlign:'center',marginTop:"50px", marginBottom:"50px"}}>
        <a href="https://www.linkedin.com/in/shreya-sanaye-448224192/" style={linkStyle} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/appleheadjr" style={linkStyle} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:shreyasanaye11@gmail.com" style={linkStyle}>
          Email
        </a>
        </p>
      </div>
      
    </>
  );
}
