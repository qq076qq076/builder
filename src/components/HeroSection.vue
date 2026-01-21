<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <h1 class="hero-title">打造您的理想空間</h1>
          <p class="hero-subtitle">專業裝潢設計，為您創造舒適美觀的居住環境</p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary" @click="scrollToContact">立即諮詢</a>
            <a href="#portfolio" class="btn btn-outline" @click="scrollToPortfolio">查看作品</a>
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
    scrollToContact() {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    scrollToPortfolio() {
      const element = document.getElementById('portfolio')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: 
    linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f0f0f0" width="1200" height="600"/><path d="M0,300 Q300,200 600,300 T1200,300" stroke="%23e0e0e0" stroke-width="2" fill="none"/></svg>');
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(230, 126, 34, 0.6) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease 0.4s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
