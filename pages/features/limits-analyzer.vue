<template>
  <div>
    <section class="section bg-gradient-to-b from-graphite to-primary-900 pt-32">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-sm text-steel">
            <li><NuxtLink to="/" class="hover:text-electric transition-colors">Home</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink to="/#features" class="hover:text-electric transition-colors">Features</NuxtLink></li>
            <li>/</li>
            <li class="text-platinum">Limits Analyzer</li>
          </ol>
        </nav>

        <!-- Hero -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-display font-bold text-platinum mb-6">
            Limits Analyzer
            <span class="gradient-text block mt-2">(Multi-Matrix)</span>
          </h1>
          <p class="text-xl text-steel-light leading-relaxed">
            A backtest tool that provides traders with a historical view of the probability that a price will reach (or not reach) a certain limit within a specified period. It also displays occurrences to give weight and importance to the historical data.
          </p>
        </div>

        <!-- Placeholder for detailed content -->
        <div class="card-glass p-12 max-w-5xl mx-auto">
          <div class="text-center space-y-6">
            <svg class="w-24 h-24 mx-auto text-electric/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <h2 class="text-2xl font-display font-bold text-platinum">
              Detailed Content Coming Soon
            </h2>
            <p class="text-steel-light max-w-2xl mx-auto">
              This page will include comprehensive documentation, use cases, screenshots, and examples of how the Limits Analyzer helps you make better trading decisions based on historical probability data.
            </p>
            <NuxtLink to="/#features" class="btn-electric inline-flex items-center gap-2 mt-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to Features
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Limits Analyzer (Multi-Matrix) - MetricAlgo',
  meta: [
    {
      name: 'description',
      content: 'Historical probability analysis tool showing the likelihood that price will reach specific limits within a timeframe, with occurrence data for weight and importance.'
    }
  ]
})
</script>
