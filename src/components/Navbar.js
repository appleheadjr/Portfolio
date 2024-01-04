import React from 'react'



export default function Navbar() {

    const navbarStyle = {
        color: 'white',
        fontFamily: 'Share Tech Mono, monospace', // Change this to your desired font family
        //marginTop: '10px'
        fontSize: '2rem',
      };
      const detailStyle = {
        color: 'white',
        fontFamily: 'Share Tech Mono, monospace', // Change this to your desired font family
        //marginTop: '10px'
        fontSize: '1.2rem',
      };

      const transparentNavbarStyle = {
        backgroundColor: 'rgba(121, 63, 223, 0)', // Adjust the alpha value (0.5 in this case) for transparency
        color: 'white',
      };
  return (
        <nav className="navbar navbar-expand-lg" style={transparentNavbarStyle}>
            <div className="container-fluid">
            
            
            <h3 className='mb-2' style={navbarStyle}>Shreya Sanaye</h3>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                
                <li className="nav-item">
                <a  href="https://drive.google.com/file/d/1MicCw7piGWEJO9vNQSGUqMJKeLOukNEY/view?usp=sharing"style={detailStyle} aria-current="page" className="nav-link active">Resume</a>
                </li>
                
                
                
                
            </ul>
            {/*<form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>*/}
            </div>
        </div>
    </nav>
  )
}
