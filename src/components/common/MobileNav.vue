<template>
  <div
    class="mobile-nav position-absolute top-0 end-0 vh-100 z-index-50"
    :class="{ 'd-flex': mobileNavOpen, 'd-none': !mobileNavOpen }"
    style="backdrop-filter: blur(25px)"
  >
    <ul class="mobile-nav-links d-flex d-md-none flex-column ps-4 pt-5 w-100">
      <li
        class="nav-link"
        v-for="{ name, path, id } in routes"
        :key="id"
        :class="{ active: $route.path === path }"
      >
        <RouterLink class="text-white text-decoration-none" :to="path">
          <span class="fw-bold me-1">{{ id }}</span>
          {{ name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "@/assets/data/routes";

export default {
  data() {
    return {
      routes,
    };
  },
  props: {
    mobileNavOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/navigation.css";

.mobile-nav {
  background-color: rgba(255, 255, 255, 0.05);
  width: 70vw;
}

/* Mobile Responsiveness - most of the styles have been moved to template */
@media (max-width: 570px) {
  .mobile-nav-links {
    gap: 1em;
  }
}
</style>
