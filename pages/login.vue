<template>
  <div class="min-h-screen bg-primary-900 flex items-center justify-center px-6">
    <div class="max-w-md w-full">
      <div class="card p-8">
        <h1 class="text-3xl font-display font-bold mb-2">Welcome Back</h1>
        <p class="text-gray-400 mb-8">Sign in to your Metricalgo account</p>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              required
              class="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg focus:outline-none focus:border-accent-400 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              required
              class="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg focus:outline-none focus:border-accent-400 transition"
              placeholder="••••••••"
            />
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2 bg-primary-800 border-primary-700" />
              <span class="text-sm text-gray-400">Remember me</span>
            </label>
            <a href="#" class="text-sm text-accent-400 hover:text-accent-500">
              Forgot password?
            </a>
          </div>

          <button type="submit" class="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-400">
            Don't have an account?
            <NuxtLink to="/signup" class="text-accent-400 hover:text-accent-500">
              Sign up
            </NuxtLink>
          </p>
        </div>

        <div class="mt-6 text-center">
          <NuxtLink to="/" class="text-gray-400 hover:text-gray-300 text-sm">
            ← Back to home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  // Placeholder for form submission
  console.log('Login form submitted')
  // In a real app, this would handle the authentication logic
}

useHead({
  title: 'Login - Metricalgo',
  meta: [
    { name: 'description', content: 'Sign in to your Metricalgo account to access premium trading tools and analytics.' }
  ]
})
</script>