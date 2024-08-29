<template>
  <div>
    <template v-if="data">
      <div v-if="data.metadata">
        <img v-if="data.metadata.thumbnailUrl" :src="data.metadata.thumbnailUrl" loading="lazy" />
        <h1>{{ data.metadata.title }}</h1>
        <p>{{ data.metadata.artistName }}</p>
      </div>
      <div v-if="data?.links">
        <ul>
          <li v-for="(link, index) in data.links" :key="index">
            <a :href="link.url">{{ link.platform }}</a>
          </li>
        </ul>
      </div>
    </template>
    <template v-else> Oops, we didn't find your song. </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const url = route.query.url;

const { data } = await useFetch('/api/links', {
  query: { url },
});

useHead({
  meta: [{ name: 'robots', content: 'noindex' }],
});
</script>
