<script setup>
import { ref} from 'vue'; 
import { defineProps } from 'vue';

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  tableData: {
    type: Array,
    required: true
  },
  icon1: {
    type:String,
    required:false
  },
  icon2: {
    type:String,
    required:false
  }
})

const show_more ='/icons/more_details.svg'

</script>

<template>
  <div >
  <v-table >
    <thead>
        <tr class="text-white" style="background-color: #0A2C47; border-radius: 10px;">
        <th v-for="col in columns" :key="col.name" class="text-center">
          {{ col.label }}
        </th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData" :key="item.name">
        <td v-for="col in columns" :key="col.name"class="text-center" >
          {{ item[col.name] }}
        </td>
        <td class="d-flex justify-center"  style="gap: 10px; " >
          <v-icon v-if="icon1" style="padding-top: 25px; " class="text-tertiary">{{ icon1 }}</v-icon>
          <v-icon  v-if="icon2" style="padding-top: 25px;"  class="text-primary">{{ icon2 }}</v-icon> 
        </td>
          
      </tr>
    </tbody>
  </v-table>
</div>
</template>
