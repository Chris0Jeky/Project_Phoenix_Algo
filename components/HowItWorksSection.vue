<template>
  <section class="section bg-gradient-to-b from-primary-900 to-graphite">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          How <span class="gradient-text">MetricAlgo</span> Works
        </h2>
        <p class="text-lg text-steel-light">
          Four powerful steps to transform your trading with statistical precision
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative group"
        >
          <!-- Card -->
          <div class="card-glass h-full p-8 text-center hover:scale-105 transition-transform duration-300">
            <!-- Step number badge -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-electric to-electric-dark flex items-center justify-center text-white font-bold text-lg shadow-lg glow-electric">
                {{ index + 1 }}
              </div>
            </div>

            <!-- Icon -->
            <div class="mt-6 mb-6 flex justify-center">
              <div class="w-16 h-16 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                <div class="w-8 h-8 text-electric" v-html="step.icon"></div>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-lg font-display font-bold text-platinum mb-3">
              {{ step.title }}
            </h3>
            <p class="text-steel text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <!-- Connector arrow (desktop only) -->
          <div v-if="index < steps.length - 1" class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <svg class="w-8 h-8 text-electric/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`,
    title: 'Understand Historical Behavior',
    description: 'Understand the historical price behavior of thousands of securities in depth'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    title: 'Price Mood Analysis',
    description: 'Understand the "Price Mood" - whether it is currently "in" or "out of standard"'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    title: 'Validate Trade Ideas',
    description: 'Compare and validate your trade idea on a historical basis'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
    </svg>`,
    title: 'Options Strike Selection',
    description: 'Determine the strike prices for buyers and sellers of options'
  }
]
</script>
