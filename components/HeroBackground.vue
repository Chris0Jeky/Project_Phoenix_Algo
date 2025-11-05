<template>
  <div class="hero-background">
    <!-- Immersive background image with parallax -->
    <div class="parallax-layer layer-1" ref="bgLayer">
      <img
        src="/images/hero-background.png"
        alt=""
        class="w-full h-full object-cover opacity-50"
      />
    </div>

    <!-- Floating data particles -->
    <div class="parallax-layer layer-2">
      <div class="floating-elements">
        <span
          v-for="i in 15"
          :key="`num-${i}`"
          class="floating-number"
          :style="{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }"
        >
          {{ generateNumber() }}
        </span>

        <span
          v-for="i in 10"
          :key="`symbol-${i}`"
          class="floating-symbol"
          :style="{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }"
        >
          {{ ['$', '€', '¥', '£', '%', '+', '-'][Math.floor(Math.random() * 7)] }}
        </span>
      </div>
    </div>

    <!-- Grid overlay -->
    <div class="grid-overlay"></div>

    <!-- Canvas for Three.js particles (optional) -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const bgLayer = ref<HTMLElement>()
const particleCanvas = ref<HTMLCanvasElement>()

const generateNumber = () => {
  const nums = ['1.234', '45.67', '892.1', '0.123', '567.8', '+12.3%', '-4.56%', '2.3M', '567K']
  return nums[Math.floor(Math.random() * nums.length)]
}

onMounted(async () => {
  // GSAP Parallax effect on scroll
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  if ($gsap && bgLayer.value) {
    $gsap.to(bgLayer.value, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-background",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Animate floating elements on scroll
    $gsap.to(".floating-number, .floating-symbol", {
      yPercent: -50,
      ease: "none",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".hero-background",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })
  }

  // Simple particle animation on canvas (lightweight alternative to Three.js)
  if (particleCanvas.value) {
    initParticles()
  }
})

// Particle system
let animationId: number
const particles: Array<{
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  size: number
}> = []

const initParticles = () => {
  const canvas = particleCanvas.value!
  const ctx = canvas.getContext('2d')!

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Create particles
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      size: Math.random() * 2 + 1
    })
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 229, 255, ${particle.opacity})`
      ctx.fill()

      // Draw connections
      particles.forEach(other => {
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.1 * (1 - distance / 100)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()
}

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.hero-background {
  @apply absolute inset-0 overflow-hidden;
  z-index: 0;
}

.parallax-layer {
  @apply absolute inset-0;
  will-change: transform;
}

.layer-1 {
  z-index: 1;
}

.layer-2 {
  z-index: 2;
}

.grid-overlay {
  @apply absolute inset-0;
  z-index: 3;
  background-image:
    linear-gradient(to right, rgba(139, 149, 167, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 149, 167, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, transparent 20%, black 70%);
}

.particle-canvas {
  @apply absolute inset-0;
  z-index: 4;
  pointer-events: none;
}

.floating-elements {
  @apply absolute inset-0;
  overflow: hidden;
}

.floating-number,
.floating-symbol {
  @apply absolute text-steel/20 font-mono;
  animation: float-up linear infinite;
  pointer-events: none;
}

.floating-number {
  @apply text-xs md:text-sm;
  bottom: -20px;
}

.floating-symbol {
  @apply text-lg md:text-2xl text-electric/10;
  bottom: -30px;
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .floating-number,
  .floating-symbol {
    animation: none;
    opacity: 0.1;
  }

  .parallax-layer {
    will-change: auto;
  }
}
</style>