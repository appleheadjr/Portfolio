import React from 'react'
import backgroundImage from '../backgroungimage.jpg';
import 'typeface-share-tech-mono';

export default function Internship() {
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

      const containerStyle = {
        backgroundColor: 'black',
        padding: '30px', // Adjust the padding as needed
        //border: '1px solid #292929',// Border style and color
        //marginTop: '20px', // Top margin
        //marginBottom: '20px', // Bottom margin
        
        
      };

      const paraStyle={
        color : 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
    }
  return (
    <>
        <div style={containStyle}>
            <h1 style={textStyle}>Internships</h1>
        </div>
        <div style={containerStyle}>
            <p style={paraStyle}>I've Interned at CSIR-CEERI (Pilani). I worked under Dr. Dhiraj Sangwan on a Machine Learning Project. I developed and implemented Recurrent Neural Network (RNN) models, including Gated Recurrent Unit (GRU), Long Short-Term Memory
                (LSTM), and Simple RNN models, for prediction of state of charge of a battery. Successfully implemented and compared the performance of GRU, LSTM, and Simple RNN models
                and conducted thorough analysis and evaluation to determine the effectiveness of each model and obtained an error rate of less than 0.2% for
                the simple RNN model. </p>
        </div>
    </>

  )
}
