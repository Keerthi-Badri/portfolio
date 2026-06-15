import React from 'react';
import '../styles/Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="eyebrow">Software Developer</p>
                    <h1 className="hero-title">
                        I’m <span className="highlight">Keerthi Badri</span>,
                    </h1>

                    <p className="hero-subtitle">
                        Software Developer focused on building backend systems, database-driven applications, and full-stack web applications using Java, Python, Flask, and MySQL.
                    </p>

                    <p className="hero-description">
                        Computer Science undergraduate with strong foundation in Java, Python, and Database Management Systems. Experienced in building backend-focused web applications using Flask and MySQL. Seeking an entry-level Software Developer role to apply programming and problem-solving skills in real-world applications.
                    </p>

                    <div className="hero-badges">
                        <span>Java</span>
                        <span>Python</span>
                        <span>Flask</span>
                        <span>MySQL</span>
                        <span>JDBC</span>
                        <span>OOP</span>
                        <span>REST APIs</span>
                        <span>Problem Solving</span>
                    </div>

                    <div className="hero-buttons">
                        <a className="btn btn-primary" href="/keerthi.pdf" download>
                            Download Resume
                        </a>
                        <a className="btn btn-secondary" href="/keerthi.pdf" target="_blank" rel="noreferrer">
                            View Resume
                        </a>
                        <button className="btn btn-ghost" type="button" onClick={scrollToProjects}>
                            View My Work
                        </button>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:hello@yourportfolio.dev" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" alt="Creative developer desk" className="profile-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
