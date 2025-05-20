<!-- src/components/technology/TechnologyDetails.vue -->
<template>
  <div class="technology-details">
    <div class="technology-text">
      <h3 class="technology-subtitle bellefair fw-normal">The terminology...</h3>
      <h1 class="technology-main-title bellefair fw-normal">
        {{ technology.name }}
      </h1>
      <p class="technology-description">
        {{ technology.description }}
      </p>
    </div>

    <div class="technology-right">
      <div
        class="technology-image"
        :style="{
          backgroundImage: isDesktop
            ? `url('${technology.portraitImage}')`
            : `url('${technology.landscapeImage}')`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologyDetails',
  props: {
    technology: {
      type: Object,
      required: true,
    },
    isDesktop: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.technology-details {
  display: flex;
  width: 100%;
  gap: 2em;
}

.technology-text {
  height: 100%;
  max-width: 539px;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.technology-subtitle {
  font-size: 2em;
  margin-bottom: 0.3em;
  text-transform: uppercase;
  opacity: 0.5;
}

.technology-main-title {
  font-size: 3em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.technology-description {
  line-height: 180%;
}

.technology-right {
  width: 50%;
}

.technology-image {
  background-size: cover;
  background-position: center;
  height: 65vh;
  max-height: 600px;
  width: 100%;
  transition: background-image 0.5s ease-in-out;
}

@media (max-width: 940px) {
  .technology-details {
    flex-direction: column-reverse;
  }

  .technology-text {
    text-align: center;
    max-width: 512px;
    margin: auto;
    width: 100%;
  }

  .technology-subtitle {
    font-size: 1.5em;
  }

  .technology-main-title {
    font-size: 2.5em;
  }

  .technology-description {
    line-height: 150%;
  }

  .technology-right {
    width: 100%;
  }

  .technology-image {
    max-height: 357px;
  }
}

@media (max-width: 570px) {
  .technology-subtitle {
    font-size: 1em;
  }

  .technology-main-title {
    font-size: 2em;
  }

  .technology-description {
    line-height: 100%;
  }
}
</style>
