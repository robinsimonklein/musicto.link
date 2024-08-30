<template>
  <div>
    <header class="sticky top-4 z-50">
      <UContainer>
        <div
          class="px-6 py-3 max-w-2xl mx-auto border dark:border-gray-800 rounded-2xl backdrop-blur-3xl dark:bg-gray-900/20"
        >
          <div class="flex items-center justify-between">
            <NuxtLink class="text-xl font-heading" to="/">musicto•link</NuxtLink>
            <NuxtLink to="/">/</NuxtLink>
          </div>
        </div>
      </UContainer>
    </header>
    <main class="pt-8">
      <slot />
    </main>
    <footer class="mt-20 mb-12">
      <UContainer>
        <div class="text-center">
          <p class="text-xs opacity-40">musicto.link © {{ new Date().getFullYear() }}</p>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
