import React from 'react';
import '../styles/ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub /> Code
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaExternalLinkAlt /> Live
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
