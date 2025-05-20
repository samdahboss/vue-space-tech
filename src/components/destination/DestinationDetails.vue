<template>
  <div>
    <h1 class="bellefair destination-main-title fw-normal">
      {{ destination.name }}
    </h1>
    <p class="destination-description">
      {{ destination.description }}
    </p>
  </div>

  <hr class="destination-description-line" />
  <div class="stats">
    <div>
      <h3 class="barlow-condensed fw-normal stats-title">Avg. distance</h3>
      <p class="stats-details bellefair">
        {{ destination.distance }}
      </p>
    </div>
    <div>
      <h3 class="barlow-condensed fw-normal stats-title">Est. travel time</h3>
      <p class="stats-details bellefair">
        {{ destination.travelTime }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object,
      required: true,
      validator(value) {
        return ['name', 'description', 'distance', 'travelTime'].every((prop) => prop in value)
      },
    },
  },
}
</script>

<style scoped>
.destination-main-title {
  font-size: 8em;
  text-transform: uppercase;
  text-align: left;
}

.destination-description {
  line-height: 180%;
}

.destination-description-line {
  max-width: 445px;
  width: 100%;
  height: 1px;
  opacity: 25%;
  z-index: 20;
}

.stats {
  display: flex;
  justify-content: space-between;
  gap: 2em;
}

.stats div {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  gap: 0.5em;
}

.stats-title {
  font-size: 1em;
  text-transform: uppercase;
}

.stats-details {
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  .destination-main-title {
    font-size: 6em;
    text-align: center;
  }

  .destination-description {
    text-align: center;
    line-height: 150%;
  }

  .stats {
    text-align: center;
  }
}

@media (max-width: 570px) {
  .destination-main-title {
    font-size: 2.5em;
  }

  .destination-description {
    line-height: 100%;
    font-size: 0.8em;
  }

  .stats {
    flex-direction: column;
    gap: 0.5em;
  }

  .stats div {
    width: 100%;
  }

  .stats-title {
    font-size: 0.8em;
  }

  .stats-details {
    font-size: 1.5em;
  }
}
</style>
