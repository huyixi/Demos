<script>
import DefaultHeader from "~/components/DefaultHeader.vue";
import DefaultFooter from "~/components/DefaultFooter.vue";
</script>

<template>
  <div class="bg-[#fffce1]">
    <DefaultHeader></DefaultHeader>
    <slot />
    <DefaultFooter class="bg-[#242526] mt-16"></DefaultFooter>
  </div>
</template>

<style lang="stylus">
html
  color rgb(14, 16, 15)
</style>
