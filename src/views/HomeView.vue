<template>
  <main class="container-fluid h-80" id="main">
    <div class="row h-100">
      <div class="col-12 d-flex align-items-center">
        <div class="row w-100 mx-0 mt-4 mt-lg-0">
          <!-- Text Content -->
          <div
            class="col-md-6 d-flex flex-column justify-content-center text-md-start text-center mb-4 mb-md-0"
          >
            <h3 class="barlow-condensed fw-normal text-uppercase fs-1 mb-1">
              So, you want to travel to
            </h3>
            <h1
              class="bellefair fw-normal text-uppercase space-text display-1 mb-4"
              style="letter-spacing: 0.1em"
            >
              Space
            </h1>
            <p class="lh-lg">
              Let's face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and
              relax because we'll give you a truly out of this world experience!
            </p>
          </div>

          <!-- Explore Button -->
          <div
            class="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center"
          >
            <div
              class="explore-link bellefair fw-normal rounded-circle d-flex justify-content-center align-items-center"
              style="
                width: 272px;
                height: 272px;
                background-color: rgba(255, 255, 255, 0.4);
              "
            >
              <RouterLink
                to="/destination"
                class="text-decoration-none text-dark d-flex justify-content-center align-items-center rounded-circle bg-white w-100 h-100"
              >
                <p class="m-0 text-center text-uppercase fs-4">Explore</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useBackgroundStore } from "@/stores/backgroundstore";

export default {
  name: "HomeView",
  mounted() {
    const backgroundStore = useBackgroundStore();

    backgroundStore.setBackgroundImages({
      desktop: "/home/background-home-desktop.jpg",
      tablet: "/home/background-home-tablet.jpg",
      mobile: "/home/background-home-mobile.jpg",
    });

    this.backgroundStore = backgroundStore;
  },
  beforeUnmount() {
    // Remove the background and event listener when component is destroyed
    this.backgroundStore.clearBackground();
  },
};
</script>

<style scoped>
.explore-link:hover {
  border: 10px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  width: 150px;
  height: 150px;
  /* transition: all 0.3s ease-in-out 0.3s; */
}
.space-text {
  font-size: 6rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
/* Mobile Responsiveness */
@media (max-width: 768px) {
  .space-text {
    font-size: 5rem;
  }
  .explore-link {
    margin-top: 2rem;
  }
}

@media (max-width: 570px) {
  main {
    padding: 2em 1.5em;
  }

  .space-text {
    font-size: 3.5rem;
  }

  .explore-link a:hover {
    width: 140px;
    height: 140px;
    border-width: 5px;
  }
}

/* Extra small devices */
@media (max-width: 375px) {
  main {
    padding: 1.5em 1em;
  }

  .explore-link {
    width: 170px !important;
    height: 170px !important;
  }

  .explore-link a:hover {
    width: 120px;
    height: 120px;
  }
}
</style>
