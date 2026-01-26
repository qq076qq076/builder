# Google 表單串接設定說明

## 方式一：直接提交到 Google Forms（已實作）

### 步驟 1：建立 Google Form

1. 前往 [Google Forms](https://forms.google.com)
2. 建立新表單
3. 新增以下欄位（順序需與網站表單一致）：
   - 姓名（簡答題）
   - 電話（簡答題）
   - 電子郵件（簡答題）
   - 諮詢項目（下拉選單，選項：室內設計、裝潢施工、風格規劃、其他）
   - 訊息內容（段落）

### 步驟 2：取得表單提交 URL

1. 點擊表單右上角的「傳送」按鈕
2. 複製表單連結（例如：`https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform`）
3. 將連結中的 `/viewform` 改為 `/formResponse`
   - 範例：`https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse`

### 步驟 3：取得欄位 ID（entry.xxxxx）

有兩種方式：

#### 方法 A：使用瀏覽器開發者工具

1. 開啟 Google Form 的編輯頁面
2. 按 F12 開啟開發者工具
3. 切換到「Network」分頁
4. 提交一次測試表單
5. 在 Network 中找到 `formResponse` 請求
6. 查看 Form Data，會看到 `entry.123456789=值` 這樣的格式
7. `entry.123456789` 就是欄位 ID

#### 方法 B：使用 URL 參數測試

1. 在表單 URL 後加上參數：`?usp=pp_url&entry.123456789=測試姓名`
2. 提交表單
3. 查看回應，確認「測試姓名」出現在哪個欄位
4. 重複測試其他欄位，找出所有 entry ID

### 步驟 4：設定環境變數

在專案根目錄建立 `.env` 檔案：

```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_FORM_ENTRY_NAME=entry.123456789
VITE_GOOGLE_FORM_ENTRY_PHONE=entry.123456790
VITE_GOOGLE_FORM_ENTRY_EMAIL=entry.123456791
VITE_GOOGLE_FORM_ENTRY_SUBJECT=entry.123456792
VITE_GOOGLE_FORM_ENTRY_MESSAGE=entry.123456793
```

將上述值替換為您實際的 Google Form URL 和欄位 ID。

### 步驟 5：測試

1. 執行 `npm run dev`
2. 填寫表單並提交
3. 檢查 Google Form 的回應是否正確收到資料

---

## 方式二：使用 Google Apps Script（進階，更靈活）

如果需要更複雜的處理邏輯（如發送確認郵件、資料驗證等），可以使用 Google Apps Script。

### 步驟 1：建立 Google Apps Script

1. 前往 [Google Apps Script](https://script.google.com)
2. 建立新專案
3. 貼上以下程式碼：

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 將資料寫入 Google Sheets
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.email,
      data.subject,
      data.message
    ]);
    
    // 可選：發送確認郵件
    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: '感謝您的諮詢 - 豐盈工程',
        htmlBody: `
          <h2>親愛的 ${data.name}，</h2>
          <p>感謝您聯絡豐盈工程股份有限公司，我們已收到您的訊息，會盡快與您聯繫。</p>
          <p>您的諮詢內容：${data.message}</p>
          <p>此為自動回覆，請勿直接回覆此郵件。</p>
        `
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '表單已成功提交'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 步驟 2：部署為 Web App

1. 點擊「部署」→「新增部署作業」
2. 選擇「網頁應用程式」
3. 設定執行身份為「我」
4. 設定存取權限為「所有人」
5. 點擊「部署」
6. 複製 Web App URL

### 步驟 3：修改 ContactForm.vue

將 `handleSubmit` 中的提交邏輯改為：

```javascript
const response = await fetch('YOUR_WEB_APP_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(form)
})
```

---

## 注意事項

1. **CORS 限制**：Google Forms 有 CORS 限制，因此使用隱藏 iframe 方式提交
2. **欄位順序**：確保 Google Form 的欄位順序與網站表單一致
3. **必填欄位**：Google Form 中的必填設定不會影響網站表單的驗證
4. **測試**：建議先建立測試表單進行測試，確認資料正確傳遞

## 疑難排解

- **表單提交後沒有反應**：檢查瀏覽器控制台是否有錯誤，確認 URL 和 entry ID 是否正確
- **資料沒有出現在 Google Form**：確認 entry ID 是否正確對應到正確的欄位
- **CORS 錯誤**：這是正常的，因為使用 iframe 提交，不會影響功能
