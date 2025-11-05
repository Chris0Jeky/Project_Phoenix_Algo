<template>
  <section class="py-16 bg-primary-800/30 relative">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-display font-bold text-white mb-4">
          Trusted by <span class="gradient-text">10,000+</span> Traders Worldwide
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Join a growing community of professional traders who rely on our platform for secure, reliable trading
        </p>
      </div>

      <!-- Trust indicators grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div
          v-for="stat in trustStats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Security badges -->
      <div class="border-t border-primary-700/50 pt-12">
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div
            v-for="badge in securityBadges"
            :key="badge.name"
            class="flex flex-col items-center gap-3 group"
          >
            <div class="w-16 h-16 bg-primary-700/30 rounded-xl flex items-center justify-center group-hover:bg-primary-700/50 transition-colors duration-300">
              <div v-html="badge.icon" class="w-8 h-8 text-accent-400"></div>
            </div>
            <div class="text-center">
              <div class="text-sm font-semibold text-white">{{ badge.name }}</div>
              <div class="text-xs text-gray-500">{{ badge.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Partner logos -->
      <div class="mt-16 pt-12 border-t border-primary-700/50">
        <p class="text-center text-sm text-gray-500 mb-8">INTEGRATED WITH LEADING EXCHANGES</p>
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          <div
            v-for="partner in partners"
            :key="partner"
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span class="text-xl font-semibold">{{ partner }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustStats = [
  { value: '10K+', label: 'Active Traders' },
  { value: '$2.5B+', label: 'Trading Volume' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' }
]

const securityBadges = [
  {
    name: 'Bank-Level Security',
    description: '256-bit encryption',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>`
  },
  {
    name: 'SOC 2 Certified',
    description: 'Annual audits',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`
  },
  {
    name: 'GDPR Compliant',
    description: 'Data protection',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`
  },
  {
    name: '2FA Authentication',
    description: 'Enhanced security',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>`
  }
]

const partners = [
  'Binance',
  'Coinbase',
  'Kraken',
  'NYSE',
  'NASDAQ'
]
</script>