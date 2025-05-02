<script setup>
import Card from '../components/Card.vue';
import Chart from '../components/Chart.vue';
import Pagetitle from '../components/Pagetitle.vue';
</script>





<template>

<div class="bg-success">
    <div class="pt-4   " style="padding-left: 88px; padding-right: 88px;  height:100vh;">

   
  <div
      class=" mb-4 "
    >
    
          <v-sheet  class="text-start  bg-success " >
            <Pagetitle title="Dashboard"/>
          </v-sheet>

    </div>
    <div
      class=" mb-4"
    >
    
          <v-sheet width="100%" class="text-start" >
            <Card/>

         
    </v-sheet>

    </div>
    <div
      class=" mb-1"
    >
    
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
</div>
   
 
</template>

<style lang="scss" scoped>
</style>
