<template>
  <main id="main-technology">
    <div class="technology-container">
      <h1 class="technology-title barlow-condensed"><span>03</span> Space launch 101</h1>
      <div class="technology-content">
        <div class="technology-left">
          <TechnologyNav :technologies="technologies" v-model="currentTechnology" />
          <TechnologyDetails :technology="technologies[currentTechnology]" :isDesktop="isDesktop" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TechnologyNav from '@/components/technology/TechnologyNav.vue'
import TechnologyDetails from '@/components/technology/TechnologyDetails.vue'
import technologies from '@/assets/data/technologies'
import { useBackgroundStore } from '@/stores/backgroundstore'

export default {
  name: 'TechnologyView',
  components: {
    TechnologyNav,
    TechnologyDetails,
  },
  data() {
    return {
      currentTechnology: 0,
      isDesktop: window.innerWidth > 940,
      technologies,
    }
  },
  mounted() {
    const backgroundStore = useBackgroundStore()
    backgroundStore.setBackgroundImages({
      desktop: '/technology/background-technology-desktop.jpg',
      tablet: '/technology/background-technology-tablet.jpg',
      mobile: '/technology/background-technology-mobile.jpg',
    })

    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    this.backgroundStore = backgroundStore
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth > 940
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    this.backgroundStore.clearBackground()
  },
}
</script>

<style scoped>
main#main-technology {
  padding: 2em 0em 4em 6em;
  height: 80%;
}

.technology-container {
  display: flex;
  flex-direction: column;
}

.technology-title {
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 10;
}

.technology-title span {
  color: #ffffff81;
}

.technology-content {
  display: flex;
  width: 100%;
}

.technology-left {
  width: 100%;
  display: flex;
  position: relative;
  padding-left: 6em;
}

@media (max-width: 940px) {
  main#main-technology {
    padding: 2em 0em 4em;
    height: 90%;
  }

  .technology-container {
    padding: 3em 0em;
    height: 100%;
    justify-content: space-between;
  }

  .technology-title {
    padding-left: 2em;
  }

  .technology-content {
    width: 100%;
  }

  .technology-left {
    width: 100%;
    padding: 0em 6em;
    flex-direction: column;
  }
}

@media (max-width: 570px) {
  main#main-technology {
    padding: 2em 0em;
    height: 90%;
  }

  .technology-title {
    padding-left: 2em;
    font-size: 1.5em;
  }

  .technology-container {
    height: 100%;
    gap: 1em;
  }

  .technology-left {
    padding: 0em 2em;
    gap: 0.5em;
  }
}
</style>
