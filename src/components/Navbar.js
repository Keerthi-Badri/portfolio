import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, onToggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="logo-text">Keerthi Badri</span>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a className="nav-link" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
                    <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
                    <a className="nav-link" href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
                    <a className="nav-link" href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
                    <a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
                </div>

                <div className="nav-actions">
                    <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
