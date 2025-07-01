import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chang Jung Lu</h3>
            <p>專業的軟體開發工程師，致力於創造優秀的數位體驗。</p>
          </div>
          
          <div className="footer-section">
            <h4>聯絡資訊</h4>
            <ul className="footer-links">
              <li><a href="mailto:chang.jung.lu@example.com">chang.jung.lu@example.com</a></li>
              <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>快速連結</h4>
            <ul className="footer-links">
              <li><a href="/about">關於我</a></li>
              <li><a href="/projects">專案作品</a></li>
              <li><a href="/contact">聯絡我</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Chang Jung Lu. 保留所有權利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 