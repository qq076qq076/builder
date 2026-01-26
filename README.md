# 裝潢公司形象網站

使用 Vue3 建立的專業裝潢公司 landing page，包含完整的形象展示與聯絡表單功能。

## 功能特色

- 🏠 響應式設計，支援各種裝置
- 📝 完整的聯絡表單，包含表單驗證
- 🎨 現代化的 UI/UX 設計
- ⚡ 使用 Vite 快速開發與建置
- 🎯 平滑滾動導航

## 專案結構

```
builder/
├── src/
│   ├── components/
│   │   ├── NavBar.vue          # 導航列
│   │   ├── HeroSection.vue     # 首頁橫幅
│   │   ├── ServicesSection.vue  # 服務項目
│   │   ├── PortfolioSection.vue # 作品展示
│   │   ├── AboutSection.vue     # 關於我們
│   │   ├── ContactSection.vue   # 聯絡區塊
│   │   ├── ContactForm.vue      # 聯絡表單
│   │   └── Footer.vue           # 頁尾
│   ├── App.vue                  # 主應用程式
│   ├── main.js                  # 入口檔案
│   └── style.css                # 全域樣式
├── index.html
├── package.json
└── vite.config.js
```

## 安裝與執行

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器將在 `http://localhost:3000` 啟動

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 技術棧

- **Vue 3** - 前端框架
- **Vite** - 建置工具
- **CSS3** - 樣式設計

## 聯絡表單功能

聯絡表單包含以下欄位：
- 姓名（必填）
- 電話（必填，含格式驗證）
- 電子郵件（必填，含格式驗證）
- 諮詢項目（選填）
- 訊息內容（必填，最少10字元）

表單送出後會顯示成功訊息，並可重置表單。

### Google 表單串接

網站已支援串接 Google Forms，詳細設定說明請參考 [GOOGLE_FORM_SETUP.md](./GOOGLE_FORM_SETUP.md)。

**快速設定步驟：**

1. 建立 Google Form 並取得提交 URL
2. 取得表單欄位的 entry ID
3. 在專案根目錄建立 `.env` 檔案並設定環境變數：
```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_FORM_ENTRY_NAME=entry.123456789
VITE_GOOGLE_FORM_ENTRY_PHONE=entry.123456790
VITE_GOOGLE_FORM_ENTRY_EMAIL=entry.123456791
VITE_GOOGLE_FORM_ENTRY_SUBJECT=entry.123456792
VITE_GOOGLE_FORM_ENTRY_MESSAGE=entry.123456793
```

如果未設定 Google Form URL，表單會使用模擬提交模式（僅在控制台顯示資料）。

## 部署到 GitHub Pages

### 方式一：使用 GitHub Actions（推薦）

1. 將專案推送到 GitHub 倉庫
2. 在 GitHub 倉庫設定中啟用 Pages：
   - 進入 Settings → Pages
   - Source 選擇 "GitHub Actions"
3. 每次推送到 `main` 分支會自動部署

**注意**：如果您的倉庫名稱不是 `builder`，請修改 `vite.config.js` 中的 `base` 路徑：
```javascript
base: process.env.NODE_ENV === 'production' ? '/您的倉庫名稱/' : '/',
```

### 方式二：使用 gh-pages 套件

1. 安裝依賴（包含 gh-pages）：
```bash
npm install
```

2. 執行部署：
```bash
npm run deploy
```

**注意**：使用此方式前，請確保：
- 已初始化 git 倉庫
- 已設定 GitHub 遠端倉庫
- 修改 `vite.config.js` 中的 `base` 為您的倉庫名稱

### 自訂域名

如果使用自訂域名，將 `vite.config.js` 中的 `base` 改為 `'/'`。
