<script setup>
import Table from '../components/Table.vue';
import { ref} from 'vue'; 
import { mdiDotsHorizontalCircleOutline } from '@mdi/js';

const Customercolumns = ref([
  { name: 'Customer Name', label: 'Customer Name'},
  { name: 'Phone Number', label: 'Phone Number'},
  { name: 'Email', label: 'Email' },
  { name: 'Status', label: 'Status' },
]);


const Customer_data = ref([
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Pending',
  },
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Pending',
  }
]);
</script>

<template>
    <div >
        <div class="text-center">
        customer
    </div>

    <Table :columns="Customercolumns" :tableData="Customer_data" icon2="mdi-dots-horizontal-circle-outline" icon1="mdi-trash-can-outline"/>
    </div>
    
</template>

<style lang="scss" scoped>

</style>