<template>
  <section class="section bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 border border-electric/20 rounded-full mb-6">
          <span class="w-2 h-2 bg-electric rounded-full pulse-subtle"></span>
          <span class="text-electric text-sm font-medium">Historical stats tools</span>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6" id="pricing">
          The tool you've been
          <span class="gradient-text block mt-2">waiting for</span>
        </h2>

        <!-- Description -->
        <p class="text-lg md:text-xl text-steel-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Drastically reduce your risk: discover in advance the likelihood of success of your trades with MetricAlgo tools.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <NuxtLink to="/signup" class="btn-primary text-lg px-10 py-5">
            Start Free Trial
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary text-lg px-10 py-5">
            Talk to Sales
          </NuxtLink>
        </div>

        <!-- Feature highlights -->
        <div class="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="flex flex-col items-center gap-2">
            <svg class="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-300 text-sm">No credit card required</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <svg class="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-gray-300 text-sm">14-day free trial</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <svg class="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <span class="text-gray-300 text-sm">Cancel anytime</span>
          </div>
        </div>

        <!-- Trust badges -->
        <div class="mt-16 pt-12 border-t border-primary-700/50">
          <p class="text-gray-400 text-sm mb-6">Trusted by leading traders and institutions</p>
          <div class="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <!-- Placeholder for company logos - replace with actual logos -->
            <div class="text-gray-500 font-semibold">COMPANY 1</div>
            <div class="text-gray-500 font-semibold">COMPANY 2</div>
            <div class="text-gray-500 font-semibold">COMPANY 3</div>
            <div class="text-gray-500 font-semibold">COMPANY 4</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Final CTA section to drive conversions
</script>
