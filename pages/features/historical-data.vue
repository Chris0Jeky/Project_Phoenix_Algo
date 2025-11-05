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
            <li class="text-platinum">Historical Limit Data</li>
          </ol>
        </nav>

        <!-- Hero -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-display font-bold text-platinum mb-6">
            Historical Limit Data & Chart
            <span class="gradient-text block mt-2">Historical Deviation & Frequency</span>
          </h1>
          <p class="text-xl text-steel-light leading-relaxed">
            View the historical price movement through the limit chart. This tool displays the highs, lows, and closes of periods, providing a comprehensive overview of price behavior in relation to past periods. With the calculation of standard deviations, you can assess how ordinary or exceptional the current price is, benefiting your trading decisions.
          </p>
        </div>

        <!-- Placeholder -->
        <div class="card-glass p-12 max-w-5xl mx-auto">
          <div class="text-center space-y-6">
            <svg class="w-24 h-24 mx-auto text-electric/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <h2 class="text-2xl font-display font-bold text-platinum">
              Detailed Content Coming Soon
            </h2>
            <p class="text-steel-light max-w-2xl mx-auto">
              This page will include examples of limit charts, deviation analysis, and how to interpret standard deviation data for better trading decisions.
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
  title: 'Historical Limit Data & Deviations - MetricAlgo',
  meta: [
    {
      name: 'description',
      content: 'View historical price movement through limit charts with standard deviations to assess how ordinary or exceptional current price is for better trading decisions.'
    }
  ]
})
</script>
