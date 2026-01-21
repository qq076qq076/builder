<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    ServicesSection,
    PortfolioSection,
    AboutSection,
    ContactSection,
    Footer
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
