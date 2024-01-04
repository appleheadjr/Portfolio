import React from 'react'
import backgroundImage from '../backgroungimage.jpg';
import 'typeface-share-tech-mono';

export default function Projects() {

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
    
      const projContainerStyle = {
        backgroundColor: 'black',
        padding: '100px'
      };
    
      const cardStyle = {
        color: 'white',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px', // Top margin
        marginBottom: '40px', // Bottom margin
        marginLeft : '40px',
        marginRight:'40px',
        padding:'20px'
        
      };
    
      return (
        <>
          <div style={containStyle}>
            <h1 style={textStyle}>Projects</h1>
          </div>
          <div className="row" style={projContainerStyle}>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ ...cardStyle, backgroundColor: 'red' }}>
                <h3 className="card-title" style={{ textAlign: 'center' }}>Movie Review App</h3>
                <p className="card-text">Developed a movie review web application which enables users to submit detailed movie reviews, including ratings and comments. Implemented user authentication and movie reviewing systems using NodeJS and ExpressJS. Utilized REST APIs to enhance data retrieval and interaction and integrated MongoDB to efficiently store and manage user and review data.</p>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ ...cardStyle, backgroundColor: '#1EAFED' }}>
                <h3 className="card-title" style={{ textAlign: 'center' }}>Web API Server Development</h3>
                <p className="card-text">Developed a RESTful API server using Express.js, implementing CRUD operations. Integrated MongoDB as the backend database for efficient data storage and retrieval. Conducted testing with Postman and Insomnia to ensure API functionality and reliability.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={{ ...cardStyle, backgroundColor: '#8109B7'}}>
                <h3 className="card-title" style={{ textAlign: 'center' }}>URL Shortener</h3>
                <p className="card-text">Developed a RESTful API server using Express.js, implementing CRUD operations. Integrated MongoDB as the backend database for efficient data storage and retrieval. Conducted testing with Postman and Insomnia to ensure API functionality and reliability.</p>
              </div>
              
              
            </div>
          </div>
        </>
  )
}
