import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger)

  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})