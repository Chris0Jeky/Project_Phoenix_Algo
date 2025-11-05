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
            <li class="text-platinum">Historical Series Filter</li>
          </ol>
        </nav>

        <!-- Hero -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-display font-bold text-platinum mb-6">
            Historical Series
            <span class="gradient-text block mt-2">Filter</span>
          </h1>
          <p class="text-xl text-steel-light leading-relaxed">
            Validate your intuition by filtering the series of Japanese candles with specific metrics such as volatility, specific days, and much more. Find historical cases similar to your current trade setup.
          </p>
        </div>

        <!-- Placeholder -->
        <div class="card-glass p-12 max-w-5xl mx-auto">
          <div class="text-center space-y-6">
            <svg class="w-24 h-24 mx-auto text-electric/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
            <h2 class="text-2xl font-display font-bold text-platinum">
              Detailed Content Coming Soon
            </h2>
            <p class="text-steel-light max-w-2xl mx-auto">
              This page will demonstrate how to use filters to find historical patterns matching your current trading scenario, including volatility, gaps, patterns, and time-based filters.
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
  title: 'Historical Series Filter - MetricAlgo',
  meta: [
    {
      name: 'description',
      content: 'Validate your trading intuition by filtering candlestick series with specific metrics like volatility, specific days, patterns, and more to find similar historical cases.'
    }
  ]
})
</script>
