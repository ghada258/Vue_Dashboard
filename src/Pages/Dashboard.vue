<script setup>
import Card from '../components/Card.vue';
import Chart from '../components/Chart.vue';
import Pagetitle from '../components/Pagetitle.vue';
</script>

<template>
 
  <div class="bg-success">
    <div
      class="pt-4"
      style="padding-left: 88px; padding-right: 88px; height: 100vh"
    >
        <v-sheet class="text-start bg-success mb-4">
          <Pagetitle title="Dashboard"/>
        </v-sheet>
        <v-sheet width="100%" class="text-start mb-4">
            <Card/>
        </v-sheet>
        <v-sheet width="100%"   class="text-start bg-success" >
            <div class="d-flex">
      <Chart :data="[60,40]":title="'Available Products'"/>
      <Chart :data="[60,40]":title="'Available Products'"/>
      <Chart :data="[60,40]":title="'Available Products'"/>
      <Chart :data="[60,40]":title="'Available Products'"/>
    </div>              
   </v-sheet>
   
    </div>
  </div>

 

</template>

<style lang="scss" scoped>
</style>
