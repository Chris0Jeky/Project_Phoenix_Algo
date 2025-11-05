<template>
  <section id="features" class="section bg-primary-900 relative">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Everything you can do
          <span class="gradient-text block mt-2">Features</span>
        </h2>
        <p class="text-lg text-steel-light">
          New features coming soon, Stay tuned!
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

    </div>
  </section>
</template>

<script setup lang="ts">
// MetricAlgo trading tools
const features = [
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`,
    title: 'Limits Analyzer (Multi-Matrix)',
    description: 'Historical view of probability that price reaches specific limits within a timeframe, with occurrence data to give weight and importance to historical analysis.',
    link: '/features/limits-analyzer'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
    </svg>`,
    title: 'Grouped Limits Analysis',
    description: 'Comprehensive overview of historical price behavior through grouped analysis. Discover which factors like volatility, days, or months most influence your trades in one dashboard.',
    link: '/features/grouped-analysis'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
    </svg>`,
    title: 'Stacked Chart',
    description: 'Display historical price trends in a single chart for similar periods, allowing for easy data analysis. The black line represents the price trend during the last period analyzed.',
    link: '/features/stacked-chart'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`,
    title: 'Limit Horizon (Min and Max)',
    description: 'Discover when historical lows and highs emerge to enhance your trading strategy with precise timing insights.',
    link: '/features/limit-horizon'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    title: 'Limits of "at Now" Period',
    description: 'Visual overview relating current period limits to historical minimum and maximum limits, helping you quickly understand price behavior in a historical context.',
    link: '/features/at-now-limits'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>`,
    title: 'Limit Distance vs Time',
    description: 'Explore how distance achieved by price correlates with frequency of highs and lows. See how price may reach only a portion of historical limits but covers majority of cases.',
    link: '/features/distance-vs-time'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`,
    title: 'Historical Limit Data & Deviations',
    description: 'View historical price movement through limit charts with standard deviations. Assess how ordinary or exceptional the current price is, benefiting your trading decisions.',
    link: '/features/historical-data'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`,
    title: 'Limits & Deviations Overview',
    description: 'Display historical price movement showing the range of action through representation of maximum, minimum, average, and periodic closing values.',
    link: '/features/deviations-overview'
  },
  {
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
    </svg>`,
    title: 'Historical Series Filter',
    description: 'Validate your intuition by filtering series of Japanese candles with specific metrics such as volatility, specific days, patterns, and much more.',
    link: '/features/series-filter'
  }
]
</script>
