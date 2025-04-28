
<script setup>

import { RouterView } from "vue-router";
import Card from './components/Card.vue';
import Sidebar from "./components/Sidebar.vue"
import Login from './Pages/Login.vue'
import Table from './components/Table.vue';

</script>

<template>
  <Sidebar />
  <RouterView/>

</template>
<style lang="scss" scoped>

</style>

