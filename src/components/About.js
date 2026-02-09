import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        {/* PLACEHOLDER: Replace with your about information */}
                        <p>
                            I'm a dedicated developer with a passion for building web applications that solve real-world problems.
                            With [X] years of experience in [your field], I have successfully delivered numerous projects
                            that have positively impacted businesses and users.
                        </p>

                        <p>
                            My journey in tech started with [your starting point], and I've continuously evolved my skills
                            to stay current with industry trends. I believe in writing clean, maintainable code and following
                            best practices in software development.
                        </p>

                        <p>
                            When I'm not coding, you can find me [your hobbies/interests]. I'm always eager to learn new technologies
                            and collaborate with talented individuals to create amazing products.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <h3 className="stat-number">[X]+</h3>
                                <p className="stat-label">Projects Completed</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-number">[X]+</h3>
                                <p className="stat-label">Years Experience</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-number">[X]+</h3>
                                <p className="stat-label">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        {/* PLACEHOLDER: Replace src with your image */}
                        <img src="https://via.placeholder.com/350" alt="About" className="about-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
