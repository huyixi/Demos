<script setup lang="ts">
definePageMeta({
  layout: "demo",
});

const demoData = {
  name: "Demo Two",
  desc: "Description for Demo Two",
  image: "",
};

defineExpose({ demoData });
</script>

<template>
  <div>Demo Two Content</div>
</template>
