<template>
  <form
    class="contact-form"
    @submit.prevent="handleSubmit"
  >
    <div class="form-header">
      <h3>預約免費現場估價</h3>
      <p>40 年老宅翻新經驗，誠信經營，絕非裝潢蟑螂</p>
    </div>

    <!-- 姓名 -->
    <div class="form-group">
      <label for="name">您的姓名 *</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        :class="{ 'error': errors.name }"
        placeholder="請輸入姓名 (例如：王先生)"
      />
      <span
        v-if="errors.name"
        class="error-message"
      >{{ errors.name }}</span>
    </div>

    <!-- 電話 -->
    <div class="form-group">
      <label for="phone">聯絡電話 *</label>
      <input
        type="tel"
        id="phone"
        v-model="form.phone"
        required
        :class="{ 'error': errors.phone }"
        placeholder="請輸入手機或市話"
      />
      <span
        v-if="errors.phone"
        class="error-message"
      >{{ errors.phone }}</span>
    </div>

    <!-- 地區選擇 (針對師傅想打北區的需求) -->
    <div class="form-group">
      <label for="area">房屋所在區域 *</label>
      <select
        id="area"
        v-model="form.area"
        required
        :class="{ 'error': errors.area }"
      >
        <option value="">請選擇區域</option>
        <option value="基隆市">基隆市</option>
        <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="新竹縣市">新竹縣市</option>
      </select>
      <span
        v-if="errors.area"
        class="error-message"
      >{{ errors.area }}</span>
    </div>

    <!-- 諮詢項目 -->
    <div class="form-group">
      <label for="subject">諮詢工程項目 *</label>
      <select
        id="subject"
        v-model="form.subject"
        required
        :class="{ 'error': errors.subject }"
      >
        <option value="">請選擇諮詢項目</option>
        <option value="舊房變新房">舊房變新房 (全屋翻新統包)</option>
        <option value="防水工程">防水工程</option>
        <option value="泥作工程">泥作工程 (砌磚抹牆、貼磁磚)</option>
        <option value="木作裝修">木作裝修 (釘天花板、做衣櫃)</option>
        <option value="室內裝潢修繕">油漆粉刷 / 室內裝潢修繕</option>
        <option value="現場估價預約">現場估價預約</option>
        <option value="其他工程諮詢">其他工程諮詢</option>
      </select>
      <span
        v-if="errors.subject"
        class="error-message"
      >{{ errors.subject }}</span>
    </div>

    <!-- 訊息內容 -->
    <div class="form-group">
      <label for="message">需求描述 (例如屋況、預計坪數) *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="4"
        :class="{ 'error': errors.message }"
        placeholder="請簡單描述您的房屋狀況，例如：30年公寓、約25坪、需全屋翻新..."
      ></textarea>
      <span
        v-if="errors.message"
        class="error-message"
      >{{ errors.message }}</span>
    </div>

    <button
      type="submit"
      class="btn-submit"
      :disabled="isSubmitting"
    >
      <i class="icon">📅</i> {{ isSubmitting ? '正在為您送出...' : '預約 40 年經驗師傅現場估價' }}
    </button>

    <div
      v-if="submitSuccess"
      class="success-message"
    >
      ✓ 訊息已成功送出！師傅會盡快致電與您聯繫。
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
      area: '',
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
      area: import.meta.env.VITE_GOOGLE_FORM_ENTRY_AREA || 'entry.123456791',
      subject: import.meta.env.VITE_GOOGLE_FORM_ENTRY_SUBJECT || 'entry.123456792',
      message: import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE || 'entry.123456793'
    }

    const validateForm = () => {
      // 清除之前的錯誤
      Object.keys(errors).forEach(key => delete errors[key])

      if (!form.name.trim()) errors.name = '請輸入聯絡人姓名'

      // 驗證電話 (台灣手機或市話格式)
      const phoneRegex = /^(\d{2,3}-?\d{3,4}-?\d{4}|09\d{8})$/
      if (!form.phone.trim()) {
        errors.phone = '請輸入聯絡電話'
      } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
        errors.phone = '請輸入正確的電話格式'
      }

      if (!form.area) errors.area = '請選擇房屋所在區域'
      if (!form.subject) errors.subject = '請選擇諮詢項目'

      if (!form.message.trim()) {
        errors.message = '請描述您的需求'
      } else if (form.message.trim().length < 5) {
        errors.message = '請輸入更詳細的需求 (至少5個字)'
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
          { name: FORM_ENTRIES.area, value: form.area },
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
      if (!validateForm()) return

      isSubmitting.value = true
      submitSuccess.value = false

      try {
        // 模擬發送 API 
        if (GOOGLE_FORM_URL) {
          // 提交到 Google Form
          await submitToGoogleForm()
        } else {
          await new Promise(resolve => setTimeout(resolve, 1500))
        }

        console.log('豐盈統包工程 - 收到新諮詢:', form)

        submitSuccess.value = true

        // 重置表單
        Object.keys(form).forEach(key => form[key] = '')

        setTimeout(() => {
          submitSuccess.value = false
        }, 5000)
      } catch (error) {
        alert('抱歉，送出失敗。請直接撥打電話聯繫師傅：02-1234-5678')
      } finally {
        isSubmitting.value = false
      }
    }

    return { form, errors, isSubmitting, submitSuccess, handleSubmit }
  }
}
</script>

<style scoped>
.contact-form {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-top: 5px solid #f39c12;
  /* 品牌橙色頂邊 */
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
}

.form-header p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1.2rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #dcdde1;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f39c12;
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.1);
}

/* 針對 Select 的自定義箭頭 */
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f39c12' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2rem;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #e74c3c;
  background-color: #fffafb;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-submit:hover:not(:disabled) {
  background: #e67e22;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(230, 126, 34, 0.3);
}

.btn-submit:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #d4edda;
  color: #155724;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  border: 1px solid #c3e6cb;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style>