import { defineStore } from 'pinia'

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    currentBackground: '',
    backgroundImages: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
  }),

  actions: {
    setBackgroundImages(images) {
      // Store the three image paths
      this.backgroundImages = {
        desktop: images.desktop || '',
        tablet: images.tablet || '',
        mobile: images.mobile || '',
      }

      // Set initial background
      this.updateBackground()

      // Add resize listener
      window.addEventListener('resize', this.updateBackground)
    },

    updateBackground() {
      const windowWidth = window.innerWidth
      let bgImage

      if (windowWidth <= 570) {
        bgImage = `url('${this.backgroundImages.mobile}')`
      } else if (windowWidth <= 768) {
        bgImage = `url('${this.backgroundImages.tablet}')`
      } else {
        bgImage = `url('${this.backgroundImages.desktop}')`
      }

      document.body.style.backgroundImage = bgImage
      this.currentBackground = bgImage
    },

    clearBackground() {
      document.body.style.backgroundImage = ''
      window.removeEventListener('resize', this.updateBackground)
    },
  },
})
