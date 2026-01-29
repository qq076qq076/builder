<template>
  <section id="about" class="section about-merge">
    <div class="container">
      <div class="about-wrapper">
        <!-- 1. 標題與品牌故事 -->
        <div class="about-header">
          <span class="since-tag">SINCE 1984</span>
          <h2 class="main-title">職人精神 · 四十載傳承</h2>
          <div class="story-content">
            <p>
              <strong>豐盈股份有限公司</strong> 擁有超過 40 年的一線裝修實戰經驗。我們深耕於大北區，由資深師父領軍，專攻「舊房變新房」的全屋翻新工程。
            </p>
            <p>
              我們深知市場上「裝潢蟑螂」與報價不透明的亂象，因此豐盈堅持<strong>誠信報價、責任施工</strong>。從拆除、水電泥作到木作衣櫃，每一道工序皆由 40 年經驗的職人親自把關，絕不外包給來路不明的工班。
            </p>
          </div>
        </div>

        <!-- 2. 核心數據區 (手機版自動排列) -->
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-num">40+</span>
            <span class="stat-label">載裝修經驗</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">500+</span>
            <span class="stat-label">老屋翻新案例</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">100%</span>
            <span class="stat-label">誠信不跳票</span>
          </div>
        </div>

        <!-- 3. 服務區域與行動呼籲卡片 -->
        <div class="trust-action-card">
          <div class="card-content">
            <div class="info-side">
              <h3 class="card-title">大北區翻新首選：職人誠信經營</h3>
              <p class="card-desc">老屋的問題，交給四十年的老經驗最放心。我們在以下區域為您服務：</p>
              <div class="area-tags">
                <span>📍 基隆</span>
                <span>📍 新北</span>
                <span>📍 桃園</span>
                <span>📍 新竹</span>
              </div>
            </div>
            <div class="btn-side">
              <a href="#contact" class="btn-cta" @click.prevent="scrollTo('contact')">
                免費預約現場估價 <i class="arrow">→</i>
              </a>
            </div>
          </div>
          <!-- 裝飾浮水印 -->
          <div class="watermark">🛡️</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      if (element) {
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
.about-merge {
  padding: 100px 0;
  background: #ffffff;
  overflow: hidden;
}

.about-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

/* 標題與故事 */
.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.since-tag {
  color: #f39c12;
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 1rem;
}

.main-title {
  font-size: 2.8rem;
  color: #2c3e50;
  margin: 15px 0 30px;
  font-weight: 800;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
}

.story-content p {
  font-size: 1.15rem;
  line-height: 2;
  color: #555;
  margin-bottom: 20px;
}

.story-content strong {
  color: #2c3e50;
  border-bottom: 2px solid #f39c12;
}

/* 數據卡片 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.stat-card {
  background: #f8f9fa;
  padding: 40px 20px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-num {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  color: #f39c12;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 600;
}

/* 底部行動卡片 */
.trust-action-card {
  background: #2c3e50;
  border-radius: 20px;
  padding: 50px 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  gap: 40px;
}

.info-side {
  flex: 1;
}

.card-title {
  color: #f39c12;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.card-desc {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.area-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.area-tags span {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-cta {
  background: #f39c12;
  color: #fff;
  padding: 18px 35px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-cta:hover {
  background: #e67e22;
  transform: scale(1.05);
}

.watermark {
  position: absolute;
  right: -20px;
  bottom: -30px;
  font-size: 10rem;
  opacity: 0.05;
  color: #fff;
  transform: rotate(-15deg);
  pointer-events: none;
}

/* --- 📱 手機版 RWD 調整 --- */
@media (max-width: 992px) {
  .card-content {
    flex-direction: column;
    text-align: center;
  }
  .area-tags {
    justify-content: center;
  }
  .btn-cta {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .about-merge {
    padding: 60px 0;
  }
  .main-title {
    font-size: 2rem;
  }
  .story-content p {
    font-size: 1rem;
    line-height: 1.8;
  }
  .stats-grid {
    grid-template-columns: 1fr; /* 手機版數據改為一列 */
    gap: 15px;
  }
  .stat-card {
    padding: 25px;
  }
  .stat-num {
    font-size: 2.5rem;
  }
  .trust-action-card {
    padding: 40px 25px;
  }
  .card-title {
    font-size: 1.5rem;
  }
}
</style>