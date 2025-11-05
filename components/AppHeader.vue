<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-lg border-b border-primary-700/50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img
            src="/images/logo3.png"
            alt="Metricalgo Logo"
            class="h-10 w-auto transform group-hover:scale-110 transition-transform duration-300"
          />
          <span class="text-xl font-display font-bold text-white">Metricalgo</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-gray-300 hover:text-accent-400 transition-colors duration-300 font-medium"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/login" class="hidden sm:block btn-ghost text-sm">
            Login
          </NuxtLink>
          <NuxtLink to="/signup" class="btn-primary text-sm">
            Get Started Free
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-300 hover:text-accent-400"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-6 border-t border-primary-700/50 animate-fade-in"
      >
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-gray-300 hover:text-accent-400 transition-colors duration-300 font-medium py-2"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
]
</script>
