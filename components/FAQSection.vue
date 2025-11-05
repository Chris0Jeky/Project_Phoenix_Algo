<template>
  <section class="section bg-primary-900">
    <div class="container-custom">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Frequently Asked <span class="gradient-text">Questions</span>
        </h2>
        <p class="text-lg text-steel-light">
          Have doubts or questions? Look here
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="card-glass overflow-hidden"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
          >
            <span class="text-platinum font-semibold">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-electric flex-shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openIndex === index" class="px-6 pb-5 overflow-hidden">
              <p class="text-steel-light leading-relaxed">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Is MetricAlgo a broker?',
    answer: 'No, we only do statistical analysis and generate trading systems based on the use of specific metrics as a filter. How the user uses such data is unknown to MetricAlgo.'
  },
  {
    question: 'How does MetricAlgo ensure the accuracy of the data?',
    answer: 'We use advanced technologies to collect and analyze data, ensuring that the information we provide is as accurate and up-to-date as possible. We rely on external data providers and internal data analysts to achieve efficiency.'
  },
  {
    question: 'Is there a limit to the amount of data I can analyze with MetricAlgo?',
    answer: 'No, there isn\'t a limit. With MetricAlgo, you have access to a wide range of data and analysis tools. Moreover, being cloud-based, the more you use MetricAlgo, the more results it can generate.'
  },
  {
    question: 'What types of securities does MetricAlgo support?',
    answer: 'MetricAlgo provides historical analysis for stocks, cryptocurrencies, ETFs, indices, and financial options. Our platform covers thousands of securities across multiple markets.'
  },
  {
    question: 'Do I need programming knowledge to use MetricAlgo?',
    answer: 'No programming knowledge is required. MetricAlgo is designed for every type of trader, from beginner to professional. Our intuitive dashboards and visual tools make statistical analysis accessible to everyone.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term commitments or cancellation fees. Your access will continue until the end of your current billing period.'
  }
]
</script>
