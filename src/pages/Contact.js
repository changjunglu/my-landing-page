import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log('Form submitted:', formData);
    alert('感謝您的訊息！我會盡快回覆您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">聯絡我</h1>
          <p className="section-subtitle">讓我們開始合作吧！</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>聯絡資訊</h2>
              <p>如果您對我的工作感興趣，或者有任何問題想要討論，請隨時與我聯絡。</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>chang.jung.lu@example.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">🐙</div>
                  <div className="contact-details">
                    <h3>GitHub</h3>
                    <p>github.com/yourusername</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <h3>個人網站</h3>
                    <p>yourwebsite.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>發送訊息</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">主旨</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">訊息 *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  發送訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 