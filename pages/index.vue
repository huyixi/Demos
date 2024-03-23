<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import demoList from "~/assets/demoList.json";
import DemoCard from "~/components/DemoCard.vue";

const router = useRouter(); // Use useRouter instead of useRoute
const demos = ref([]);

function handleClick(path) {
  router.push(path); // Use router.push to navigate
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
    <h1>Demos</h1>
    <ul>
      <!-- Ensure :key is unique and correctly references an attribute of demo -->
      <li v-for="demo in demos" :key="demo.name">
        <!-- Ensure DemoCard can handle @click. This might require custom handling inside DemoCard -->
        <DemoCard :title="demo.name" @click.native="handleClick(demo.path)"></DemoCard>
      </li>
    </ul>
  </div>
</template>

<style>
.gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--min)), 1fr));
}
</style>
