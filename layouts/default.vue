<template>
  <div class="min-h-screen flex flex-col">
    <!-- Removed CustomCursor - using CSS solution instead -->
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout for all pages
</script>
