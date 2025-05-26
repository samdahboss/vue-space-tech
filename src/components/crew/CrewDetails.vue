<!-- src/components/crew/CrewDetails.vue -->
<template>
  <div
    class="d-flex flex-md-row flex-column-reverse w-100 align-items-md-end align-items-center"
  >
    <div
      class="crew-text col-md-6 col-12 d-flex flex-column mb-md-7 mb-4 text-md-start text-center"
    >
      <h3 class="bellefair fw-normal text-uppercase opacity-50 fs-md-1 fs-4">
        {{ crewMember.role }}
      </h3>
      <h1
        class="bellefair fw-normal text-uppercase my-md-2 mt-1 mb-0 display-md-4 display-5"
      >
        {{ crewMember.name }}
      </h1>
      <p class="lh-lg mt-3">
        {{ crewMember.bio }}
      </p>
    </div>

    <div class="col-md-6 col-12 d-flex justify-content-center align-items-md-end">
      <img
        :src="crewMember.image"
        :alt="`image-${crewMember.name.toLowerCase().replace(' ', '-')}`"
        class="img-fluid mh-70"
        :class="{
          'border-bottom border-light border-opacity-10 mb-4': window.innerWidth <= 570,
        }"
        style="max-height: 70vh; object-fit: contain"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CrewDetails",
  props: {
    crewMember: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      window: window,
    };
  },
};
</script>

<style scoped>
.mb-7 {
  margin-bottom: 7em;
}

@media (max-width: 940px) {
  .crew-text {
    max-width: 512px;
  }
}

@media (max-width: 570px) {
  .crew-text {
    gap: 0.5em;
  }
}

@media (min-width: 768px) {
  .fs-md-1 {
    font-size: 2.5em !important;
  }

  .display-md-4 {
    font-size: 3.3em !important;
    letter-spacing: 0.1em;
  }
}

@media (max-width: 940px) and (min-width: 571px) {
  .display-md-4 {
    font-size: 2.5em !important;
  }

  .fs-md-1 {
    font-size: 1.5em !important;
  }
}

@media (max-width: 570px) {
  .display-md-4 {
    font-size: 1.5em !important;
  }

  .fs-md-1 {
    font-size: 1.2em !important;
  }
}
</style>
