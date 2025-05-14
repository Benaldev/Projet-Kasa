import React from 'react';
import footerLogo from '../../assets/images/footerLogo.png';
import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img src={footerLogo} alt='Logo Kasa' />
      <div>
        <p className='footer-text'>
          © {currentYear} Kasa. All
          <br className='brFooter' /> rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
