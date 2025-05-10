<script setup>
import { RouterView } from "vue-router";
import{useRoute} from "vue-router"
  const route=useRoute()
</script>

<template>
  <RouterView :key="route.name" />
</template>
<style lang="scss" scoped>

</style>

