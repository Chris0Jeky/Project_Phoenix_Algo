<template>
  <div class="section-divider" :class="`divider-${type}`">
    <svg
      v-if="type === 'wave'"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      class="divider-svg"
    >
      <path
        d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
        :fill="fill"
        class="divider-path"
      />
    </svg>

    <svg
      v-else-if="type === 'curve'"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      class="divider-svg"
    >
      <path
        d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z"
        :fill="fill"
        class="divider-path"
      />
    </svg>

    <svg
      v-else-if="type === 'angle'"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      class="divider-svg"
    >
      <path
        d="M0,100 L720,20 L1440,100 Z"
        :fill="fill"
        class="divider-path"
      />
    </svg>

    <svg
      v-else-if="type === 'tilt'"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      class="divider-svg"
    >
      <path
        d="M0,100 L1440,50 L1440,100 Z"
        :fill="fill"
        class="divider-path"
      />
    </svg>

    <!-- Animated particles on divider -->
    <div v-if="animated" class="divider-particles">
      <span
        v-for="i in 5"
        :key="i"
        class="particle"
        :style="{
          left: `${20 * i}%`,
          animationDelay: `${i * 0.5}s`
        }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'wave' | 'curve' | 'angle' | 'tilt'
  fill?: string
  animated?: boolean
  flip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'wave',
  fill: '#0B111A',
  animated: false,
  flip: false
})

onMounted(() => {
  // Animate divider on scroll with GSAP
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  if ($gsap && props.animated) {
    $gsap.fromTo('.divider-path',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: '.section-divider',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>

<style scoped>
.section-divider {
  @apply relative w-full overflow-hidden;
  height: 100px;
  margin-top: -1px;
}

.divider-svg {
  @apply absolute inset-0 w-full h-full;
}

.divider-path {
  transition: all 0.5s ease;
}

/* Flip divider vertically */
.divider-flip {
  transform: scaleY(-1);
}

/* Animated particles */
.divider-particles {
  @apply absolute inset-0;
  pointer-events: none;
}

.particle {
  @apply absolute w-1 h-1 bg-electric rounded-full;
  animation: flow-particle 8s linear infinite;
  opacity: 0;
}

@keyframes flow-particle {
  0% {
    transform: translateX(-100%) translateY(50px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) translateY(0);
    opacity: 0;
  }
}

/* Different divider styles */
.divider-wave {
  .divider-path {
    animation: wave-motion 20s ease-in-out infinite;
  }
}

@keyframes wave-motion {
  0%, 100% {
    d: path("M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z");
  }
  50% {
    d: path("M0,50 C360,0 720,100 1440,50 L1440,100 L0,100 Z");
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-divider {
    height: 60px;
  }
}
</style>