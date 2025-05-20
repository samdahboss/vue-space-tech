<template>
  <div class="mobile-nav" :class="{ 'mobile-nav--hidden': !mobileNavOpen }">
    <ul class="mobile-nav-links">
      <li
        class="nav-link"
        v-for="{ name, path, id } in routes"
        :key="id"
        :class="{ active: $route.path === path }"
      >
        <RouterLink :to="path">
          <span class="fw-bold">{{ id }}</span>
          {{ name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from '@/assets/data/routes'

export default {
  data() {
    return {
      routes,
    }
  },
  props: {
    mobileNavOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '@/assets/styles/navigation.css';

.mobile-nav {
  display: none;
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
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
}
</style>
