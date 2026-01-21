<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <h2>裝潢設計</h2>
        </div>
        <ul class="nav-menu" :class="{ 'active': menuOpen }">
          <li><a href="#home" @click="scrollTo('home')">首頁</a></li>
          <li><a href="#services" @click="scrollTo('services')">服務項目</a></li>
          <li><a href="#portfolio" @click="scrollTo('portfolio')">作品展示</a></li>
          <li><a href="#about" @click="scrollTo('about')">關於我們</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">聯絡我們</a></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu">
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
      isScrolled.value = window.scrollY > 50
    }

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled {
  box-shadow: var(--shadow-lg);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-menu a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-menu a:hover {
  color: var(--secondary-color);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-color);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    flex-direction: column;
    background: var(--white);
    width: 100%;
    padding: 2rem 0;
    box-shadow: var(--shadow-lg);
    transition: left 0.3s ease;
    gap: 1.5rem;
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>
