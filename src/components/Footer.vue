<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>豐盈工程股份有限公司</h3>
          <p>專業的工程與裝潢設計團隊，為您打造理想的生活空間。</p>
        </div>
        <div class="footer-section">
          <h4>快速連結</h4>
          <ul>
            <li><a href="#home" @click="scrollTo('home')">首頁</a></li>
            <li><a href="#services" @click="scrollTo('services')">服務項目</a></li>
            <li><a href="#portfolio" @click="scrollTo('portfolio')">作品展示</a></li>
            <li><a href="#about" @click="scrollTo('about')">關於我們</a></li>
            <li><a href="#contact" @click="scrollTo('contact')">聯絡我們</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>聯絡資訊</h4>
          <p>電話：0937832597</p>
          <p>郵件：info@fongying.com.tw</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 豐盈工程股份有限公司. 版權所有.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
.footer {
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-section p {
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.footer-section a:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
}
</style>
