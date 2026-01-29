<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-content">
        <!-- 左側：品牌故事與核心價值 -->
        <div class="about-text">
          <span class="sub-title">SINCE 1984</span>
          <h2 class="section-title">關於豐盈</h2>
          <p class="about-description">
            <strong>豐盈股份有限公司</strong> 擁有超過 40 年的一線裝修實戰經驗。我們深耕於台北與鄰近地區，由資深師傅領軍，專攻「舊房變新房」的全屋翻新工程。
          </p>
          <p class="about-description">
            我們深知市場上「裝潢蟑螂」與報價不透明的亂象，因此豐盈堅持<strong>誠信報價、責任施工</strong>。從拆除、泥作砌磚抹牆，到細膩的油漆粉刷、木作衣櫃與天花板施工，每一道工序皆由 40 年經驗的職人親自把關，不外包給來路不明的廉價工班。
          </p>
          
          <!-- 數據指標：強化 40 年實力 -->
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">40+</div>
              <div class="stat-label">載裝修經驗</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">老屋翻新案例</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">誠信不跳票</div>
            </div>
          </div>
        </div>

        <!-- 右側：核心優勢卡片 -->
        <div class="about-features">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.iconClass">{{ feature.emoji }}</i>
            </div>
            <div class="feature-info">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
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
          emoji: '🏗️',
          title: '合法公司經營',
          description: '豐盈為正規註冊股份有限公司，契約透明，杜絕裝潢蟑螂。'
        },
        {
          id: 2,
          emoji: '🛠️',
          title: '一條龍全能施工',
          description: '水電、泥作、木作、油漆全包，不需重複溝通，進度完美銜接。'
        },
        {
          id: 3,
          emoji: '📋',
          title: '職人嚴選材料',
          description: '40 年經驗只挑好料，使用一級建材，確保舊宅翻新後的安全性。'
        },
        {
          id: 4,
          emoji: '🛡️',
          title: '完善售後保固',
          description: '在地深耕四十年，完工才是服務的開始，修繕問題一通電話即刻處理。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  background: #ffffff;
  padding: 100px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr; /* 調整比例，左側敘述多一點 */
  gap: 5rem;
  align-items: flex-start;
}

.sub-title {
  color: #f39c12;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.section-title {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 800;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #555;
  margin-bottom: 1.5rem;
}

.about-description strong {
  color: #2c3e50;
  border-bottom: 2px solid #f39c12;
}

/* 數據指標樣式 */
.about-stats {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f39c12;
  margin-bottom: 5px;
}

.stat-label {
  color: #7f8c8d;
  font-size: 0.95rem;
  font-weight: 600;
}

/* 優勢特色樣式 */
.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border: 1px solid #eee;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
  border-color: #f39c12;
}

.feature-icon {
  font-size: 2rem;
  background: #fdf2e2;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
}

.feature-info h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 5px;
  font-weight: 700;
}

.feature-info p {
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 響應式調整 */
@media (max-width: 1200px) {
  .about-content {
    gap: 2rem;
  }
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }

  .about-stats {
    gap: 1.5rem;
    justify-content: space-around;
  }
}

@media (max-width: 480px) {
  .about-stats {
    flex-wrap: wrap;
    justify-content: center;
  }
  .stat-item {
    flex: 0 0 40%;
  }
}
</style>