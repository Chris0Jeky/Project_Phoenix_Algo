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
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent-400/10 border border-accent-400/20 rounded-full mb-6">
          <svg class="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-accent-400 text-sm font-medium">Join 10,000+ successful traders</span>
        </div>

        <!-- Headline -->
        <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Ready to
          <span class="gradient-text">level up</span>
          your trading?
        </h2>

        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Start your 14-day free trial today. No credit card required. Experience the power of professional-grade trading tools risk-free.
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
