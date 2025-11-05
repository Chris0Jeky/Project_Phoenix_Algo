<template>
  <div>
    <HeroSection />
    <SectionDivider type="wave" animated />
    <TrustSection />
    <SectionDivider type="curve" fill="#121A24" />
    <FeaturesSection />
    <SectionDivider type="angle" animated />
    <VideoSection />
    <SectionDivider type="wave" fill="#121A24" />
    <AnalyticsSection />
    <SectionDivider type="curve" />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
// Landing page - composed of sections
useHead({
  title: 'Metricalgo - Premium Trading Tools & Analytics',
  meta: [
    {
      name: 'description',
      content: 'Make confident trades with real-time market insights, AI-powered analysis, and advanced backtesting. Join thousands of traders who trust Metricalgo.'
    },
    {
      property: 'og:title',
      content: 'Metricalgo - Premium Trading Tools & Analytics'
    },
    {
      property: 'og:description',
      content: 'Make confident trades with real-time market insights, AI-powered analysis, and advanced backtesting.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
