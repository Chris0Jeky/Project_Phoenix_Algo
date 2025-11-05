// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Enable SSR and static generation
  ssr: true,

  // Configure for GitHub Pages deployment
  app: {
    baseURL: '/metricalgo_discover/',
    buildAssetsDir: 'assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Metricalgo - Premium Trading Tools & Analytics',
      meta: [
        { name: 'description', content: 'Professional trading tools and analytics platform. Make confident trades with real-time market insights, AI-powered analysis, and advanced backtesting.' },
        { name: 'theme-color', content: '#0E1E2E' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },

  // Nitro configuration for static site generation
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/signup', '/login'],
      // Ignore 404 errors for pages that don't exist yet
      failOnError: false
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Global CSS
  css: ['~/assets/css/main.css'],

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false
  }
})
