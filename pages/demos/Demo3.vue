<script setup lang="ts">
definePageMeta({
  layout: "demo",
});

const demoData = {
  name: "Demo 3",
  desc: "Description for Demo Two",
  image: "",
};

defineExpose({ demoData });
</script>

<template>
  <div>Demo Two Content</div>
</template>
