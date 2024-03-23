<script setup lang="ts">
import DemoCard from "~/components/DemoCard.vue";
</script>

<template>
  <div class="gallery">
    <DemoCard title="Card Title" description="This is a card component built with Vue 3 Composition API and TypeScript." image="https://via.placeholder.com/300" />
    <!-- More cards as needed -->
  </div>
</template>

<style>
.gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
</style>
