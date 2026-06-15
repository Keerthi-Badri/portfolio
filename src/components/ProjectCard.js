import React, { useState, useEffect } from 'react';
import '../styles/ProjectCard.css';
import { FaGithub, FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [previewOpen, setPreviewOpen] = useState(false);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setPreviewOpen(false);
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            {/* CARD */}
            <article className="project-card">

                {/* IMAGE SECTION */}
                <div className="project-image-wrapper">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="project-overlay">
                        <div className="project-links">

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <FaGithub /> Code
                            </a>

                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                            )}

                            <button
                                type="button"
                                className="project-link project-preview-btn"
                                onClick={() => setPreviewOpen(true)}
                            >
                                <FaSearchPlus /> Preview
                            </button>

                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                        {project.technologies?.map((tech, idx) => (
                            <span key={idx} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {/* MODAL PREVIEW */}
            {previewOpen && (
                <div
                    className="project-modal-backdrop"
                    onClick={() => setPreviewOpen(false)}
                >
                    <div
                        className="project-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="project-modal-close"
                            onClick={() => setPreviewOpen(false)}
                        >
                            ×
                        </button>

                        {/* BIG SCREENSHOT */}
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="modal-image"
                        />

                        {/* ACTION BUTTONS */}
                        <div className="project-modal-actions">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <FaGithub /> View Code
                            </a>

                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;