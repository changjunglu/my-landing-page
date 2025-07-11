import React from 'react';
import './About.css';
import { FormattedMessage } from 'react-intl';
import profileImg from '../assets/images/images.jpeg';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="profile-placeholder">
            <img
              src={profileImg}
              alt="開發者"
              style={{
                width: 80,
                height: 80,
                display: 'block',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>
          <h1 className="section-title">
            <FormattedMessage id="about.title" defaultMessage="關於我" />
          </h1>
          <p className="section-subtitle">
            <FormattedMessage id="about.subtitle" defaultMessage="了解更多關於我的背景和專業經驗" />
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>專業概述</h2>
              <p>
                我是一名充滿熱情的軟體開發工程師，擁有豐富的全端開發經驗。
                我專注於使用現代技術棧創建高效能、可擴展的應用程式。
              </p>
              <p>
                在過去的幾年裡，我參與了多個大型專案的開發，從電商平台到企業級管理系統，
                每個專案都讓我更深入地理解如何將技術與業務需求完美結合。
              </p>
              <p>
                我熱愛學習新技術，並且善於將複雜的技術概念轉化為簡單易懂的解決方案。
                我相信優秀的程式碼不僅要能運行，更要易於維護和擴展。
              </p>
            </div>
            
            <div className="about-stats">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">年開發經驗</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">完成專案</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">技術技能</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">客戶滿意度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">工作經驗</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>資深全端工程師</h3>
                <h4>科技公司 | 2022 - 現在</h4>
                <ul>
                  <li>負責企業級應用程式的架構設計和開發</li>
                  <li>帶領 5 人開發團隊，提升專案交付效率 30%</li>
                  <li>優化系統效能，減少載入時間 50%</li>
                  <li>實施 CI/CD 流程，縮短部署時間 70%</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>前端工程師</h3>
                <h4>新創公司 | 2020 - 2022</h4>
                <ul>
                  <li>開發響應式網頁應用程式</li>
                  <li>與設計師和後端工程師密切合作</li>
                  <li>實現複雜的用戶介面互動功能</li>
                  <li>參與產品需求分析和技術選型</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>實習工程師</h3>
                <h4>軟體公司 | 2019 - 2020</h4>
                <ul>
                  <li>協助開發內部管理系統</li>
                  <li>學習現代前端框架和開發工具</li>
                  <li>參與程式碼審查和測試</li>
                  <li>撰寫技術文件和用戶手冊</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <h2 className="section-title">教育背景</h2>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>碩士學位</h3>
              <h4>資訊工程學系</h4>
              <p>國立台灣大學</p>
              <p>2017 - 2019</p>
            </div>
            
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>學士學位</h3>
              <h4>電腦科學系</h4>
              <p>國立清華大學</p>
              <p>2013 - 2017</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 