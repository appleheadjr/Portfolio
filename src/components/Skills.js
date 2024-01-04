import React from 'react'
import backgroundImage from '../backgroungimage.jpg';
import 'typeface-share-tech-mono';

export default function Skills() {
    const containStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        padding: '30px'
      };
    
      const textStyle = {
        color: 'white',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '3rem',
        textAlign: 'center'
      };
      const images = [
        { id: 1, src: './cplusplus.png', title: 'C++' },
        { id: 2, src: './javascript.png', title: 'JavaScript' },
        { id: 3, src: './mongodb.png', title: 'MongoDB' },
        { id: 4, src: './nodejs.png', title: 'NodeJS' },
        { id: 5, src: './python.png', title: 'Python' },
        { id: 6, src: './reactlogo.png', title: 'ReactJS' },
        { id: 7, src: './httttml.png', title: 'HTML' },
        { id: 8, src: './cascaded.png', title: 'CSS' },

        // Add more images as needed
      ];
      const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent white background
        borderRadius: '10px', // Optional: Add border-radius for rounded corners
      };
  return (
    <>
        <div style={containStyle}>
            <h1 style={textStyle}>Skills</h1>
        </div>
        <div className="container" style={{padding:'40px'}}>
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-md-3 mb-3">
              <div className="card" style={cardStyle}>
                
              <div className="text-center">
                  <img
                    src={image.src}
                    className="card-img-top"
                    alt={image.title}
                    style={{
                      maxHeight: '200px',
                      minHeight: '200px',
                      maxWidth: '200px',
                      display: 'inline-block', // Ensures the text-align:center works
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:'white'}}>{image.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
