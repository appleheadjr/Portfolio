import React from 'react'

export default function Introduction() {

    const containerStyle = {
        backgroundColor: 'white',
        padding: '30px', // Adjust the padding as needed
        //border: '1px solid #292929',// Border style and color
        //marginTop: '20px', // Top margin
        //marginBottom: '20px', // Bottom margin
        
        
      };

    const headStyle={
        color : 'black',
        fontFamily: 'Arial, sans-serif',
        fontSize: '3rem',
    }
    const paraStyle={
        color : '#716F81',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
    }
    

  return (
    <div style={containerStyle}>
        <h1 style={headStyle}>Hi!</h1>
        <p style={paraStyle}>I'm Shreya.  I've got a keen interest in software development, web development and machine learning. I've worked on projects to hone my skills in these domains. Do take a look at my work below :) </p>
    </div>
  )
}
