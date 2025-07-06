import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface NavItem {
  path: string;
  label: string;
}

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useState<string>(() => {
    return localStorage.getItem('locale') || navigator.language || 'zh-TW';
  });
  const options = [
    { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { code: 'en-US', label: 'English', flag: '🇺🇸' },
    { code: 'ja-JP', label: '日本語', flag: '🇯🇵' },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    window.location.reload();
  };
  return (
    <select
      className="language-switcher"
      value={locale}
      onChange={handleChange}
      aria-label="切換語言"
      style={{ marginLeft: 16 }}
    >
      {options.map(opt => (
        <option key={opt.code} value={opt.code}>
          {opt.flag} {opt.label}
        </option>
      ))}
    </select>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', label: '首頁' },
    { path: '/about', label: '關於我' },
    { path: '/projects', label: '專案作品' },
    { path: '/contact', label: '聯絡我' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Chang Jung Lu</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="主選單">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher />

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="切換選單">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 