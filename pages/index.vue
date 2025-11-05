<template>
  <div>
    <AnnouncementBar />
    <HeroSection />
    <SectionDivider type="wave" animated />
    <HowItWorksSection />
    <SectionDivider type="curve" fill="#121A24" />
    <BeyondIntuitionSection />
    <SectionDivider type="angle" animated />
    <BenefitsSection />
    <SectionDivider type="wave" fill="#121A24" />
    <FeaturesSection />
    <SectionDivider type="curve" />
    <CaseStudiesSection />
    <SectionDivider type="angle" animated />
    <CTASection />
    <SectionDivider type="wave" fill="#121A24" />
    <FAQSection />
  </div>
</template>

<script setup lang="ts">
// Landing page - composed of sections
useHead({
  title: 'MetricAlgo - The advantage of statistics applied to trading',
  meta: [
    {
      name: 'description',
      content: 'Discover the historical likelihood that your next trade will be successful. MetricAlgo offers detailed historical analysis and advanced charts for stocks, crypto, and options.'
    },
    {
      property: 'og:title',
      content: 'MetricAlgo - Statistical Trading Analysis'
    },
    {
      property: 'og:description',
      content: 'Analyze the probability and timing of target achievement with detailed historical analysis and advanced charts for reliable estimates.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'keywords',
      content: 'trading statistics, historical analysis, options trading, probability analysis, trading tools, stock analysis, cryptocurrency trading, backtesting'
    }
  ]
})
</script>
