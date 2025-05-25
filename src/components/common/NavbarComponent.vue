<template>
  <header>
    <nav class="d-flex justify-content-end position-relative pt-2" style="z-index: 60">
      <div
        class="d-flex align-items-center position-absolute top-0 start-0 p-4"
        style="width: 50vw; max-width: 736px"
      >
        <img src="/shared/logo.svg" alt="Space tourism" />
        <hr
          class="w-100 ms-4 opacity-25 d-none d-md-block"
          style="
            max-width: 560px;
            height: 1px;
            background: #fff;
            z-index: 20;
            border: none;
          "
        />
      </div>

      <ul
        class="d-none d-md-flex justify-content-between w-100 list-unstyled py-0 px-md-4"
        style="
          gap: 0.625em;
          padding-left: 9.25em;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          max-width: 736px;
        "
      >
        <li
          class="nav-link d-flex align-items-center text-uppercase"
          v-for="{ name, path, id } in routes"
          :key="id"
          :class="{ active: $route.path === path }"
        >
          <RouterLink class="text-white text-decoration-none" :to="path"
            ><span class="fw-bold me-1">{{ id }}</span> {{ name }}</RouterLink
          >
        </li>
      </ul>

      <button
        class="d-md-none border-0 bg-transparent position-absolute mt-4 me-3 top-0"
        :style="{
          backgroundImage: mobileNavOpen
            ? 'url(\'/shared/icon-close.svg\')'
            : 'url(\'/shared/icon-hamburger.svg\')',
          backgroundSize: 'cover',
          width: '24px',
          height: '24px',
          zIndex: 100,
        }"
        @click="toggleMobileNav"
      ></button>

      <MobileNav :mobileNavOpen="mobileNavOpen" />
    </nav>
  </header>
</template>

<script>
import MobileNav from "./MobileNav.vue";
import routes from "@/assets/data/routes";

export default {
  data() {
    return {
      mobileNavOpen: false,
      routes,
    };
  },
  components: {
    MobileNav,
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/navigation.css";

/* Tablet Responsiveness */
@media (max-width: 768px) {
  .nav-line {
    display: none;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  .nav-links {
    display: none;
  }
}
</style>
