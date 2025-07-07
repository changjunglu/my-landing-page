### SRD v1.0 ‧ 2025-07-06

#### 版本歷史
| 版本 | 日期 | 修改內容 | 負責人 |
|------|------|----------|--------|
| 1.0  | 2025-07-06 | 初版建立 | 系統自動生成 |

---

#### 1. 系統架構圖（C4 Model Level 1, 2）

**Level 1：系統上下文圖**
```mermaid
C4Context
Person(visitor, "訪客")
Person(owner, "Chang Jung Lu（網站主）")
System(website, "個人品牌網站")
System_Ext(email, "Email/LinkedIn/GitHub")
visitor -> website: 瀏覽、互動
owner -> website: 維護、更新
website -> email: 外部連結
```

**Level 2：容器圖**
```mermaid
C4Container
System_Boundary(website, "個人品牌網站") {
  Container(webapp, "React SPA", "TypeScript/React", "前端單頁應用，負責 UI/UX、表單驗證、多語言")
  Container_Static(static, "靜態資源", "HTML/CSS/JS", "部署於 CDN，提供靜態內容")
}
Person(visitor, "訪客")
Person(owner, "Chang Jung Lu")
visitor -> webapp: 瀏覽、互動
webapp -> static: 載入靜態資源
owner -> webapp: 維護、內容更新
```

---

#### 2. 非功能需求（量化）
| 類型 | 需求內容 | 指標/標準 | 追溯 FRD |
|------|----------|-----------|----------|
| 性能 | 首頁載入時間 | ≤ 2 秒 | FRD-6 |
| 性能 | 表單驗證回應 | ≤ 0.5 秒 | FRD-4,8 |
| 可用性 | 年可用率 | ≥ 99.9% | FRD-6 |
| 可維護性 | 程式碼覆蓋率 | ≥ 80% | FRD-6 |
| 可維護性 | 文件齊全 | 100% 主要功能 | FRD-1~9 |
| 安全 | 表單 XSS 防護 | 100% 攔截 | FRD-8 |
| 安全 | Email 隱私保護 | 不公開明文 | FRD-4 |
| 無障礙 | 通過 a11y 工具檢查 | 100% 主要頁面 | FRD-7 |

---

#### 3. 介面契約概要（API 文件指向）
- 聯絡表單 API（未來可擴充）：詳見 API 設計文件（doc/API.md）
- 多語言資源載入：前端靜態資源
- 外部連結：Email、LinkedIn、GitHub

---

#### 4. 追溯矩陣
| SRD 功能 ID | 來源 FRD 功能 ID | 來源 PRD 功能 ID | 來源 BRD 條款 ID |
|-------------|------------------|------------------|------------------|
| SRD-1（SPA 架構） | FRD-1~9 | PRD-1~10 | 5,6,9,10,11 |
| SRD-2（表單驗證/安全） | FRD-4,8 | PRD-4,8 | 9,11 |
| SRD-3（多語言/a11y） | FRD-5,7 | PRD-5,7 | 9,11 |
| SRD-4（外部連結） | FRD-9 | PRD-9 | 10 |

---

#### 簽署確認
| 角色 | 姓名 | 簽名 | 日期 |
|------|------|------|------|
| 產品經理 | Chang Jung Lu | | 2025-07-06 |
| 技術負責人 | Chang Jung Lu | | 2025-07-06 |
| 設計負責人 | Chang Jung Lu | | 2025-07-06 |
| 專案經理 | Chang Jung Lu | | 2025-07-06 |

文檔狀態：□ 草稿  ■ 已核准  □ 已發布 