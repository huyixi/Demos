<script setup lang="ts">
definePageMeta({
  layout: "demo",
});
const demoData = {
  title: "Demo One",
  desc: "Description for Demo One",
  image: "",
};

// Expose demoData to be accessible from the component instance
defineExpose({ demoData });
</script>

<template>
  <div>Demo One Content</div>
</template>
