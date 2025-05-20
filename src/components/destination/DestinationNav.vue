<template>
  <ul class="nav-links" id="destination-nav">
    <li
      v-for="(destination, index) in destinations"
      :key="destination.name"
      class="nav-link"
      :class="{ active: modelValue === index }"
      @click="updateDestination(index)"
    >
      <a href="javascript:void(0)">{{ destination.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DestinationNav',
  props: {
    destinations: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateDestination(index) {
      this.$emit('update:modelValue', index);
    }
  }
}
</script>

<style scoped>
#destination-nav {
  display: flex;
  list-style-type: none;
  background-color: transparent;
  backdrop-filter: none;
  padding: 0em 0em;
  justify-content: unset;
  gap: 1em;
}

#destination-nav .nav-link {
  padding: 0.5em 0em;
  cursor: pointer;
  text-transform: uppercase;
}

.nav-link a {
  text-decoration: none;
  color: white;
}

.nav-link.active {
  border-bottom: 3px solid #fff;
}

.nav-link:hover:not(.active) {
  border-bottom: 3px solid rgba(255, 255, 255, 0.36);
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  #destination-nav {
    width: 100%;
    justify-content: center;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  #destination-nav {
    display: flex;
    margin-top: -2em;
  }

  #destination-nav .nav-link {
    padding: 0.3em 0em;
  }

  #destination-nav .nav-link.active {
    border-right: none;
    border-bottom: 1px solid #ffffff;
  }
}
</style>