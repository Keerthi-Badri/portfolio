import React from 'react';
import '../styles/Hero.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {/* PLACEHOLDER: Replace 'Your Name' with your actual name */}
                        Hi, I'm <span className="highlight">Your Name</span>
                    </h1>

                    <p className="hero-subtitle">
                        {/* PLACEHOLDER: Replace with your professional title/role */}
                        Full Stack Developer | React Specialist | Problem Solver
                    </p>

                    <p className="hero-description">
                        {/* PLACEHOLDER: Write a brief description about yourself */}
                        I am passionate about creating beautiful, functional web applications. 
                        With expertise in modern web technologies, I help businesses bring their ideas to life.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            {/* PLACEHOLDER: Link to your resume/CV */}
                            Download Resume
                        </button>
                        <button className="btn btn-secondary">
                            {/* PLACEHOLDER: Scroll to projects section */}
                            View My Work
                        </button>
                    </div>

                    <div className="hero-socials">
                        {/* PLACEHOLDER: Replace href with your social media links */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter />
                        </a>
                        <a href="mailto:your.email@example.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    {/* PLACEHOLDER: Replace src with your profile image */}
                    <img src="https://via.placeholder.com/400" alt="Profile" className="profile-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
