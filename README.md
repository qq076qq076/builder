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
