<template>
  <section id="testimonials" class="section bg-primary-950/50">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Trusted by traders
          <span class="gradient-text">worldwide</span>
        </h2>
        <p class="text-lg text-gray-300">
          See what our users have to say about their experience with Metricalgo.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="card-hover"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Rating stars -->
          <div class="flex gap-1 mb-4">
            <svg
              v-for="star in 5"
              :key="star"
              class="w-5 h-5 text-accent-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="text-gray-300 leading-relaxed mb-6">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-4 pt-4 border-t border-primary-700/50">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-primary-900 font-bold text-lg">
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-semibold text-white">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-400">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Sarah Chen',
    initials: 'SC',
    role: 'Day Trader',
    quote: 'Metricalgo has completely transformed my trading workflow. The real-time analytics and AI insights have helped me increase my win rate by 40%.'
  },
  {
    name: 'Michael Rodriguez',
    initials: 'MR',
    role: 'Crypto Trader',
    quote: 'The backtesting feature is incredible. I can validate my strategies with years of historical data before putting real money at risk.'
  },
  {
    name: 'Emily Watson',
    initials: 'EW',
    role: 'Swing Trader',
    quote: 'Best trading platform I\'ve used. The interface is intuitive, the charts are powerful, and the alerts keep me informed without overwhelming me.'
  },
  {
    name: 'David Kim',
    initials: 'DK',
    role: 'Forex Trader',
    quote: 'As a professional trader, I need tools I can trust. Metricalgo delivers accurate data, reliable execution, and excellent customer support.'
  },
  {
    name: 'Jessica Martinez',
    initials: 'JM',
    role: 'Options Trader',
    quote: 'The AI-powered pattern recognition has helped me spot opportunities I would have missed. It\'s like having a trading assistant that never sleeps.'
  },
  {
    name: 'Alex Thompson',
    initials: 'AT',
    role: 'Portfolio Manager',
    quote: 'Managing multiple accounts is seamless with Metricalgo. The analytics dashboard gives me a clear view of performance across all my positions.'
  }
]

const stats = [
  { value: '10K+', label: 'Active Traders' },
  { value: '$2.5B+', label: 'Trading Volume' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9★', label: 'User Rating' }
]
</script>
