import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // PLACEHOLDER: Replace with your actual projects
    const projects = [
        {
            id: 1,
            title: 'Project Title 1',
            description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['React', 'Node.js', 'MongoDB'],
            link: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 2,
            title: 'Project Title 2',
            description: 'Another project description. Include key features and technologies used.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            link: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 3,
            title: 'Project Title 3',
            description: 'Project description highlighting achievements and impact.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Next.js', 'PostgreSQL', 'Docker'],
            link: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 4,
            title: 'Project Title 4',
            description: 'Add more projects to showcase your portfolio and expertise.',
            image: 'https://via.placeholder.com/300x200',
            technologies: ['Vue.js', 'Express', 'MySQL'],
            link: 'https://github.com',
            liveLink: 'https://example.com',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    {/* PLACEHOLDER: Add a brief subtitle about your projects */}
                    A selection of projects I've built that demonstrate my skills and experience
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="projects-footer">
                    {/* PLACEHOLDER: Link to your full projects page or GitHub */}
                    <button className="btn btn-secondary">
                        View All Projects on GitHub
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
