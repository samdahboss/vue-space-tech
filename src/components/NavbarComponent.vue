<template>
  <header>
    <nav class="nav-container">
      <div class="brand-icon">
        <img src="/public/shared/logo.svg" alt="Space tourism" />
        <hr class="nav-line" />
      </div>

      <ul class="nav-links">
        <li class="nav-link" :class="{ 'active': $route.path === '/' }">
          <RouterLink to="/"><span class="fw-bold">00</span> Home</RouterLink>
        </li>
        <li class="nav-link" :class="{ 'active': $route.path === '/destination' }">
          <RouterLink to="/destination"><span class="fw-bold">01</span> Destination</RouterLink>
        </li>
        <li class="nav-link" :class="{ 'active': $route.path === '/crew' }">
          <RouterLink to="/crew"><span class="fw-bold">02</span> Crew</RouterLink>
        </li>
        <li class="nav-link" :class="{ 'active': $route.path === '/technology' }">
          <RouterLink to="/technology"><span class="fw-bold">03</span> Technology</RouterLink>
        </li>
      </ul>

      <button class="mobile-nav-toggle" @click="toggleMobileNav"></button>

      <div class="mobile-nav" :class="{ 'mobile-nav--hidden': !mobileNavOpen }">
        <ul class="mobile-nav-links">
          <li class="nav-link" :class="{ 'active': $route.path === '/' }">
            <RouterLink to="/"><span class="fw-bold">00</span> Home</RouterLink>
          </li>
          <li class="nav-link" :class="{ 'active': $route.path === '/destination' }">
            <RouterLink to="/destination"><span class="fw-bold">01</span> Destination</RouterLink>
          </li>
          <li class="nav-link" :class="{ 'active': $route.path === '/crew' }">
            <RouterLink to="/crew"><span class="fw-bold">02</span> Crew</RouterLink>
          </li>
          <li class="nav-link" :class="{ 'active': $route.path === '/technology' }">
            <RouterLink to="/technology"><span class="fw-bold">03</span> Technology</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    }
  }
}
</script>

<style scoped>
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

.nav-link {
  display: flex;
  align-items: center;
  padding: 1.25em 0em;
  text-transform: uppercase;
}

.nav-link.active {
  border-bottom: 3px solid #fff;
}

.nav-link:hover:not(.active) {
  border-bottom: 3px solid rgba(255, 255, 255, 0.36);
}

.nav-link a {
  text-decoration: none !important;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2px;
}

.nav-link a span {
  margin-right: 0.2em;
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
  background-color: transparent;
  background-image: url("/public/shared/icon-hamburger.svg");
  background-size: cover;
}

.mobile-nav {
  display: none;
}

/* Tablet Responsiveness */
@media (max-width: 768px) {
  .nav-container {
    padding: 0em;
  }

  .brand-icon {
    margin-left: 0;
    padding: 1em;
  }

  .nav-line {
    display: none;
  }

  .nav-links {
    width: 90%;
    max-width: 640px;
    padding: 0em 1.25em 0em 3.25em;
  }

  .brand-icon {
    width: 10%;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  .nav-links {
    display: none;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  .mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    padding-left: 2em;
    padding-top: 5em;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(25px);
    width: 70vw;
  }

  .mobile-nav--hidden.mobile-nav {
    display: none;
  }

  .nav-link {
    padding: 0.5em 0em;
  }

  .nav-link.active {
    border-bottom: none;
    border-right: 3px solid #fff;
  }

  .nav-link:hover:not(.active) {
    border-bottom: none;
    border-right: 3px solid rgba(255, 255, 255, 0.36);
  }

  .mobile-nav-toggle {
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    right: 1em;
    top: 1.25em;
    z-index: 100;
    background-image: url("/public/shared/icon-hamburger.svg");
    background-size: cover;
    outline: none;
    border: none;
    cursor: pointer;
  }
}
</style>