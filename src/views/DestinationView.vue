<template>
  <main id="main">
    <div class="destination-container">
      <h1 class="destination-title barlow-condensed"><span>01</span> Pick your destination</h1>
      <div class="destination-content">
        <div class="destination-left">
          <img
            class="destination-image"
            :src="destinations[currentDestination].image"
            :alt="`Destination ${destinations[currentDestination].name}`"
          />
        </div>
        <div class="destination-right">
          <div class="destination-right-content">
            <DestinationNav :destinations="destinations" v-model="currentDestination" />
            <DestinationDetails :destination="destinations[currentDestination]" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DestinationDetails from '@/components/destination/DestinationDetails.vue'
import DestinationNav from '@/components/destination/DestinationNav.vue'
import destinations from '@/assets/data/destinations'
import { useBackgroundStore } from '@/stores/backgroundStore'

export default {
  name: 'DestinationView',
  components: {
    DestinationDetails,
    DestinationNav,
  },
  data() {
    return {
      currentDestination: 0,
      destinations,
    }
  },
  mounted() {
    const backgroundStore = useBackgroundStore()
    backgroundStore.setBackgroundImages({
      desktop: '/destination/background-destination-desktop.jpg',
      tablet: '/destination/background-destination-tablet.jpg',
      mobile: '/destination/background-destination-mobile.jpg',
    })
    this.backgroundStore = backgroundStore
  },
  beforeUnmount() {
    this.backgroundStore.clearBackground()
  },
}
</script>

<style scoped>
main {
  padding: 2em 2em 1em;
}

.destination-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.destination-title {
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0em 2em;
  z-index: 10;
}

.destination-title span {
  color: #ffffff81;
}

.destination-content {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  padding: 0em 2em;
}

.destination-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.destination-left img {
  width: 400px;
  height: 400px;
  padding: 0em;
  position: relative;
  z-index: -40;
}

.destination-right {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

.destination-right-content {
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  .destination-title {
    padding: 0em 0em;
    font-size: 1.3em;
  }

  .destination-content {
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }

  .destination-left {
    width: 100%;
    align-items: center;
    padding: 2em 0em;
  }

  .destination-left img {
    width: 300px;
    height: 300px;
  }

  .destination-right-content {
    max-width: 414px;
    flex-direction: column;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  main {
    padding: 1em 1em 0em;
    height: 100%;
  }

  .destination-container {
    height: 100%;
  }

  .destination-content {
    justify-content: center;
  }

  .destination-title {
    margin-top: 2em;
    font-size: 1.2em;
    text-align: center;
  }

  .destination-right-content {
    max-width: 327px;
    gap: 1em;
  }
}
</style>
