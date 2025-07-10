import { defineConfig } from 'vitepress';

console.log('VitePress config loaded');

export default defineConfig({
  title: 'Chang Jung Lu 開發者文件',
  description: '個人品牌網站全套產品文件與開發規範',
  themeConfig: {
    sidebar: [
      { text: '首頁', link: '/' },
      { text: 'BRD', link: '/BRD' },
      { text: 'PRD', link: '/PRD' },
      { text: 'FRD', link: '/FRD' },
      { text: 'SRD', link: '/SRD' },
      { text: 'API', link: '/API' },
      { text: 'DB', link: '/DB' },
      { text: 'User Story & Use Case', link: '/UserStory-UseCase' },
      { text: '功能級 User Story & Use Case', link: '/FeatureUserStory-UseCase' },
      { text: 'UIUX', link: '/UIUX' },
      { text: '測試案例', link: '/testcase' },
    ],
  },
  markdown: {
    mermaid: true,
  },
}); 