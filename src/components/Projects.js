import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

// ✅ IMPORT IMAGES
import productImg from '../assets/projects/product-mngmt.png';
import examImg from '../assets/projects/exam-portal.png';
import portfolioImg from '../assets/projects/portfolioimg.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Product Management System',
            description:
                'A full-stack CRUD web application for managing products using Flask and MySQL with database integration and backend logic.',
            image: productImg,
            technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
            link: 'https://github.com/Keerthi-Badri/product-management-system-python',
            liveLink: '',
        },
        {
            id: 2,
            title: 'Smart Exam Portal',
            description:
                'A Java-based examination system with login, quiz management, scoring system, and JDBC + MySQL database integration.',
            image: examImg,
            technologies: ['Java', 'JDBC', 'MySQL', 'OOP'],
            link: 'https://github.com/Keerthi-Badri/Smart-Exam-Portal',
            liveLink: '',
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description:
                'A responsive personal portfolio website built using React to showcase projects, skills, and contact information.',
            image: portfolioImg,
            technologies: ['React', 'CSS', 'JavaScript'],
            link: 'https://github.com/Keerthi-Badri',
            liveLink: '',
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">

                <h2 className="section-title">Projects</h2>

                <p className="section-subtitle">
                    A selection of my real-world projects built using Java, Python, Flask, and MySQL,
                    focusing on backend development and problem solving.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="projects-footer">
                    <a
                        className="btn btn-secondary"
                        href="https://github.com/Keerthi-Badri"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View GitHub Profile
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;