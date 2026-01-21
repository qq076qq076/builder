<template>
  <section id="portfolio" class="section portfolio">
    <div class="container">
      <h2 class="section-title">作品展示</h2>
      <p class="section-subtitle">精選案例，展現我們的專業與創意</p>
      <div class="portfolio-grid">
        <div class="portfolio-item" v-for="item in portfolio" :key="item.id">
          <div class="portfolio-image">
            <div class="portfolio-placeholder">{{ item.emoji }}</div>
          </div>
          <div class="portfolio-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.style }}</p>
            <span class="portfolio-area">{{ item.area }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      portfolio: [
        {
          id: 1,
          emoji: '🏡',
          title: '現代簡約風格住宅',
          style: '現代簡約',
          area: '35坪'
        },
        {
          id: 2,
          emoji: '🏢',
          title: '工業風辦公室',
          style: '工業風',
          area: '50坪'
        },
        {
          id: 3,
          emoji: '🏘️',
          title: '北歐風格公寓',
          style: '北歐風',
          area: '25坪'
        },
        {
          id: 4,
          emoji: '🏛️',
          title: '新古典別墅',
          style: '新古典',
          area: '80坪'
        },
        {
          id: 5,
          emoji: '🏰',
          title: '日式禪風空間',
          style: '日式禪風',
          area: '30坪'
        },
        {
          id: 6,
          emoji: '🏗️',
          title: '混搭風格住宅',
          style: '混搭風',
          area: '40坪'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.portfolio-item {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.portfolio-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.portfolio-placeholder {
  font-size: 5rem;
  opacity: 0.8;
}

.portfolio-info {
  padding: 1.5rem;
}

.portfolio-info h3 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.portfolio-info p {
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.portfolio-area {
  display: inline-block;
  background: var(--secondary-color);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
