<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <!-- 信任標籤 -->
          <div class="trust-badge">
            <span class="experience-tag">40年在地經驗</span>
            <span class="integrity-tag">誠信經營 · 絕非裝潢蟑螂</span>
          </div>

          <h1 class="hero-title">
            專攻舊房變新房<br/>
            <span class="main-focus">全屋裝修工程統包</span>
          </h1>

          <!-- 服務工項標籤 -->
          <div class="service-chips">
            <span>水電防水</span>
            <span>泥作砌磚</span>
            <span>抹牆貼磚</span>
            <span>油漆粉刷</span>
            <span>釘天花板</span>
            <span>系統衣櫃</span>
          </div>

          <p class="hero-subtitle">
            從基礎水電到美學裝潢，職人親自帶料施工。<br class="desktop-only" />
            老屋翻新交給四十年的老經驗，安心有保障。
          </p>

          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary" @click.prevent="scrollTo('contact')">預約免費現場估價</a>
            <a href="#work" class="btn btn-outline" @click.prevent="scrollTo('work')">查看翻新案例</a>
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
        // 考慮到導覽列高度，減去 80px 的偏移量
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  /* 手機版建議用 min-height 而非固定 height，防止內容被裁切 */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: 
    linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f0f0f0" width="1200" height="600"/><path d="M0,300 Q300,200 600,300 T1200,300" stroke="%23e0e0e0" stroke-width="2" fill="none"/></svg>');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 100px 0; /* 增加上下內距，確保內容不會頂到螢幕邊緣 */
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(230, 126, 34, 0.6) 100%);
  z-index: 1;
}

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
  gap: 8px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap; /* 手機版自動換行 */
}

.trust-badge span {
  font-size: 0.85rem;
  padding: 5px 12px;
  border-radius: 4px;
  font-weight: 600;
  white-space: nowrap;
}

.experience-tag {
  background: #f39c12;
  color: #fff;
}

.integrity-tag {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.hero-title {
  font-size: 3.5rem; /* 電腦版略縮小 */
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.main-focus {
  color: #f1c40f;
  font-size: 2.8rem;
}

.service-chips {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.service-chips span {
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid rgba(241, 196, 15, 0.6);
  padding: 4px 12px;
  font-size: 0.95rem;
  color: #fff;
  white-space: nowrap;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 32px;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #f39c12;
  color: white;
  border: none;
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

/* --- 手機版 RWD 調整 --- */
@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px; /* 避開固定導覽列 */
  }

  .hero-title {
    font-size: 2.2rem; /* 標題縮小，防止斷行混亂 */
    margin-bottom: 1rem;
  }

  .main-focus {
    font-size: 1.8rem;
    display: block;
    margin-top: 5px;
  }

  .trust-badge {
    gap: 6px;
  }

  .trust-badge span {
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  .service-chips {
    gap: 6px;
  }

  .service-chips span {
    font-size: 0.85rem;
    padding: 3px 8px;
  }

  .hero-subtitle {
    font-size: 1.05rem;
    padding: 0 10px;
  }

  .desktop-only {
    display: none; /* 手機版不強制換行 */
  }

  .hero-buttons {
    flex-direction: column; /* 按鈕改為垂直堆疊 */
    align-items: center;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%; /* 按鈕滿版，方便大拇指點擊 */
    max-width: 320px;
    padding: 14px;
    font-size: 1rem;
  }
}

/* 針對極小螢幕 (iPhone SE) */
@media (max-width: 375px) {
  .hero-title {
    font-size: 1.8rem;
  }
  .main-focus {
    font-size: 1.5rem;
  }
}
</style>