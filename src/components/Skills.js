import React from 'react';
import '../styles/Skills.css';

import {
    FaJava,
    FaPython,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaDatabase
} from 'react-icons/fa';

import { SiMysql, SiFlask } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Java', icon: <FaJava /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'JavaScript', icon: <FaJsSquare /> },
            ]
        },
        {
            category: 'Web Development',
            skills: [
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3Alt /> },
                { name: 'Flask (Python Framework)', icon: <SiFlask /> },
            ]
        },
        {
            category: 'Database & Backend',
            skills: [
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'JDBC', icon: <FaDatabase /> },
                { name: 'Database Design', icon: <FaDatabase /> },
            ]
        },
        {
            category: 'Tools & Technologies',
            skills: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'GitHub', icon: <FaGitAlt /> },
                { name: 'REST APIs', icon: <FaDatabase /> },
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

                            <h3 className="category-title">
                                {category.category}
                            </h3>

                            <div className="skills-list">

                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">

                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>

                                        <div className="skill-info">

                                            <p className="skill-name">
                                                {skill.name}
                                            </p>

                                            {/* optional modern dots indicator */}
                                            <div className="skill-dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

                <div className="additional-skills">
                    <h3>Core Competencies</h3>
                    <p>
                        Object-Oriented Programming (OOP) • Data Structures & Algorithms •
                        Problem Solving • CRUD Applications • Database Design • REST APIs •
                        Debugging • Team Collaboration • Software Development Lifecycle
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Skills;