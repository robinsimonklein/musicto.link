<template>
  <div>
    <header class="sticky top-4 z-50">
      <UContainer>
        <div
          class="px-6 py-3 max-w-2xl mx-auto border dark:border-gray-800/40 rounded-2xl backdrop-blur-3xl dark:bg-gray-900/40"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <NuxtLink to="/">
                <Logo class="w-6 h-6 text-white mr-4" />
              </NuxtLink>
            </div>
            <p>•</p>
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
