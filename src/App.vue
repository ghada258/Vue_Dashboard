<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue"
import Card from './components/Card.vue';
import Login from './Pages/Login.vue'
import Table from './components/Table.vue';
import AddProduct from "./Pages/AddProduct.vue";
</script>

<template>
 <!-- <Login/> -->
  <!-- <Admins/>-->
  <Sidebar />
  <!-- <RouterView/> -->
   <AddProduct />
</template>
<style lang="scss" scoped>

</style>

