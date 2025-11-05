<template>
  <section id="analytics" class="section bg-primary-900 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent"></div>
      <div class="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent"></div>
      <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Data-driven decisions with
            <span class="gradient-text">powerful analytics</span>
          </h2>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed">
            Transform raw market data into actionable insights. Our advanced analytics engine processes millions of data points in real-time to help you spot trends, identify opportunities, and manage risk effectively.
          </p>

          <!-- Feature list -->
          <div class="space-y-4 mb-8">
            <div
              v-for="feature in analyticsFeatures"
              :key="feature.title"
              class="flex items-start gap-4 group"
            >
              <div class="flex-shrink-0 w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center group-hover:bg-accent-400/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-white mb-1">{{ feature.title }}</h3>
                <p class="text-gray-400 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <NuxtLink to="/analytics" class="btn-primary">
            Explore Analytics
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Right: Chart visualization placeholder -->
        <div class="relative">
          <div class="card p-8">
            <!-- Chart header -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-white font-semibold mb-1">Portfolio Performance</h3>
                <p class="text-sm text-gray-400">Last 30 days</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-success-500">+24.5%</span>
                <svg class="w-6 h-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
            </div>

            <!-- Real ApexCharts visualization -->
            <ClientOnly>
              <apexchart
                type="area"
                height="280"
                :options="chartOptions"
                :series="chartSeries"
              />
            </ClientOnly>

            <!-- Chart legend -->
            <div class="mt-6 pt-6 border-t border-primary-700/50 grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-white">156</div>
                <div class="text-xs text-gray-400">Total Trades</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-success-500">68%</div>
                <div class="text-xs text-gray-400">Win Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-accent-400">2.4</div>
                <div class="text-xs text-gray-400">Profit Factor</div>
              </div>
            </div>
          </div>

          <!-- Floating info card -->
          <div class="absolute -bottom-6 -left-6 bg-primary-800/90 backdrop-blur-sm border border-accent-400/30 rounded-xl p-4 shadow-xl max-w-xs">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 bg-accent-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm mb-1">Real-time Updates</div>
                <div class="text-xs text-gray-400">Data refreshes every 500ms for live market tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const analyticsFeatures = [
  {
    title: 'Multi-timeframe Analysis',
    description: 'Analyze markets across multiple timeframes simultaneously to identify high-probability setups.'
  },
  {
    title: 'Risk Management Tools',
    description: 'Calculate position sizes, stop-loss levels, and risk-reward ratios automatically.'
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor your trading performance with detailed metrics, equity curves, and drawdown analysis.'
  },
  {
    title: 'Market Correlation',
    description: 'Discover correlations between assets to diversify your portfolio and hedge positions effectively.'
  }
]

// ApexCharts configuration
const chartSeries = [
  {
    name: 'Portfolio Value',
    data: [
      { x: 'Oct 1', y: 10000 },
      { x: 'Oct 5', y: 11200 },
      { x: 'Oct 10', y: 10800 },
      { x: 'Oct 15', y: 12500 },
      { x: 'Oct 20', y: 13100 },
      { x: 'Oct 25', y: 12800 },
      { x: 'Oct 30', y: 14500 }
    ]
  }
]

const chartOptions = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    background: 'transparent',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    }
  },
  theme: {
    mode: 'dark'
  },
  colors: ['#3FC5F0'], // accent-400
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },
  grid: {
    borderColor: '#1F3A57',
    strokeDashArray: 4,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } }
  },
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: '#9CA3AF',
        fontSize: '12px'
      }
    },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#9CA3AF',
        fontSize: '12px'
      },
      formatter: (value: number) => `$${(value / 1000).toFixed(1)}k`
    }
  },
  tooltip: {
    theme: 'dark',
    x: { show: true },
    y: {
      formatter: (value: number) => `$${value.toLocaleString()}`
    }
  }
}
</script>
