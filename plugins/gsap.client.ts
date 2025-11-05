import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})