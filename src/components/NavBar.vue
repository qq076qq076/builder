<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-active': menuOpen }">
    <div class="container">
      <div class="nav-content">
        <!-- Logo 區塊：優化公司名稱顯示 -->
        <div class="logo" @click="scrollTo('home')">
          <div class="logo-wrapper">
            <span class="logo-main">豐盈</span>
            <span class="logo-sub">室內裝修工程</span>
          </div>
          <div class="experience-badge">40年經驗</div>
        </div>

        <!-- 導覽選單 -->
        <ul class="nav-menu" :class="{ 'active': menuOpen }">
          <li><a href="#home" @click.prevent="scrollTo('home')">首頁</a></li>
          <li><a href="#services" @click.prevent="scrollTo('services')">服務項目</a></li>
          <li><a href="#work" @click.prevent="scrollTo('work')">翻新案例</a></li>
          <li><a href="#about" @click.prevent="scrollTo('about')">關於豐盈</a></li>
          <li><a href="#contact" class="nav-cta" @click.prevent="scrollTo('contact')">預約估價</a></li>
        </ul>

        <!-- 手機版選單開關 -->
        <button class="menu-toggle" :class="{ 'open': menuOpen }" @click="toggleMenu" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const isScrolled = ref(false)
    const menuOpen = ref(false)

    const handleScroll = () => {
      // 滾動超過 50px 才改變背景顏色
      isScrolled.value = window.scrollY > 50
    }

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        // 考量到固定導覽列的高度，加入 offset
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        menuOpen.value = false
      }
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      menuOpen,
      scrollTo,
      toggleMenu
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent; /* 初始透明 */
}

/* 滾動後的樣式 */
.navbar.scrolled {
  background: rgba(44, 62, 80, 0.98); /* 使用 Hero 的深藍色 */
  padding: 0.8rem 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo 設計 */
.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-main {
  color: #f39c12; /* 品牌橙色 */
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.logo-sub {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 1px;
}

.experience-badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #f39c12;
  color: #f39c12;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

/* 選單樣式 */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}

.nav-menu a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 5px 0;
  position: relative;
}

.nav-menu a:not(.nav-cta):hover {
  color: #f39c12;
}

/* 導覽列 CTA 按鈕（預約估價） */
.nav-cta {
  background: #f39c12;
  padding: 8px 20px !important;
  border-radius: 50px;
  font-weight: 600 !important;
  box-shadow: 0 4px 10px rgba(243, 156, 18, 0.2);
}

.nav-cta:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

/* 手機版開關動畫 */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle span {
  width: 28px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

.menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

@media (max-width: 992px) {
  .nav-menu { gap: 1rem; }
  .logo-main { font-size: 1.4rem; }
}

@media (max-width: 768px) {
  .menu-toggle { display: flex; }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    background: #2c3e50;
    transition: right 0.4s ease;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu a {
    font-size: 1.2rem;
  }
}
</style>