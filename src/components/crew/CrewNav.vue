<!-- src/components/crew/CrewNav.vue -->
<template>
  <div class="carousel-controllers">
    <ul class="nav-links" id="crew-nav">
      <li 
        v-for="(member, index) in crewMembers" 
        :key="index" 
        class="nav-link crew-nav-link"
        :class="{ 'active': modelValue === index }" 
        @click="updateCrewMember(index)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CrewNav',
  props: {
    crewMembers: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateCrewMember(index) {
      this.$emit('update:modelValue', index);
    }
  }
}
</script>

<style scoped>
.carousel-controllers {
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;
}

#crew-nav {
  display: flex;
  list-style-type: none;
  background-color: transparent;
  padding: 0;
  gap: 1em;
  margin: 0;
}

#crew-nav .nav-link {
  background-color: #ffffff50;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  border: none;
  cursor: pointer;
}

#crew-nav .nav-link:hover {
  background-color: #ffffff81;
}

#crew-nav .nav-link.active {
  background-color: #fff;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  .carousel-controllers {
    position: relative;
    margin: 2em 0;
  }

  #crew-nav {
    justify-content: center;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  .carousel-controllers {
    margin: 0;
    margin-bottom: 1.5em;
    justify-content: center;
  }
}
</style>