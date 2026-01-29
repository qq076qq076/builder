<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <!-- 信任標籤：解決客戶最擔心的裝潢蟑螂問題 -->
          <div class="trust-badge">
            <span class="experience-tag">40年在地經驗</span>
            <span class="experience-tag">誠信經營 · 絕非裝潢蟑螂</span>
          </div>

          <h1 class="hero-title">
            專攻舊房變新房<br/>
            <span class="main-focus">全屋裝修工程統包</span>
          </h1>

          <!-- 將具體工項以更現代化的標籤方式呈現 -->
          <div class="service-chips">
            <span>水電防水</span>
            <span>泥作砌磚</span>
            <span>抹牆貼磚</span>
            <span>油漆粉刷</span>
            <span>釘天花板</span>
            <span>系統衣櫃</span>
          </div>

          <p class="hero-subtitle">
            從基礎水電到美學裝潢，職人親自帶料施工。<br/>
            老屋翻新交給四十年的老經驗，安心有保障。
          </p>

          <div class="hero-buttons">
            <a href="#contact" class="btn btn-outline" @click.prevent="scrollTo('contact')">預約免費現場估價</a>
            <a href="#portfolio" class="btn btn-outline" @click.prevent="scrollTo('portfolio')">查看翻新案例</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-overlay"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
/* --- 保留您原本的高質感背景 --- */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: 
    linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f0f0f0" width="1200" height="600"/><path d="M0,300 Q300,200 600,300 T1200,300" stroke="%23e0e0e0" stroke-width="2" fill="none"/></svg>');
  background-size: cover;
  background-position: center;
  color: #ffffff; /* 原 var(--white) */
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 保留原本的漸層遮罩 */
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(230, 126, 34, 0.6) 100%);
  z-index: 1;
}

/* --- 內容排版調整 --- */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-text {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 信任標籤樣式 */
.trust-badge {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease;
}

.trust-badge span {
  font-size: 0.9rem;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
}

.experience-tag {
  background: #f39c12; /* 暖橙色強調資歷 */
  color: #fff;
}

.integrity-tag {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease 0.1s both;
}

.main-focus {
  color: #f1c40f; /* 亮黃色點出核心業務 */
  font-size: 3rem;
}

/* 服務工項標籤 */
.service-chips {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.2s both;
}

.service-chips span {
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid rgba(241, 196, 15, 0.6);
  padding: 5px 15px;
  font-size: 1rem;
  color: #fff;
}

.hero-subtitle {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.3s both;
}

.hero-buttons {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease 0.4s both;
}

/* 按鈕強化質感 */
.btn {
  padding: 15px 35px;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #f39c12;
  color: white;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
}

.btn-primary:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #ffffff;
  color: #ffffff;
}

.btn-outline:hover {
  background: #ffffff;
  color: #2c3e50;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .main-focus { font-size: 2rem; }
  .hero-subtitle { font-size: 1.1rem; }
  .service-chips span { font-size: 0.9rem; }
  .hero-buttons .btn { width: 100%; max-width: 300px; }
}
</style>