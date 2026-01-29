<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>豐盈室內裝修</h3>
          <p class="highlight">大北區老屋翻新統包首選</p>
          <p>40年泥作木作經驗，誠信經營，絕非裝潢蟑螂。讓您的舊房變新房，打造安心居住空間。</p>
        </div>
        <div class="footer-section">
          <h4>服務項目</h4>
          <ul>
            <li>防水工程 / 泥作砌磚 / 貼磁磚</li>
            <li>木作天花板 / 手工衣櫃</li>
            <li>全屋粉刷 / 風格規劃</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>服務區域</h4>
          <p>基隆、宜蘭、台北、新北、桃園、新竹</p>
          <p>電話：0937-832597 林老闆</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 1984 豐盈股份有限公司. 版權所有.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: #2c3e50; color: #fff; padding: 60px 0 20px; font-family: sans-serif; }
.footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; padding: 0 20px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.footer-section h3, .footer-section h4 { color: #f39c12; margin-bottom: 20px; }
.footer-section p { opacity: 0.8; font-size: 0.95rem; line-height: 1.6; }
.footer-section ul { list-style: none; padding: 0; opacity: 0.8; line-height: 2; }
.footer-bottom { text-align: center; padding-top: 20px; font-size: 0.85rem; opacity: 0.5; }
.highlight { font-weight: bold; color: #fff; opacity: 1 !important; margin-bottom: 10px; }
</style>