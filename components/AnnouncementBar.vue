<template>
  <div v-if="!isDismissed" class="relative bg-gradient-to-r from-electric/10 via-electric/5 to-electric/10 border-b border-electric/20">
    <div class="container-custom py-3">
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1 text-center">
          <p class="text-sm md:text-base text-steel-light">
            <span class="font-medium text-platinum">Limited Offer:</span>
            Subscribe to Historical Tools and get
            <span class="text-electric font-semibold">Metrix Suite for free forever</span>
            <NuxtLink to="#pricing" class="ml-2 text-electric hover:text-electric-light underline underline-offset-4 transition-colors">
              Learn more
            </NuxtLink>
          </p>
        </div>
        <button
          @click="dismiss"
          class="text-steel hover:text-platinum transition-colors p-1"
          aria-label="Dismiss announcement"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDismissed = ref(false)

// Check localStorage on mount
onMounted(() => {
  if (process.client) {
    isDismissed.value = localStorage.getItem('announcement-dismissed') === 'true'
  }
})

const dismiss = () => {
  isDismissed.value = true
  if (process.client) {
    localStorage.setItem('announcement-dismissed', 'true')
  }
}
</script>
