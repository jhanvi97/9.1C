import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';
import Searchbar from './Searchbar';

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        DEV@Deakin
      </div>
      <div className="navbar-item search">
        <div className="ui right aligned category search">
          <Searchbar />
        </div>
      </div>
      <div className="buttons">
        <button className="navbar-button">Post</button>
        <Link to="/login">Login</Link> {/* Use Link to navigate to the login page */} 
      </div>
    </div>
  );
}

export default Header;
