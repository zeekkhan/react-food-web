import React from 'react';
import './Footer.css';
import FB from '../assets/fb.png';
import TW from "../assets/tw.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#facebook"><img src={FB} alt='Facebook Image' width={20} height={20}/></a>
        <a href="#twitter"><img src={TW} alt='Twitter Image' width={20} height={20}/></a>
      </div>
      <p>&copy; 2024 Food Hub. Designed by You.</p>
    </footer>
  );
};

export default Footer;

