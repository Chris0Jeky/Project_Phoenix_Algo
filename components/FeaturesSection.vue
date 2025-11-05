<template>
  <section id="features" class="section bg-primary-900 relative">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Everything you need to
          <span class="gradient-text">trade with confidence</span>
        </h2>
        <p class="text-lg text-gray-300">
          Our comprehensive suite of tools helps you analyze markets, test strategies, and execute trades with precision.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="card-hover"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Icon -->
          <div class="w-14 h-14 bg-gradient-to-br from-accent-400/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <div class="w-7 h-7 text-accent-400" v-html="feature.icon"></div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-display font-bold text-white mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            {{ feature.description }}
          </p>

          <!-- Learn more link -->
          <NuxtLink :to="feature.link" class="inline-flex items-center gap-2 text-accent-400 hover:gap-3 transition-all duration-300 text-sm font-medium">
            Learn more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <NuxtLink to="/features" class="btn-secondary">
          View All Features
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Icon SVG strings
const features = [
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    title: 'Real-Time Market Data',
    description: 'Access live market data from multiple exchanges with millisecond-level updates. Never miss a trading opportunity.',
    link: '#real-time'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`,
    title: 'Advanced Charting',
    description: 'Powerful charting tools with 100+ technical indicators, drawing tools, and customizable layouts.',
    link: '#charting'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>`,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning algorithms to identify patterns, trends, and potential trade setups automatically.',
    link: '#ai'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    title: 'Strategy Backtesting',
    description: 'Test your trading strategies against historical data to validate performance before risking real capital.',
    link: '#backtest'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
    </svg>`,
    title: 'Smart Alerts',
    description: 'Set custom price alerts, pattern recognition alerts, and strategy signals delivered instantly to your devices.',
    link: '#alerts'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>`,
    title: 'Bank-Level Security',
    description: 'Your data and API keys are encrypted with industry-leading security protocols. Trade with peace of mind.',
    link: '#security'
  }
]
</script>
