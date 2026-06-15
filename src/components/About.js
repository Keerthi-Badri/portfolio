import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Computer Science graduate with strong skills in Java, Python, Flask, and MySQL. I enjoy building backend-driven applications and solving real-world problems through code. I have developed projects like a Product Management System and a Smart Exam Portal using database integration and backend logic. I am seeking opportunities as a Software Developer to contribute and grow in a professional environment.
                        </p>

                       

                        <div className="about-stats">
                            <div className="stat">
                                <h3 className="stat-number">5+</h3>
                                <p className="stat-label">Tech areas</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-number">2+</h3>
                                <p className="stat-label">Full Projects</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-number">2026</h3>
                                <p className="stat-label">Graduation</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Developer workspace" className="about-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
