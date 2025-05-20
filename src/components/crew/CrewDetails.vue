<!-- src/components/crew/CrewDetails.vue -->
<template>
  <div class="crew-details">
    <div class="crew-text">
      <h3 class="bellefair fw-normal crew-subtitle">{{ crewMember.role }}</h3>
      <h1 class="bellefair crew-main-title fw-normal">{{ crewMember.name }}</h1>
      <p class="crew-description">
        {{ crewMember.bio }}
      </p>
    </div>
    
    <div class="crew-right">
      <img 
        :src="crewMember.image"
        :alt="`image-${crewMember.name.toLowerCase().replace(' ', '-')}`"
        class="crew-image" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrewDetails',
  props: {
    crewMember: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.crew-details {
  display: flex;
  width: 100%;
  height: 90%;
  align-items: flex-end;
}

.crew-text {
  max-width: 539px;
  display: flex;
  flex-direction: column;
  margin-bottom: 7em;
  width: 50%;
}

.crew-main-title {
  font-size: 3.3em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0.2em 0;
}

.crew-subtitle {
  font-size: 2.5em;
  text-transform: uppercase;
  opacity: 0.5;
  margin: 0;
}

.crew-description {
  line-height: 180%;
  margin-top: 1em;
}

.crew-right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.crew-right img {
  max-width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
  .crew-details {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  .crew-text {
    margin-bottom: 3em;
    align-items: center;
    max-width: 512px;
    width: 100%;
  }

  .crew-subtitle {
    font-size: 1.5em;
  }

  .crew-main-title {
    font-size: 2.5em;
  }

  .crew-description {
    line-height: 150%;
  }

  .crew-right {
    width: 100%;
  }

  .crew-right img {
    max-width: 501px;
    max-height: 400px;
  }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
  .crew-details {
    flex-direction: column-reverse;
  }
  
  .crew-text {
    gap: 0.5em;
    margin-bottom: 2em;
  }

  .crew-subtitle {
    font-size: 1.2em;
  }

  .crew-main-title {
    font-size: 1.5em;
    margin: 0;
  }

  .crew-description {
    font-size: 0.9em;
    line-height: 140%;
  }

  .crew-right {
    height: 40vh;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.5em;
  }

  .crew-right img {
    max-width: 271px;
    max-height: 100%;
  }
}
</style>