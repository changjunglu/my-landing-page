import React, { useMemo } from 'react';
import './Projects.css';
import { FormattedMessage } from 'react-intl';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: '個人網站',
    description: '使用 React、TypeScript 與 Vite 打造的現代化個人網站。',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/personal-site' },
    ],
  },
  // ...可擴充更多專案
];

const ProjectCard: React.FC<{ project: Project }> = React.memo(({ project }) => (
  <div className="project-card-large">
    <div className="project-image-large">
      <span className="project-placeholder-large" role="img" aria-label="專案">💻</span>
    </div>
    <div className="project-content-large">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span className="tech-tag" key={tech}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
));

const Projects: React.FC = () => {
  const projectList = useMemo(() => projects, []);
  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title">
            <FormattedMessage id="projects.title" defaultMessage="專案作品" />
          </h1>
          <p className="section-subtitle">
            <FormattedMessage id="projects.subtitle" defaultMessage="精選專案與技術實踐" />
          </p>
        </div>
      </section>
      <section className="projects-grid-section">
        <div className="container projects-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects; 