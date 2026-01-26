<template>
  <form class="contact-form" @submit.prevent="handleSubmit" ref="formRef">
    <div class="form-group">
      <label for="name">姓名 *</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        :class="{ 'error': errors.name }"
        placeholder="請輸入您的姓名"
      />
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
    </div>

    <div class="form-group">
      <label for="phone">電話 *</label>
      <input
        type="tel"
        id="phone"
        v-model="form.phone"
        required
        :class="{ 'error': errors.phone }"
        placeholder="請輸入您的電話"
      />
      <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
    </div>

    <div class="form-group">
      <label for="email">電子郵件 *</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        required
        :class="{ 'error': errors.email }"
        placeholder="請輸入您的電子郵件"
      />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <label for="subject">諮詢項目</label>
      <select id="subject" v-model="form.subject">
        <option value="">請選擇諮詢項目</option>
        <option value="室內設計">室內設計</option>
        <option value="裝潢施工">裝潢施工</option>
        <option value="風格規劃">風格規劃</option>
        <option value="其他">其他</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">訊息內容 *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        :class="{ 'error': errors.message }"
        placeholder="請描述您的需求或問題"
      ></textarea>
      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
      {{ isSubmitting ? '送出中...' : '送出訊息' }}
    </button>

    <div v-if="submitSuccess" class="success-message">
      ✓ 訊息已成功送出！我們會盡快與您聯繫。
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactForm',
  setup() {
    const formRef = ref(null)
    const form = reactive({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const submitSuccess = ref(false)
    
    // Google Form 設定
    // 請將此 URL 替換為您的 Google Form 提交 URL
    // 取得方式：建立 Google Form → 右上角「傳送」→ 複製連結 → 將 /viewform 改為 /formResponse
    const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || ''
    
    // Google Form 欄位對應（entry.xxxxx 是 Google Form 的欄位 ID）
    // 取得方式：在表單 URL 後加上 ?usp=pp_url&entry.123456789=test 來測試，數字就是 entry ID
    const FORM_ENTRIES = {
      name: import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME || 'entry.123456789',
      phone: import.meta.env.VITE_GOOGLE_FORM_ENTRY_PHONE || 'entry.123456790',
      email: import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL || 'entry.123456791',
      subject: import.meta.env.VITE_GOOGLE_FORM_ENTRY_SUBJECT || 'entry.123456792',
      message: import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE || 'entry.123456793'
    }

    const validateForm = () => {
      // 清除之前的錯誤
      Object.keys(errors).forEach(key => delete errors[key])

      // 驗證姓名
      if (!form.name.trim()) {
        errors.name = '請輸入姓名'
      } else if (form.name.trim().length < 2) {
        errors.name = '姓名至少需要2個字元'
      }

      // 驗證電話
      if (!form.phone.trim()) {
        errors.phone = '請輸入電話'
      } else if (!/^[\d\s\-()+]+$/.test(form.phone)) {
        errors.phone = '請輸入有效的電話號碼'
      }

      // 驗證電子郵件
      if (!form.email.trim()) {
        errors.email = '請輸入電子郵件'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = '請輸入有效的電子郵件格式'
      }

      // 驗證訊息
      if (!form.message.trim()) {
        errors.message = '請輸入訊息內容'
      } else if (form.message.trim().length < 10) {
        errors.message = '訊息內容至少需要10個字元'
      }

      return Object.keys(errors).length === 0
    }

    const submitToGoogleForm = () => {
      return new Promise((resolve, reject) => {
        if (!GOOGLE_FORM_URL) {
          reject(new Error('未設定 Google Form URL'))
          return
        }

        // 建立隱藏 iframe 來提交表單
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.name = 'hidden_iframe'
        document.body.appendChild(iframe)

        // 建立隱藏表單
        const hiddenForm = document.createElement('form')
        hiddenForm.method = 'POST'
        hiddenForm.action = GOOGLE_FORM_URL
        hiddenForm.target = 'hidden_iframe'
        hiddenForm.style.display = 'none'

        // 建立表單欄位
        const fields = [
          { name: FORM_ENTRIES.name, value: form.name },
          { name: FORM_ENTRIES.phone, value: form.phone },
          { name: FORM_ENTRIES.email, value: form.email },
          { name: FORM_ENTRIES.subject, value: form.subject || '' },
          { name: FORM_ENTRIES.message, value: form.message }
        ]

        fields.forEach(field => {
          const input = document.createElement('input')
          input.type = 'hidden'
          input.name = field.name
          input.value = field.value
          hiddenForm.appendChild(input)
        })

        document.body.appendChild(hiddenForm)

        // 監聽 iframe 載入完成
        iframe.onload = () => {
          setTimeout(() => {
            document.body.removeChild(iframe)
            document.body.removeChild(hiddenForm)
            resolve()
          }, 1000)
        }

        // 提交表單
        hiddenForm.submit()

        // 設定超時處理
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe)
            document.body.removeChild(hiddenForm)
            resolve() // 即使超時也視為成功（Google Forms 可能不會回傳）
          }
        }, 3000)
      })
    }

    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true
      submitSuccess.value = false

      try {
        if (GOOGLE_FORM_URL) {
          // 提交到 Google Form
          await submitToGoogleForm()
        } else {
          // 如果沒有設定 Google Form URL，使用模擬提交
          await new Promise(resolve => setTimeout(resolve, 1500))
          console.log('表單資料:', form)
        }
        
        submitSuccess.value = true
        
        // 重置表單
        Object.keys(form).forEach(key => {
          form[key] = ''
        })

        // 5秒後隱藏成功訊息
        setTimeout(() => {
          submitSuccess.value = false
        }, 5000)
      } catch (error) {
        console.error('表單送出失敗:', error)
        alert('表單送出失敗，請稍後再試')
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formRef,
      form,
      errors,
      isSubmitting,
      submitSuccess,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.contact-form {
  background: var(--white);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #e74c3c;
}

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d4edda;
  color: #155724;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
}

.contact-form .btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}

.contact-form .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
