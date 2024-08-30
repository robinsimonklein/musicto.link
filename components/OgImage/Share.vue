<template>
  <div class="relative flex flex-row h-full w-full bg-gray-900">
    <img
      v-if="thumbnail"
      :src="thumbnail"
      class="absolute inset-0 w-full h-full object-cover opacity-60"
      style="filter: blur(160px); transform: scale(1.5); transform-origin: center"
    />
    <div class="relative flex flex-row items-center p-20 justify-between h-full w-full">
      <div class="flex flex-col justify-between shrink text-white w-auto h-full">
        <div class="flex flex-col w-auto shrink justify-between">
          <h1 class="shrink whitespace-normal break-words text-[80px] font-bold font-heading text-left leading-tight">
            {{ title }}
          </h1>
          <p class="text-[38px] opacity-80 -mt-[12px]">{{ subtitle }}</p>
        </div>
        <div class="flex flex-row">
          <LogoFullAlt class="w-[227px] h-[48px]" />
        </div>
      </div>
      <div v-if="thumbnail" class="flex shrink-0 ml-8 w-[440px] h-[440px] bg-red-300 overflow-hidden rounded-[40px]">
        <img :src="thumbnail" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    thumbnail?: string;
  }>(),
  {
    title: 'Unknown',
    subtitle: 'Unknown',
    thumbnail: undefined,
  },
);
</script>
