import React from 'react';
import '../styles/Skills.css';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaFigma, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact />, level: '90%' },
                { name: 'CSS/HTML', icon: <FaCss3Alt />, level: '95%' },
                { name: 'TypeScript', icon: <SiTypescript />, level: '85%' },
                { name: 'Next.js', icon: <SiNextdotjs />, level: '80%' },
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNode />, level: '85%' },
                { name: 'MongoDB', icon: <SiMongodb />, level: '80%' },
                { name: 'Databases', icon: <FaDatabase />, level: '85%' },
            ]
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, level: '90%' },
                { name: 'Figma', icon: <FaFigma />, level: '75%' },
                // PLACEHOLDER: Add more tools as needed
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-icon">{skill.icon}</div>
                                        <div className="skill-info">
                                            <p className="skill-name">{skill.name}</p>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: skill.level }}></div>
                                            </div>
                                            <p className="skill-level">{skill.level}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* PLACEHOLDER: Add additional skills or certifications section if needed */}
                <div className="additional-skills">
                    <h3>Additional Skills</h3>
                    {/* PLACEHOLDER: List any certifications, languages, or soft skills */}
                    <p>Communication • Problem Solving • Team Collaboration • Project Management</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
