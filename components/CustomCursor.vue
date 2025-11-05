<template>
  <div v-if="!isMobile" class="custom-cursor-container">
    <!-- Main cursor -->
    <div
      ref="cursor"
      class="custom-cursor"
      :class="{
        'cursor-hover': isHovering,
        'cursor-click': isClicking
      }"
    ></div>

    <!-- Cursor trail -->
    <div
      v-for="(dot, index) in trail"
      :key="index"
      class="cursor-trail"
      :style="{
        left: dot.x + 'px',
        top: dot.y + 'px',
        opacity: 1 - (index / trail.length)
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement>()
const isHovering = ref(false)
const isClicking = ref(false)
const isMobile = ref(false)

const trail = ref<Array<{ x: number; y: number }>>([])
const trailLength = 8

onMounted(() => {
  // Check if mobile device
  isMobile.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (!isMobile.value) {
    // Hide default cursor
    document.body.style.cursor = 'none'

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor.value) {
        const x = e.clientX
        const y = e.clientY

        // Update main cursor with GSAP for smooth movement
        const { $gsap } = useNuxtApp()
        if ($gsap) {
          $gsap.to(cursor.value, {
            x: x - 16,
            y: y - 16,
            duration: 0.1,
            ease: "power2.out"
          })
        }

        // Update trail
        trail.value.push({ x: x - 4, y: y - 4 })
        if (trail.value.length > trailLength) {
          trail.value.shift()
        }
      }
    }

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('btn') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        isHovering.value = true
      }
    }

    const handleMouseOut = () => {
      isHovering.value = false
    }

    // Handle click animation
    const handleMouseDown = () => {
      isClicking.value = true
    }

    const handleMouseUp = () => {
      isClicking.value = false
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Cleanup
    onUnmounted(() => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    })
  }
})
</script>

<style scoped>
.custom-cursor-container {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.custom-cursor {
  position: fixed;
  width: 32px;
  height: 32px;
  border: 2px solid #00E5FF;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.2s ease;
  will-change: transform;
}

.custom-cursor.cursor-hover {
  transform: scale(1.5);
  border-color: #6FF3FF;
  background: rgba(0, 229, 255, 0.1);
}

.custom-cursor.cursor-click {
  transform: scale(0.8);
  border-color: #00B8CC;
}

.cursor-trail {
  position: fixed;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #00E5FF 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  will-change: transform;
}

/* Hide on small screens */
@media (max-width: 768px) {
  .custom-cursor-container {
    display: none;
  }
}
</style>