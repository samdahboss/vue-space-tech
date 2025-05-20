<template>
  <main class="crew-container" id="main">
    <h1 class="crew-title barlow-condensed"><span>02</span> Meet your crew</h1>
    <div class="crew-content">
      <div class="crew-left">
        <CrewDetails :crewMember="crewMembers[currentCrewMember]" />
        <CrewNav :crewMembers="crewMembers" v-model="currentCrewMember" />
      </div>
    </div>
  </main>
</template>

<script>
import CrewDetails from '@/components/crew/CrewDetails.vue'
import CrewNav from '@/components/crew/CrewNav.vue'
import crewMembers from '@/assets/data/crewMembers'
import { useBackgroundStore } from '@/stores/backgroundstore'

export default {
  name: 'CrewView',
  components: {
    CrewDetails,
    CrewNav,
  },
  data() {
    return {
      currentCrewMember: 0,
      crewMembers,
    }
  },
  mounted() {
    const backgroundStore = useBackgroundStore()
    backgroundStore.setBackgroundImages({
      desktop: '/crew/background-crew-desktop.jpg',
      tablet: '/crew/background-crew-tablet.jpg',
      mobile: '/crew/background-crew-mobile.jpg',
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
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

.crew-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow-y: hidden;
}

.crew-title {
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0 2em;
  z-index: 10;
}

.crew-title span {
  color: #ffffff81;
}

.crew-content {
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2em;
  position: relative;
}

.crew-left {
  width: 100%;
  position: relative;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  .crew-title {
    font-size: 1.3em;
    text-align: left;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  main {
    padding: 1em 1em 0;
  }

  .crew-content {
    padding: 0;
  }

  .crew-title {
    text-align: center;
    font-size: 1.2em;
    padding: 0;
    margin-bottom: 2em;
  }

  .crew-left {
    display: flex;
    flex-direction: column;
  }
}
</style>
