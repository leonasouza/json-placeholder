<script setup lang="ts">
import ViewPost from '../components/ViewPost.vue'
</script>

<template>
  <section>
    <ViewPost />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    padding: 0 15rem;

    @media (max-width: 1300px) {
      padding: 0 2rem;
    }
  }
</style>
