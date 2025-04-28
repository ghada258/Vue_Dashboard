<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import Table from '../components/Table.vue';
import { ref} from 'vue'; 
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';

const Customercolumns = ref([
  { name: 'Customer Name', label: 'Customer Name'},
  { name: 'Phone Number', label: 'Phone Number'},
  { name: 'Number of Items', label: 'Number of Items' },
  { name: 'Total Price', label: 'Total Price' },
  { name: 'Status', label: 'Status' },
]);


const Customer_data = ref([
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  },
  {
    'Customer Name': 'Mohamed Ahmed',
    'Phone Number': '123-456-7890',
    'Number of Items': '1',
    'Total Price':'450',
    'Status': 'Pending',

  }
]);
</script>

<template>
  <div class="text-center">
    <Templatepage>
        <template #partone>
            <Pagetitle title="Order Management"/>
        </template>
        <template #parttwo>
            <v-icon size="32" color="primary">mdi-filter-variant</v-icon><span class="font-weight-semibol text-h5 pl-1 text-primary">Filter</span>
        </template>
      <template #partthree>
        <Table :columns="Customercolumns" :tableData="Customer_data" icon2="mdi-dots-horizontal-circle-outline"/>
      </template>
      <template #partfour>
        <Paginationtable/>
      </template>
    </Templatepage>
  </div>
</template>
