<script setup lang="ts">
definePageMeta({
  layout: "demo",
});

const demoData = {
  title: "Demo Two",
  desc: "Description for Demo Two",
  image: "",
};

// Expose demoData to be accessible from the component instance
defineExpose({ demoData });
</script>

<template>
  <div>Demo Two Content</div>
</template>
