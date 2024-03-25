<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
  <div class="gallery px-8">
    <ul class="gallery-list grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7.5 auto-rows-[150px] grid-flow-row-dense">
      <li v-for="demo in demos" :key="demo.name">
        <DemoCard :name="demo.name" @click="handleClick(demo.path)"></DemoCard>
      </li>
    </ul>
  </div>
</template>
