<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
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

    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true
      submitSuccess.value = false

      try {
        // 模擬 API 呼叫
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // 這裡可以實際發送表單資料到後端
        console.log('表單資料:', form)
        
        submitSuccess.value = true
        
        // 重置表單
        Object.keys(form).forEach(key => {
          form[key] = ''
        })

        // 3秒後隱藏成功訊息
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
