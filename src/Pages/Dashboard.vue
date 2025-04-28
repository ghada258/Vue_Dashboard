<script setup>
import Card from '../components/Card.vue';
import Chart from '../components/Chart.vue';
import { ref} from 'vue'; 

const tabledata = ref([
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Number Of Items': 5,
    'Status': 'Pending',
    'Total Price': '100 USD'
  },
  {
    'Customer Name': 'Jane Smith',
    'Phone Number': '987-654-3210',
    'Number Of Items': 3,
    'Status': 'Completed',
    'Total Price': '75 USD'
  }
]);

const colname = ref([
   'Customer Name',
  { name: 'Phone Number', label: 'Phone Number' },
  { name: 'Number Of Items', label: 'Number Of Items' },
  { name: 'Status', label: 'Status' },
  { name: 'Total Price', label: 'Total Price' }
]);
</script>

<template>
  <div  >
    <Card/>
    <div class="d-flex">
      <Chart :data="[60,40]":title="'Available Products'"/>
    <Chart :data="[60,40]":title="'Available Products'"/>
    <Chart :data="[60,40]":title="'Available Products'"/>
    <Chart :data="[60,40]":title="'Available Products'"/>
    </div>
    <!-- <Table :tableDataObj="tabledata" :colName="colname" icon="mdi-home" icon2="mdi-home"/> -->
  
 
  </div>
</template>

<style lang="scss" scoped>
</style>
