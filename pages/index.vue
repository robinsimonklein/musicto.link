<template>
  <div>
    <UContainer>
      <div class="max-w-xl mx-auto">
        <div class="flex items-center mt-40">
          <div class="w-full">
            <div class="text-center mb-14">
              <h1 class="inline-block">
                <LogoFull class="h-[70px] mb-6" />
                <span class="sr-only">musicto.link</span>
              </h1>
              <p class="text-sm opacity-60">
                Get a multi-platform link of your song so anyone can listen in their music app.
              </p>
            </div>
            <form class="flex flex-col sm:flex-row items-center gap-4 w-full" @submit.prevent="onSubmit">
              <UInput
                v-model="url"
                class="w-full sm:flex-1"
                size="xl"
                type="text"
                placeholder="Enter your song URL..."
                :disabled="isLoading"
              />
              <UButton
                class="w-full sm:w-auto justify-center"
                color="black"
                size="xl"
                type="submit"
                :disabled="!url?.length || isLoading"
              >
                Share
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const url = ref('');

const isLoading = ref(false);

const onSubmit = async () => {
  if (!url.value?.length) return;

  try {
    isLoading.value = true;
    await navigateTo(`/share?url=${url.value}`);
  } finally {
    isLoading.value = false;
  }
};
</script>
