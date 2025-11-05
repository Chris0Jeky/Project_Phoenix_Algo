<template>
  <section id="demo" class="section bg-primary-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" :style="backgroundPattern"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          See <span class="gradient-text">Metricalgo</span> in Action
        </h2>
        <p class="text-lg text-gray-300">
          Watch our step-by-step tutorial and discover how professional traders use our platform to maximize their returns.
        </p>
      </div>

      <!-- Video container -->
      <div class="max-w-5xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden border border-accent-400/20 bg-primary-800/50 backdrop-blur-sm">
          <!-- Video placeholder - Replace with actual video embed -->
          <div class="relative aspect-video bg-gradient-to-br from-primary-800 to-primary-900">
            <!-- Placeholder image with play button -->
            <img
              src="/images/pexels-artempodrez-5716052.jpg"
              alt="Video Tutorial Preview"
              class="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            <!-- Play button overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button
                @click="playVideo"
                class="group relative"
                aria-label="Play video"
              >
                <div class="absolute inset-0 bg-accent-400/20 rounded-full blur-xl group-hover:bg-accent-400/30 transition-all duration-300 scale-150"></div>
                <div class="relative w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-primary-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </button>
            </div>

            <!-- Video duration badge -->
            <div class="absolute bottom-4 right-4 bg-primary-900/80 backdrop-blur-sm px-3 py-1 rounded-lg">
              <span class="text-sm text-white font-medium">12:34</span>
            </div>
          </div>

          <!-- Video info bar -->
          <div class="p-6 bg-primary-800/50 border-t border-primary-700/50">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Getting Started with Metricalgo</h3>
                <p class="text-gray-400 text-sm">Learn the basics of our platform and start trading like a pro</p>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>15.2K views</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Updated 2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tutorial series grid -->
        <div class="mt-12">
          <h3 class="text-2xl font-display font-bold text-white mb-6">More Tutorials</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="tutorial in tutorials"
              :key="tutorial.id"
              class="card-hover group cursor-pointer"
            >
              <div class="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  :src="tutorial.thumbnail"
                  :alt="tutorial.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute bottom-2 right-2 bg-primary-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                  {{ tutorial.duration }}
                </div>
              </div>
              <h4 class="font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                {{ tutorial.title }}
              </h4>
              <p class="text-sm text-gray-400 line-clamp-2">
                {{ tutorial.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const backgroundPattern = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%233FC5F0' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
}

const tutorials = [
  {
    id: 1,
    title: 'Advanced Charting Tools',
    description: 'Master our professional charting suite with 100+ technical indicators',
    duration: '8:45',
    thumbnail: '/images/pexels-markusspiske-225769.jpg'
  },
  {
    id: 2,
    title: 'AI-Powered Market Analysis',
    description: 'Learn how our AI algorithms help you identify profitable trading opportunities',
    duration: '10:22',
    thumbnail: '/images/pexels-divinetechygirl-1181676.jpg'
  },
  {
    id: 3,
    title: 'Risk Management Strategies',
    description: 'Protect your capital with advanced risk management tools and techniques',
    duration: '15:18',
    thumbnail: '/images/pexels-philkallahar-983200.jpg'
  }
]

const playVideo = () => {
  // Placeholder for video player implementation
  // You can integrate YouTube, Vimeo, or custom video player here
  console.log('Video player would open here')
  // Example: Open modal with embedded video
}
</script>