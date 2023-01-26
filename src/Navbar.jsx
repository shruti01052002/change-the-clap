import React from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000'}}>
        <a className="navbar-brand" href="index.html" ><img src={logo} width="60" height="60" alt="..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:'10px'}}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ative">
              <Link to='/' className="nav-link" style={{ color: '#FF63B1' }}>About us <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='/success' className="nav-link" style={{ color: '#FF63B1' }}>Sucess Stories</Link>
            </li>
            <li className="nav-item">
              <Link to='/domain' className="nav-link" style={{ color: '#FF63B1' }} >Explore Domains</Link>
            </li>
          </ul>
            <Link to='/signup'><button className="btn" style={{ backgroundColor: '#FF63B1', color: 'white', marginRight: '16px' }}>Users</button></Link>
          <form action="csignup.php" className="form-inline my-2 my-lg-0">
            <button className="btn" style={{ backgroundColor: '#FF63B1', color: 'white', marginRight: '16px' }} >Company</button>
          </form>
          
        </div>
      </nav>

    </>
  )
}
export default Navbar;