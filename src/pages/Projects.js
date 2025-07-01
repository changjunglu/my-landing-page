import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '企業級電商平台',
      description: '一個完整的電商解決方案，包含商品管理、購物車、支付整合、訂單管理等功能。使用 React 前端和 Node.js 後端，整合多種支付方式。',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'AI 數據分析平台',
      description: '基於機器學習的數據分析平台，能夠自動處理和分析大量數據，生成洞察報告。使用 Python 和 TensorFlow 開發。',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: '任務管理系統',
      description: '團隊協作任務管理工具，支援即時通訊、檔案分享、進度追蹤等功能。使用 Vue.js 和 Socket.io 實現即時功能。',
      image: '📋',
      technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL', 'Redis'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: '個人理財應用',
      description: '幫助用戶追蹤支出、設定預算、分析消費習慣的個人理財應用。使用 React Native 開發，支援 iOS 和 Android。',
      image: '💰',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title">專案作品</h1>
          <p className="section-subtitle">我最近完成的一些專案展示</p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card-large">
                <div className="project-image-large">
                  <div className="project-placeholder-large">{project.image}</div>
                </div>
                <div className="project-content-large">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      查看專案
                    </a>
                    <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 