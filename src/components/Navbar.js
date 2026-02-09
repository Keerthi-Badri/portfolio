import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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
                    {/* PLACEHOLDER: Replace with your name or logo */}
                    <span className="logo-text">Your Name</span>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a className="nav-link" onClick={() => handleNavClick('home')}>Home</a>
                    <a className="nav-link" onClick={() => handleNavClick('about')}>About</a>
                    <a className="nav-link" onClick={() => handleNavClick('skills')}>Skills</a>
                    <a className="nav-link" onClick={() => handleNavClick('projects')}>Projects</a>
                    <a className="nav-link" onClick={() => handleNavClick('contact')}>Contact</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
