<template>
  <main class="container-fluid px-0 overflow-x-hidden">
    <div class="d-flex flex-column w-100 position-relative h-100">
      <h1
        class="barlow-condensed fw-normal text-uppercase px-md-4 px-0 position-relative"
        style="letter-spacing: 0.1em; z-index: 10"
      >
        <span class="opacity-50">02</span> Meet your crew
      </h1>
      <div class="d-flex w-100 h-80 position-relative px-md-4 px-0">
        <div class="w-100 position-relative">
          <CrewDetails :crewMember="crewMembers[currentCrewMember]" />
          <CrewNav :crewMembers="crewMembers" v-model="currentCrewMember" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CrewDetails from "@/components/crew/CrewDetails.vue";
import CrewNav from "@/components/crew/CrewNav.vue";
import crewMembers from "@/assets/data/crewMembers";
import { useBackgroundStore } from "@/stores/backgroundstore";

export default {
  name: "CrewView",
  components: {
    CrewDetails,
    CrewNav,
  },
  data() {
    return {
      currentCrewMember: 0,
      crewMembers,
    };
  },
  mounted() {
    const backgroundStore = useBackgroundStore();
    backgroundStore.setBackgroundImages({
      desktop: "/crew/background-crew-desktop.jpg",
      tablet: "/crew/background-crew-tablet.jpg",
      mobile: "/crew/background-crew-mobile.jpg",
    });
    this.backgroundStore = backgroundStore;
  },
  beforeUnmount() {
    this.backgroundStore.clearBackground();
  },
};
</script>

<style scoped>
/* Mobile Responsiveness - only what Bootstrap can't handle */
@media (max-width: 940px) {
  h1.barlow-condensed {
    font-size: 1.3em;
    text-align: left;
  }
}

@media (max-width: 570px) {
  h1.barlow-condensed {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 2em;
  }

  .w-100.position-relative {
    display: flex;
    flex-direction: column;
  }
}
</style>
