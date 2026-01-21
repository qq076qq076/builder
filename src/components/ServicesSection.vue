<template>
  <section id="services" class="section services">
    <div class="container">
      <h2 class="section-title">服務項目</h2>
      <p class="section-subtitle">提供全方位的裝潢設計服務，滿足您的各種需求</p>
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '🏠',
          title: '室內設計',
          description: '專業設計師為您規劃空間配置，打造舒適美觀的居住環境'
        },
        {
          id: 2,
          icon: '🔨',
          title: '裝潢施工',
          description: '經驗豐富的施工團隊，確保工程品質與進度'
        },
        {
          id: 3,
          icon: '🎨',
          title: '風格規劃',
          description: '現代、簡約、工業風等多種風格，滿足您的品味需求'
        },
        {
          id: 4,
          icon: '💡',
          title: '燈光設計',
          description: '專業燈光規劃，營造舒適的空間氛圍'
        },
        {
          id: 5,
          icon: '🪑',
          title: '家具配置',
          description: '協助挑選與配置家具，完美呈現設計理念'
        },
        {
          id: 6,
          icon: '✅',
          title: '售後服務',
          description: '完善的售後服務，確保您的權益與滿意度'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  background: var(--bg-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--white);
  padding: 2.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--text-light);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
