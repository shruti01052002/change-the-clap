import React from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000'}}>
      <Link to='/change-the-clap' className="nav-link" style={{ color: '#FF63B1' }}><img src={logo} width="60" height="60" alt="..."/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:'10px'}}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ative">
              <Link to='/change-the-clap' className="nav-link" style={{ color: '#FF63B1' }}>About us <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='/change-the-clap/success' className="nav-link" style={{ color: '#FF63B1' }}>Sucess Stories</Link>
            </li>
            <li className="nav-item">
              <Link to='/change-the-clap/domain' className="nav-link" style={{ color: '#FF63B1' }} >Explore Domains</Link>
            </li>
            <li className="nav-item">
              <Link to='/change-the-clap/helping-hand' className="nav-link" style={{ color: '#FF63B1' }} >Helping Hand</Link>
            </li>
          </ul>
            <Link to='/change-the-clap/signup'><button className="btn" style={{ backgroundColor: '#FF63B1', color: 'white', marginRight: '16px' }}>Login/Signup</button></Link>
          
        </div>
      </nav>

    </>
  )
}
export default Navbar;