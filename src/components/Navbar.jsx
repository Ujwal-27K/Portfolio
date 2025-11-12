import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="home" smooth={true} duration={500} onClick={closeMobileMenu}>
            Portfolio
          </Link>
        </div>
        
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          {/* Gallery link hidden but can be enabled in future */}
          {/* <li className="nav-item" style={{ display: 'none' }}>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="certificates"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="stats"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Stats
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
