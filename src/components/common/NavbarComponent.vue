<template>
  <header>
    <nav class="nav-container">
      <div class="brand-icon">
        <img src="/shared/logo.svg" alt="Space tourism" />
        <hr class="nav-line" />
      </div>

      <ul class="nav-links">
        <li
          class="nav-link"
          v-for="{ name, path, id } in routes"
          :key="id"
          :class="{ active: $route.path === path }"
        >
          <RouterLink :to="path"
            ><span class="fw-bold">{{ id }}</span> {{ name }}</RouterLink
          >
        </li>
      </ul>

      <button class="mobile-nav-toggle" @click="toggleMobileNav"></button>

      <MobileNav :mobileNavOpen="mobileNavOpen" />
    </nav>
  </header>
</template>

<script>
import MobileNav from './MobileNav.vue'
import routes from '@/assets/data/routes'

export default {
  data() {
    return {
      mobileNavOpen: false,
      routes,
    }
  },
  components: {
    MobileNav,
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    },
  },
}
</script>

<style scoped>
@import '@/assets/styles/navigation.css';

/* Navigation classes */
.nav-container {
  padding: 2em 0 0em;
  display: flex;
  justify-content: end;
  position: relative;
  z-index: 60;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 0.625em;
  padding: 0em 4.25em 0em 9.25em;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  width: 100%;
  max-width: 736px;
  justify-content: space-between;
}

.brand-icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  max-width: 736px;
  padding: 2em;
}

.nav-line {
  max-width: 560px;
  width: 100%;
  height: 1px;
  background: #fff;
  opacity: 25%;
  margin-left: 2em;
  z-index: 20;
  border: none;
}

.mobile-nav-toggle {
  display: none;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 1em;
  top: 1.25em;
  z-index: 100;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url('/public/shared/icon-hamburger.svg');
  background-size: cover;
}

/* Tablet Responsiveness */
@media (max-width: 768px) {
  .nav-container {
    padding: 0em;
  }

  .brand-icon {
    margin-left: 0;
    padding: 1em;
    width: 10%;
  }

  .nav-line {
    display: none;
  }

  .nav-links {
    width: 90%;
    max-width: 640px;
    padding: 0em 1.25em 0em 3.25em;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  .nav-links {
    display: none;
  }

  .mobile-nav-toggle {
    display: block;
  }
}
</style>
