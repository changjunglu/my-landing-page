### API 設計文件 v1.0 ‧ 2025-07-06

#### 版本歷史
| 版本 | 日期 | 修改內容 | 負責人 |
|------|------|----------|--------|
| 1.0  | 2025-07-06 | 初版建立 | 系統自動生成 |

---

#### 1. OpenAPI 3.1 YAML

```yaml
openapi: 3.1.0
info:
  title: Chang Jung Lu 個人品牌網站 API
  version: 1.0.0
  description: 聯絡表單 API 文件
servers:
  - url: https://changjunglu.com/api
paths:
  /contact:
    post:
      summary: 聯絡表單送出
      description: 用戶填寫聯絡表單後送出訊息
      operationId: submitContactForm
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  minLength: 2
                  maxLength: 20
                  description: 姓名
                email:
                  type: string
                  format: email
                  description: 電子郵件
                message:
                  type: string
                  minLength: 10
                  maxLength: 500
                  description: 訊息內容
              required:
                - name
                - email
                - message
      responses:
        '200':
          description: 成功送出
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  message:
                    type: string
              example:
                success: true
                message: "訊息已送出！"
        '400':
          description: 請求格式錯誤或驗證失敗
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  error:
                    type: string
              example:
                success: false
                error: "Email 格式錯誤"
        '429':
          description: 請求過於頻繁
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  error:
                    type: string
              example:
                success: false
                error: "請稍後再試"
        '500':
          description: 伺服器錯誤
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                  error:
                    type: string
              example:
                success: false
                error: "伺服器錯誤，請聯絡管理員"
```

---

#### 2. curl 範例

**送出聯絡表單**
```bash
curl -X POST https://changjunglu.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "王小明",
    "email": "test@example.com",
    "message": "您好，我想進一步合作。"
  }'
```

---

#### 簽署確認
| 角色 | 姓名 | 簽名 | 日期 |
|------|------|------|------|
| 產品經理 | Chang Jung Lu | | 2025-07-06 |
| 技術負責人 | Chang Jung Lu | | 2025-07-06 |
| 設計負責人 | Chang Jung Lu | | 2025-07-06 |
| 專案經理 | Chang Jung Lu | | 2025-07-06 |

文檔狀態：□ 草稿  ■ 已核准  □ 已發布 