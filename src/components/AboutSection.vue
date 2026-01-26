<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">關於我們</h2>
          <p class="about-description">
            豐盈工程股份有限公司是一支擁有豐富經驗的專業工程與裝潢設計團隊，致力於為客戶打造理想的生活空間。
            從設計規劃到施工完成，我們提供一站式服務，確保每個細節都符合您的期望。
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">完成案件</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">年經驗</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">客戶滿意度</div>
            </div>
          </div>
        </div>
        <div class="about-features">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      features: [
        {
          id: 1,
          icon: '✨',
          title: '專業團隊',
          description: '擁有豐富經驗的設計師與施工團隊'
        },
        {
          id: 2,
          icon: '💰',
          title: '合理價格',
          description: '透明報價，無隱藏費用'
        },
        {
          id: 3,
          icon: '⏱️',
          title: '準時完工',
          description: '嚴格控管進度，確保準時交付'
        },
        {
          id: 4,
          icon: '🛡️',
          title: '品質保證',
          description: '使用優質材料，提供保固服務'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  background: var(--bg-light);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}

.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.feature-item {
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-stats {
    justify-content: center;
  }
  
  .about-features {
    grid-template-columns: 1fr;
  }
}
</style>
