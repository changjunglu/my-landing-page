import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { cn } from "@/utils/cn";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const messages: Record<'zh-TW' | 'en-US' | 'ja-JP', Record<string, string>> = {
  'zh-TW': {
    'home.greeting': '你好，我是 ',
    'home.subtitle': '專業的軟體開發工程師，專精於 React.js、Node.js 和雲端技術',
    'home.description': '我致力於創造優秀的數位體驗，結合創新技術與用戶需求，為企業提供高品質的軟體解決方案。',
    'home.viewProjects': '查看作品',
    'home.contactMe': '聯絡我',
    'about.title': '關於我',
    'about.subtitle': '了解更多關於我的背景和專業經驗',
    'projects.title': '專案作品',
    'projects.subtitle': '精選專案與技術實踐',
    'contact.title': '聯絡我',
    'contact.subtitle': '歡迎透過下列表單與我聯繫！',
    'contact.infoTitle': '聯絡資訊',
    'contact.infoDesc': '您可以填寫表單或直接來信/社群聯絡我。',
    'contact.formTitle': '聯絡表單',
    'contact.name': '姓名',
    'contact.email': '電子郵件',
    'contact.message': '訊息內容',
    'contact.send': '送出',
    'contact.sending': '送出中...',
    'contact.nameMin': '姓名至少2個字元',
    'contact.emailInvalid': '請輸入有效的電子郵件',
    'contact.messageMin': '訊息至少10個字元',
    'contact.phone': '電話',
  },
  'en-US': {
    'home.greeting': 'Hello, I am ',
    'home.subtitle': 'Professional software engineer specializing in React.js, Node.js, and cloud technologies',
    'home.description': 'I am dedicated to creating excellent digital experiences, combining innovative technology and user needs to deliver high-quality software solutions for enterprises.',
    'home.viewProjects': 'View Projects',
    'home.contactMe': 'Contact Me',
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about my background and professional experience',
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected projects and technical practices',
    'contact.title': 'Contact',
    'contact.subtitle': 'Feel free to reach out via the form below!',
    'contact.infoTitle': 'Contact Info',
    'contact.infoDesc': 'You can fill out the form or contact me directly via email/social.',
    'contact.formTitle': 'Contact Form',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.nameMin': 'Name must be at least 2 characters',
    'contact.emailInvalid': 'Please enter a valid email address',
    'contact.messageMin': 'Message must be at least 10 characters',
    'contact.phone': 'Phone',
  },
  'ja-JP': {
    'home.greeting': 'こんにちは、私は',
    'home.subtitle': 'React.js、Node.js、クラウド技術に特化したソフトウェアエンジニア',
    'home.description': '革新的な技術とユーザーのニーズを組み合わせ、企業向けに高品質なソフトウェアソリューションを提供します。',
    'home.viewProjects': 'プロジェクトを見る',
    'home.contactMe': 'お問い合わせ',
    'about.title': '私について',
    'about.subtitle': '私の経歴と専門経験について詳しく知る',
    'projects.title': 'プロジェクト',
    'projects.subtitle': '厳選されたプロジェクトと技術実践',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '下記のフォームからお気軽にご連絡ください！',
    'contact.infoTitle': '連絡先情報',
    'contact.infoDesc': 'フォームまたはメール/ソーシャルで直接ご連絡いただけます。',
    'contact.formTitle': 'お問い合わせフォーム',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.send': '送信',
    'contact.sending': '送信中...',
    'contact.nameMin': 'お名前は2文字以上で入力してください',
    'contact.emailInvalid': '有効なメールアドレスを入力してください',
    'contact.messageMin': 'メッセージは10文字以上で入力してください',
    'contact.phone': '電話',
  },
};

function detectLocale(): 'zh-TW' | 'en-US' | 'ja-JP' {
  const saved = localStorage.getItem('locale');
  if (saved && messages[saved as 'zh-TW' | 'en-US' | 'ja-JP']) return saved as 'zh-TW' | 'en-US' | 'ja-JP';
  const browser = navigator.language;
  if (messages[browser as 'zh-TW' | 'en-US' | 'ja-JP']) return browser as 'zh-TW' | 'en-US' | 'ja-JP';
  const short = browser.split('-')[0];
  const match = (Object.keys(messages) as Array<'zh-TW' | 'en-US' | 'ja-JP'>).find((k) => k.startsWith(short));
  return match || 'zh-TW';
}

const locale = detectLocale();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/** IntlProvider 必須用作 function component 包裹 children，否則型別會報錯 */}
    {React.createElement(IntlProvider, { locale, messages: messages[locale], defaultLocale: 'zh-TW' }, <App />)}
  </React.StrictMode>
);

// 初始化 Stagewise Toolbar
const toolbarConfig = {
  plugins: [], // 你可以在這裡加入自訂 plugin
};

if (import.meta.env.VITE_STAGEWISE !== 'off') {
  document.addEventListener('DOMContentLoaded', () => {
    const toolbarRoot = document.createElement('div');
    toolbarRoot.id = 'stagewise-toolbar-root';
    document.body.appendChild(toolbarRoot);

    ReactDOM.createRoot(toolbarRoot).render(
      <React.StrictMode>
        <StagewiseToolbar config={toolbarConfig} />
      </React.StrictMode>
    );
  });
} 