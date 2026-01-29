<template>
  <section id="services" class="section work-section">
    <div class="container">
      <!-- 1. 標題區 -->
      <div class="section-header">
        <h2 class="section-title">專業工法與翻新實錄</h2>
        <p class="section-subtitle">豐盈具備 40 年大北區施工經驗，用實績證明實力，讓老屋重獲新生。</p>
      </div>

      <!-- 2. 核心服務快選 (手機版自動並排或換行) -->
      <div class="services-mini-grid">
        <div class="service-mini-card" v-for="service in services" :key="service.id">
          <div class="mini-icon">{{ service.emoji }}</div>
          <div class="mini-text">
            <h4>{{ service.title }}</h4>
            <p>{{ service.shortDesc }}</p>
          </div>
        </div>
      </div>

      <!-- 3. 精選翻新案例 (手機版圖上文下) -->
      <div id="work" class="portfolio-showcase">
        <h3 class="sub-section-title">案例實錄 (施工前後對比)</h3>
        <div class="portfolio-list">
          <div class="portfolio-card" v-for="(item, itemIdx) in portfolio" :key="item.id">
            
            <!-- 左側：圖片區 -->
            <div class="portfolio-gallery">
              <div class="main-image-container" @click="openLightbox(item.images[item.activeIdx].url)">
                <img :src="item.images[item.activeIdx].url" :alt="item.title" class="main-image clickable">
                <div class="image-label" :class="item.images[item.activeIdx].type">
                  {{ item.images[item.activeIdx].label }}
                </div>
                <div class="zoom-hint"><span>🔍 點擊查看大圖</span></div>
              </div>
              
              <div class="thumbnail-grid">
                <div 
                  v-for="(img, imgIdx) in item.images" 
                  :key="imgIdx"
                  class="thumb-item"
                  :class="{ active: item.activeIdx === imgIdx }"
                  @click="item.activeIdx = imgIdx"
                >
                  <img :src="img.url" alt="縮略圖">
                  <span class="thumb-tag">{{ img.label }}</span>
                </div>
              </div>
            </div>

            <!-- 右側：文字說明 -->
            <div class="portfolio-detail">
              <div class="meta">
                <span class="category">{{ item.type }}</span>
                <span class="location">{{ item.location }}</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p class="description">{{ item.description }}</p>
              <div class="work-tags">
                <span v-for="(tag, index) in item.tags" :key="index">#{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- 5. Lightbox 大圖彈窗層 -->
      <transition name="fade">
        <div v-if="lightboxUrl" class="lightbox-overlay" @click.self="closeLightbox">
          <button class="close-btn" @click="closeLightbox">&times;</button>
          <div class="lightbox-content">
            <img :src="lightboxUrl" class="lightbox-img">
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkSection',
  data() {
    return {
      lightboxUrl: null,
      services: [
        { id: 1, emoji: '🚿', title: '防水工程', shortDesc: '老舊管線更新、全屋防漏施作。' },
        { id: 2, emoji: '🧱', title: '泥作砌磚', shortDesc: '隔間砌磚、抹牆找平、磁磚鋪設。' },
        { id: 3, emoji: '🔨', title: '木作裝潢', shortDesc: '手工衣櫃、釘天花板、造型裝修。' },
        { id: 4, emoji: '🎨', title: '油漆粉刷', shortDesc: '細膩補土、噴漆刷漆、風格規劃。' }
      ],
      portfolio: [
        {
          id: 1,
          type: '全屋翻新統包',
          location: '新北板橋區',
          activeIdx: 0,
          title: '30年公寓大改造：舊房變新房',
          description: '此案為老舊公寓全面翻新。工程包含水電管線全數更換、衛浴泥作重新打底防水、並施作客製化衣櫃與天花板。',
          tags: ['防水工程', '泥作隔間', '老屋翻新'],
          images: [
            { url: '/img/462332.jpg', label: '完工照', type: 'after' },            
            { url: '/img/462489_0.jpg', label: '施工中', type: 'before' },            
            { url: '/img/462317_0.jpg', label: '原始屋況', type: 'detail' },   
          ]
        },
        {
          id: 2,
          type: '木作/收納規劃',
          location: '桃園中壢區',
          activeIdx: 0,
          title: '系統木作衣櫃與天花板美化',
          description: '利用老師傅 40 年木作手藝，解決畸零空間收納問題。天花板採用輕鋼架配合造型收邊，隱藏老舊管線。',
          tags: ['系統衣櫃', '釘天花板', '木作裝潢'],
          images: [
            { url: '/img/462333.jpg', label: '完工照', type: 'after' },            
            { url: '/img/462498_0.jpg', label: '施工中', type: 'before' },            
            { url: '/img/462322_0.jpg', label: '原始屋況', type: 'detail' },            
          ]
        }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    },
    openLightbox(url) {
      this.lightboxUrl = url;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxUrl = null;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
/* --- 電腦版樣式 --- */
.work-section { padding: 100px 0; background: #fdfdfd; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.section-header { text-align: center; margin-bottom: 50px; }
.section-title { font-size: 2.5rem; color: #2c3e50; font-weight: 800; }
.section-subtitle { color: #7f8c8d; }

.services-mini-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; margin-bottom: 60px; }
.service-mini-card { background: #fff; padding: 20px; border-radius: 10px; display: flex; align-items: center; gap: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eee; }
.mini-icon { font-size: 2rem; background: #fdf2e2; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
.mini-text h4 { margin: 0; color: #2c3e50; }
.mini-text p { margin: 5px 0 0; font-size: 0.85rem; color: #7f8c8d; }

.portfolio-list { display: flex; flex-direction: column; gap: 50px; }
.portfolio-card { display: grid; grid-template-columns: 1.1fr 0.9fr; background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #eee; }

.portfolio-gallery { padding: 15px; background: #f8f9fa; }
.main-image-container { position: relative; height: 350px; border-radius: 8px; overflow: hidden; margin-bottom: 12px; cursor: zoom-in; }
.main-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.main-image-container:hover .main-image { transform: scale(1.02); }
.zoom-hint { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.4); color: #fff; font-size: 0.8rem; padding: 8px; text-align: center; opacity: 0; transition: 0.3s; }
.main-image-container:hover .zoom-hint { opacity: 1; }
.image-label { position: absolute; top: 15px; right: 15px; padding: 5px 15px; border-radius: 4px; color: #fff; font-weight: bold; font-size: 0.85rem; z-index: 2; }
.image-label.after { background: #27ae60; }
.image-label.before { background: #e74c3c; }

.thumbnail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 10px; }
.thumb-item { height: 60px; cursor: pointer; border-radius: 4px; overflow: hidden; border: 2px solid transparent; opacity: 0.6; transition: 0.2s; position: relative; }
.thumb-item.active { border-color: #f39c12; opacity: 1; transform: scale(1.05); }
.thumb-item img { width: 100%; height: 100%; object-fit: cover; }
.thumb-tag { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); color: #fff; font-size: 0.6rem; text-align: center; }

.portfolio-detail { padding: 40px; }
.meta { margin-bottom: 10px; font-weight: bold; display: flex; gap: 15px; font-size: 0.9rem; }
.category { color: #f39c12; }
.location { color: #bdc3c7; }
.portfolio-detail h3 { font-size: 1.6rem; color: #2c3e50; margin-bottom: 15px; }
.description { color: #7f8c8d; line-height: 1.8; margin-bottom: 20px; }
.work-tags span { margin-right: 8px; font-size: 0.8rem; background: #f1f2f6; padding: 4px 10px; border-radius: 4px; color: #34495e; }

/* Banner */
.trust-cta-banner { max-width: 1000px; margin: 80px auto 0; background: #2c3e50; border-radius: 20px; position: relative; overflow: hidden; }
.banner-inner { display: flex; align-items: center; justify-content: space-between; padding: 50px 60px; position: relative; z-index: 2; gap: 40px; }
.banner-content { flex: 1; text-align: left; }
.banner-badge { background: rgba(243, 156, 18, 0.2); color: #f39c12; padding: 4px 12px; border-radius: 4px; font-size: 0.85rem; font-weight: 700; display: inline-block; margin-bottom: 10px; border: 1px solid rgba(243, 156, 18, 0.3); }
.banner-title { color: #fff; font-size: 1.8rem; font-weight: 800; margin: 0; }
.banner-desc { color: rgba(255, 255, 255, 0.8); font-size: 1.1rem; line-height: 1.7; margin: 15px 0 25px; }
.area-tags { display: flex; gap: 12px; flex-wrap: wrap; }
.area-tags span { background: rgba(255, 255, 255, 0.1); color: #fff; padding: 4px 12px; border-radius: 50px; font-size: 0.9rem; border: 1px solid rgba(255, 255, 255, 0.1); }
.btn-cta { display: flex; align-items: center; gap: 15px; background: #f39c12; color: #fff; padding: 18px 35px; border-radius: 12px; text-decoration: none; font-weight: 800; font-size: 1.2rem; transition: 0.3s; white-space: nowrap; box-shadow: 0 10px 20px rgba(243, 156, 18, 0.3); }
.bg-shield-decor { position: absolute; right: -20px; bottom: -30px; font-size: 12rem; opacity: 0.05; color: #fff; transform: rotate(-15deg); pointer-events: none; }

/* Lightbox */
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 3000; display: flex; align-items: center; justify-content: center; cursor: zoom-out; }
.lightbox-img { max-width: 90%; max-height: 90vh; border: 3px solid #fff; object-fit: contain; }
.close-btn { position: absolute; top: 20px; right: 30px; background: none; border: none; color: #fff; font-size: 3rem; cursor: pointer; }

/* --- 📱 手機版 RWD 調整 --- */
@media (max-width: 992px) {
  .work-section { padding: 60px 0; }
  .section-title { font-size: 2rem; }
  .portfolio-card { grid-template-columns: 1fr; }
  .banner-inner { flex-direction: column; padding: 40px 30px; text-align: center; gap: 30px; }
  .banner-content { text-align: center; }
  .area-tags { justify-content: center; }
  .btn-cta { width: 100%; justify-content: center; font-size: 1.1rem; padding: 15px 20px; }
}

@media (max-width: 768px) {
  .main-image-container { height: 250px; }
  .portfolio-detail { padding: 25px 20px; }
  .portfolio-detail h3 { font-size: 1.4rem; }
  .banner-title { font-size: 1.5rem; }
  .close-btn { top: 10px; right: 20px; font-size: 2.5rem; }
  .thumbnail-grid { grid-template-columns: repeat(3, 1fr); } /* 手機版固定三列比較整齊 */
}

@media (max-width: 480px) {
  .btn-cta { font-size: 1rem; }
  .banner-desc { font-size: 0.95rem; }
  .services-mini-grid { grid-template-columns: 1fr; } /* 極小螢幕服務卡片一格一列 */
}

/* 動畫 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>