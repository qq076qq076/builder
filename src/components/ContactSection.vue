<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">聯絡我們</h2>
      <p class="section-subtitle">有任何問題或需求，歡迎與我們聯繫</p>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <h3>電話</h3>
              <p>0937-832-597</p>
            </div>
          </div>
          <!-- <div class="info-item">
            <div class="info-icon">📧</div>
            <div>
              <h3>電子郵件</h3>
              <p>info@fongying.com.tw</p>
            </div>
          </div> -->
          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div>
              <h3>營業時間</h3>
              <p>週一至週五 09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
  name: 'ContactSection',
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
