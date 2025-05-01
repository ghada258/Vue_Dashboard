<script setup>
import Paginationtable from '../components/Paginationtable.vue';
import Table from '../components/Table.vue';
import { ref} from 'vue'; 
import Templatepage from '../components/Templatepage.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Search from '../components/Search.vue';
import Primarybutton from '../components/Primarybutton.vue';

const Customercolumns = ref([
  { name: 'Customer Name', label: 'Customer Name'},
 
  { name: 'Email', label: 'Email' },
  { name: 'Phone Number', label: 'Phone Number'},
  { name: 'Status', label: 'Status' },
  { name:'Role',label:'Role'}
]);


const Customer_data = ref([
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Inactive',
    'Role': 'Customer',
  },
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Active',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Active',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Vip',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Active',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Inactive',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Active',
    'Role': 'Customer',
  },  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Email': 'ghada@gmail.com',
    'Status': 'Vip',
    'Role': 'Customer',
  }
]);
</script>

<template>
   <Templatepage>
        <template #partone>
            <Pagetitle title="Customer Management"/>
        </template>
        <template #parttwo>
            <div class="d-flex">
            <v-icon size="32" color="primary">mdi-filter-variant</v-icon><span class="font-weight-semibol text-h5 pl-1 text-primary">Filter</span>
            <Search/>
            <Primarybutton icon="mdi-plus" title="Add New Customer"/>
        </div>
        </template>
      <template #partthree>
     
        <Table :columns="Customercolumns" :tableData="Customer_data" icon1="mdi-trash-can-outline" titleicon1="Delete"
        icon2="mdi-cart-arrow-down" titleicon2="Show all orders" />
       


      
      </template>
      <template #partfour>
        <Paginationtable/>
      </template>
    </Templatepage>

   
   
    
</template>

<style lang="scss" scoped>

</style>