<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grid bg-noise">
    <!-- Premium background effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-48 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 -right-48 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div class="text-center lg:text-left animate-slide-up">
          <!-- Premium Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 card-glass rounded-full mb-6 hairline-t">
            <span class="w-2 h-2 bg-electric rounded-full pulse-subtle"></span>
            <span class="text-steel text-sm font-medium">Trusted by 10,000+ traders</span>
          </div>

          <!-- Headline -->
          <h1 class="text-hero-mobile md:text-hero font-display font-bold text-white mb-6 text-balance">
            Trade Smarter with
            <span class="gradient-text">AI-Powered</span>
            Analytics
          </h1>

          <!-- Subheadline -->
          <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Make confident trading decisions with real-time market insights, advanced backtesting tools, and AI-powered analysis. Join thousands of traders who trust Metricalgo.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/signup" class="btn-primary text-lg px-8 py-4">
              Get Started Free
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="#demo" class="btn-secondary text-lg px-8 py-4">
              Watch Demo
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </NuxtLink>
          </div>

          <!-- Trust indicators -->
          <div class="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>14-day free trial</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <!-- Right: Visual / Trading Dashboard Image -->
        <div class="relative lg:block animate-slide-in-right">
          <div class="relative aspect-square max-w-lg mx-auto">
            <!-- Main trading dashboard image -->
            <div class="absolute inset-0 overflow-hidden rounded-2xl border border-accent-400/20">
              <img
                src="/images/pexels-leeloothefirst-5562085.jpg"
                alt="Trading Dashboard"
                class="w-full h-full object-cover opacity-90"
              />
              <!-- Overlay gradient for better text contrast -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
            </div>

            <!-- Floating cards with stats -->
            <div class="absolute -top-4 -left-4 bg-primary-800/90 backdrop-blur-sm border border-accent-400/30 rounded-xl p-4 shadow-xl animate-fade-in">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-success-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div>
                  <div class="text-success-500 font-bold">+24.5%</div>
                  <div class="text-xs text-gray-400">Avg. Return</div>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-primary-800/90 backdrop-blur-sm border border-accent-400/30 rounded-xl p-4 shadow-xl animate-fade-in" style="animation-delay: 0.2s;">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-accent-400/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-bold">Real-time</div>
                  <div class="text-xs text-gray-400">Data Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section - above the fold content
</script>
