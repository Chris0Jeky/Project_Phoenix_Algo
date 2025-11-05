<template>
  <section class="section bg-primary-900">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Here's how <span class="gradient-text">MetricAlgo</span> helps you
        </h2>
      </div>

      <!-- Benefits grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="card-glass p-8 hover:scale-105 transition-transform duration-300"
        >
          <div class="flex items-start gap-4">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
              <div class="w-6 h-6 text-electric" v-html="benefit.icon"></div>
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-xl font-display font-bold text-platinum mb-2">
                {{ benefit.title }}
              </h3>
              <p class="text-steel leading-relaxed">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>`,
    title: 'Better evaluate anticipated exits',
    description: 'Understand the historical probability of reaching your target price, helping you set realistic profit expectations before entering the trade.'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>`,
    title: 'Better evaluate trend changes',
    description: 'Identify when price behavior deviates from historical norms, signaling potential trend reversals or continuation patterns during your trade.'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>`,
    title: 'Define optimal take profit and stop loss',
    description: 'Use historical data to set statistically sound take profit and stop loss levels before starting your trade, improving risk management.'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
    </svg>`,
    title: 'Get historical similar cases',
    description: 'Filter through historical data using metrics like volatility, gap patterns, and specific market conditions to find comparable trading scenarios.'
  }
]
</script>
