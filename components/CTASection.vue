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

        <!-- Pricing Card -->
        <div class="max-w-lg mx-auto mb-12">
          <div class="card-glass p-8">
            <!-- Price -->
            <div class="mb-6">
              <div class="text-5xl font-bold text-platinum mb-2">
                69€
                <span class="text-lg font-normal text-steel">/month</span>
              </div>
              <p class="text-steel-light text-sm">
                Or save an additional <span class="text-electric font-semibold">22% for life</span> with an annual subscription
              </p>
            </div>

            <!-- Special Offer - Subtle -->
            <div class="mb-6 p-4 rounded-lg bg-electric/5 border border-electric/10">
              <p class="text-steel-light text-sm">
                <span class="text-platinum font-medium">Limited Offer:</span> Subscribe to Historical Tools and get
                <span class="text-electric">Metrix Suite free forever</span>
              </p>
            </div>

            <!-- What's included -->
            <div class="text-left mb-6">
              <h3 class="text-platinum font-semibold mb-4">What's included in the subscription:</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-steel-light">Access to the platform</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-steel-light">Access to the MetricAlgo community</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-electric flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-steel-light">Updates and new features</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <NuxtLink to="/signup" class="btn-electric w-full justify-center text-lg py-4 sheen glow-electric">
              Get Started Now
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Coming Soon Features -->
        <div class="mt-12 pt-8 border-t border-steel/10">
          <p class="text-steel text-sm mb-4">Coming Soon:</p>
          <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
            <div class="flex items-center justify-center gap-2 text-steel-light">
              <svg class="w-4 h-4 text-electric/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Find profitable Trading Systems</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-steel-light">
              <svg class="w-4 h-4 text-electric/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              <span>Statistical event notifications</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-steel-light">
              <svg class="w-4 h-4 text-electric/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span>Learn new statistical strategies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Final CTA section to drive conversions
</script>
