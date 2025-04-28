<script setup>
import { ref} from 'vue'; 

const show_more ='/icons/more_details.svg'
const columns = ref([
  { name: 'Customer Name', label: 'Customer Name', align: 'left' },
  { name: 'Phone Number', label: 'Phone Number', align: 'left' },
  { name: 'Number Of Items', label: 'Number Of Items', align: 'left' },
  { name: 'Status', label: 'Status', align: 'left' },
  { name: 'Total Price', label: 'Total Price', align: 'left' },
  { name: 'Action', label: 'Action', align: 'left' }
]);


const table_data = ref([
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Number Of Items': 5,
    'Status': 'Pending',
    'Total Price': '100 USD',
    'Action': "more"
  },
  {
    'Customer Name': 'John Doe',
    'Phone Number': '123-456-7890',
    'Number Of Items': 5,
    'Status': 'Pending',
    'Total Price': '100 USD',
    'Action': "more"
  }
]);
</script>

<template>
  <v-table style="background-color:#818181; margin-top: 50px; ">
    <thead>
        <tr class="text-white" style="background-color: #0A2C47; border-radius: 10px;">
        <th v-for="col in columns" :key="col.name" class="text-left">
          {{ col.label }}
        </th>
    </tr>
    </thead>
    <tbody >
      <tr v-for="item in table_data" :key="item.name" style="background-color: white; border-radius: 10px; margin-bottom: 5px; overflow: hidden;">
        <td v-for="col in columns" :key="col.name" style=" padding: 10px;">
          {{ item[col.name] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
