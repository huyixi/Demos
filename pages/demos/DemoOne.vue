<script setup lang="ts">
definePageMeta({
  layout: "demo",
});
const demoData = {
  name: "Demo One",
  desc: "Description for Demo One",
  image: "",
};

defineExpose({ demoData });
</script>

<template>
  <div>Demo One Content</div>
</template>
