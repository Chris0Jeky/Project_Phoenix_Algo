<template>
  <section id="case-studies" class="section bg-gradient-to-b from-graphite to-primary-900">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Success Cases with <span class="gradient-text">MetricAlgo</span>
        </h2>
        <p class="text-lg text-steel-light">
          Through our specialized case studies, we offer you an in-depth tour of how MetricAlgo can be a true game changer in defining strategies and managing risk effectively.
        </p>
      </div>

      <!-- Case studies grid -->
      <div class="grid lg:grid-cols-2 gap-8 mb-12">
        <div
          v-for="(caseStudy, index) in caseStudies"
          :key="caseStudy.title"
          class="card-glass p-8 hover:scale-105 transition-transform duration-300"
        >
          <!-- Type badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-6">
            <span class="w-2 h-2 bg-electric rounded-full pulse-subtle"></span>
            <span class="text-electric text-sm font-medium">{{ caseStudy.type }}</span>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-display font-bold text-platinum mb-4">
            {{ caseStudy.title }}
          </h3>
          <p class="text-steel-light leading-relaxed mb-6">
            {{ caseStudy.description }}
          </p>

          <!-- Read more link -->
          <NuxtLink
            :to="caseStudy.link"
            class="inline-flex items-center gap-2 text-electric hover:gap-3 transition-all duration-300 font-medium"
          >
            Read full case study
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="text-center mb-8">
        <h3 class="text-2xl font-display font-bold text-platinum mb-2">
          What traders are saying
        </h3>
        <p class="text-steel-light text-sm mb-8">Selection of recent reviews from our community</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.author"
          class="card-glass p-6"
        >
          <!-- Rating -->
          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-steel-light text-sm leading-relaxed mb-4 italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-electric/20 to-platinum/20 flex items-center justify-center">
              <span class="text-platinum font-semibold text-sm">{{ testimonial.initials }}</span>
            </div>
            <div>
              <div class="text-platinum font-medium text-sm">{{ testimonial.author }}</div>
              <div class="text-steel text-xs">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TrustPilot link -->
      <div class="text-center">
        <a
          href="https://www.trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-steel hover:text-platinum transition-colors text-sm"
        >
          <span>See all reviews on</span>
          <span class="font-semibold">TrustPilot</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const caseStudies = [
  {
    type: 'Algorithmic Trader',
    title: 'Identify and apply a profitable trading system in a specific period',
    description: 'A trading system is a series of market operations that follow a specific rule determining the right moment to enter the market. Through MetricAlgo\'s historical analysis tools, traders can validate and optimize algorithmic strategies by filtering data through metrics like volatility, patterns, and market conditions.',
    link: '#case-algorithmic'
  },
  {
    type: 'Directional Trader',
    title: 'Evaluating when to exit a trade in profit',
    description: 'One of the questions that a trader asks themselves once they are in the market and their position is profitable is: when is it best to exit and realize the gain? MetricAlgo provides historical probability data to help traders make informed exit decisions based on statistical likelihood of target achievement.',
    link: '#case-directional'
  }
]

const testimonials = [
  {
    quote: 'I am an options investor and have always had difficulty choosing the best strike for my trades. Recently, I discovered MetricAlgo, which has helped me improve my performance. This software provides access to a wide range of data and utilizes statistics to help me choose the best strike.',
    author: 'Mattia Besana',
    role: 'Options Trader',
    initials: 'MB'
  },
  {
    quote: 'I was truly impressed by the depth of analysis offered by METRICALGO. The integration of statistical data with trading has opened up a world to me and shed light on aspects that I was completely unaware of. The customer support was also very responsive.',
    author: 'Maria A.',
    role: 'Active Trader',
    initials: 'MA'
  },
  {
    quote: 'I have always sought tools that could refine my decisions and reduce risks. This software has proven to be a revolutionary discovery. The statistical approach it offers is unique, and the charts to determine the probability of reaching specific price targets are nothing short of crucial.',
    author: 'Michele De Angelis',
    role: 'Risk Manager',
    initials: 'MD'
  }
]
</script>
