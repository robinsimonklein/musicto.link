<template>
  <div>
    <h1>musicto.link</h1>
    <p>Get a multi-platform link of your song so anyone can listen in their app.</p>
    <form @submit.prevent="onSubmit">
      <input v-model="url" type="text" placeholder="Enter your song URL..." required />
      <button type="submit">Share</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const url = ref('');

const onSubmit = () => {
  if (!url.value?.length) return;

  navigateTo(`/share?url=${url.value}`);
};
</script>
