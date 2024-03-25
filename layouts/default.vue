<script>
import DefaultHeader from "~/components/DefaultHeader.vue";
import DefaultFooter from "~/components/DefaultFooter.vue";
</script>

<template>
  <div p-8>
    <DefaultHeader></DefaultHeader>

    <slot />
    <DefaultFooter></DefaultFooter>
  </div>
</template>

<style lang="stylus">
html
  color rgb(14, 16, 15)
</style>
