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
            <li class="text-platinum">Grouped Limits Analysis</li>
          </ol>
        </nav>

        <!-- Hero -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-display font-bold text-platinum mb-6">
            Grouped Limits Analysis
            <span class="gradient-text block mt-2">by Metric</span>
          </h1>
          <p class="text-xl text-steel-light leading-relaxed">
            Get a comprehensive overview of the historical price behavior through grouped analysis. Discover which factors, such as volatility, days of the week, or months, most influence your trades. All in one intuitive dashboard.
          </p>
        </div>

        <!-- Placeholder -->
        <div class="card-glass p-12 max-w-5xl mx-auto">
          <div class="text-center space-y-6">
            <svg class="w-24 h-24 mx-auto text-electric/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            <h2 class="text-2xl font-display font-bold text-platinum">
              Detailed Content Coming Soon
            </h2>
            <p class="text-steel-light max-w-2xl mx-auto">
              This page will showcase how grouped analysis helps you identify patterns across different market conditions, time periods, and volatility levels.
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
  title: 'Grouped Limits Analysis - MetricAlgo',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive overview of historical price behavior through grouped analysis by volatility, days of the week, months, and other factors in one intuitive dashboard.'
    }
  ]
})
</script>
