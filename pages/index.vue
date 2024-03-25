<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import demoList from "~/assets/demoList.json";
import DemoCard from "~/components/DemoCard.vue";

const router = useRouter();
const demos = ref<{ name: string; path: string }[]>([]);

function handleClick(path: string) {
  router.push(path);
}

onMounted(() => {
  demos.value = demoList.map((demo) => ({
    name: demo,
    path: `/demos/${demo}`,
  }));
});
</script>

<template>
  <div class="gallery">
    <ul class="gallery-list">
      <li v-for="demo in demos" :key="demo.name">
        <DemoCard :name="demo.name" @click="handleClick(demo.path)"></DemoCard>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
.gallery
  .gallery-list
    display grid
    grid-template-cols repeat(auto-fill,minmax(180px,1fr))
    gap 3em
</style>
