import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FormattedMessage } from 'react-intl';
import profileImg from '../assets/images/images.jpeg';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* 英雄區塊 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <FormattedMessage id="home.greeting" defaultMessage="你好，我是 " />
                <span className="highlight">Chang Jung Lu</span>
              </h1>
              <p className="hero-subtitle">
                <FormattedMessage id="home.subtitle" defaultMessage="專業的軟體開發工程師，專精於 React.js、Node.js 和雲端技術" />
              </p>
              <p className="hero-description">
                <FormattedMessage id="home.description" defaultMessage="我致力於創造優秀的數位體驗，結合創新技術與用戶需求，為企業提供高品質的軟體解決方案。" />
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  <FormattedMessage id="home.viewProjects" defaultMessage="查看作品" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <FormattedMessage id="home.contactMe" defaultMessage="聯絡我" />
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-placeholder">
                <img
                  src={profileImg}
                  alt="開發者"
                  style={{
                    width: 128,
                    height: 128,
                    display: 'block',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能區塊 */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">核心技能</h2>
          <p className="section-subtitle">我擅長的技術領域</p>
          
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>前端開發</h3>
              <p>React.js, Vue.js, HTML5, CSS3, JavaScript, TypeScript</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>後端開發</h3>
              <p>Node.js, Express, Django, Spring Boot, RESTful APIs</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>資料庫</h3>
              <p>MySQL, PostgreSQL, MongoDB, Redis</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>雲端服務</h3>
              <p>AWS, Google Cloud Platform, Azure, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 專案預覽 */}
      <section className="projects-preview">
        <div className="container">
          <h2 className="section-title">最新專案</h2>
          <p className="section-subtitle">我最近完成的作品</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🛒</div>
              </div>
              <div className="project-content">
                <h3>企業級電商平台</h3>
                <p>使用 React + Node.js 技術棧，提升系統效能 40%，改善用戶體驗。</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🤖</div>
              </div>
              <div className="project-content">
                <h3>AI 數據分析平台</h3>
                <p>負責機器學習模型開發，實現數據處理自動化，節省 60% 人工時間。</p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">AWS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/projects" className="btn btn-primary">
              查看更多專案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 