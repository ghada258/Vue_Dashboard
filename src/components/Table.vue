<script setup>
import { ref } from "vue";
import { defineProps } from "vue";


const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  tableData: {
    type: Array,
    required: true,
  },
  icon1: {
    type: String,
    required: false,
  },
  icon2: {
    type: String,
    required: false,
  },
  titleicon1: {
    type: String,
    required: false,
  },
  titleicon2: {
    type: String,
    required: false,
  },
  nofilterdata:{
    type: String,
required:true
  },titlenodata:{
    type: String,
    required:true
  }
});
// const clonedata=ref(props.tableData.map(r=>({...r})))
const selectrole = ["Customer", "Admin"];

</script>

<template>
  
    <v-table class="rounded-lg custom-table">
      <thead>
        <tr class="text-success bg-primary custom-row ">
          <th
            v-for="col in columns"
            :key="col.name"
            class="text-center text-body-1 font-weight-semibold pa-0 px-4"
          >
            {{ col.label }}
          </th>

      
        
        </tr>
 
      </thead>
      
      <tbody >
        <template v-if="tableData.length > 0">

        <tr  v-for="item in tableData" :key="item.Id" class="custom-row" >
          <td
            v-for="col in columns"
            :key="col.name"
            class="text-center font-weight-semibold text-neutral  cursor-default pa-0 px-4  "
            style="font-size: 16px;margin-bottom: 20px; "
          >
            <template v-if="col.name === 'Status'">
              <span
                class="w-75 text-center d-inline-block pa-2 rounded-lg cursor-default"
                :class="{
                  'text-success bg-error  ': item[col.name] === 'Blocked'||item[col.name] === 'Canceled',
                  ' text-success bg-lightGray ': item[col.name] === 'Active'||item[col.name] === 'Arrived',
                  'text-success bg-warning  ': item[col.name] === 'Vip'||item[col.name] === 'Shipped',
                  'text-success bg-blocked  ': item[col.name] === 'Inactive'  
                }"
              >
                {{ item[col.name] }}
              </span>
            </template>
            <template v-else-if="col.name === 'Status'">
              <span
                :class="{
                  'text-primary': item[col.name] === 'Inactive',
                  'bg-primary': item[col.name] === 'Inactive',
                }"
              >
                {{ item[col.name] }}
              </span>
            </template>
            <template v-else-if="col.name === 'Role'">
              <div class="d-flex justify-center bg-lightGray rounded-lg  ">
                <v-select
                v-model="item.Role"
                :items="selectrole"
                label="To"
                hide-details
                hide-no-data
                single-line
                color="#1E88E5" 
              class="role-autocomplete"

              density="comfortable"

              ></v-select>
              </div>
             
            </template>
            <template v-else-if="col.name==='Orders'">
              
              <button >📦 View Orders</button>
            </template>
            <template v-else-if="col.name==='Order'">
              
              <button >📦  Details</button>
            </template>
            <template v-else-if="col.name==='Total Price'||col.name==='Price'">
              {{item[col.name]  }}<span> EGP</span>
            </template>
            <!--  -->
            <template v-else-if="col.name==='Image'">
              <v-avatar size="80"   rounded="0"
              >
                <img :src="item[col.name]" style="border-radius: 8px; width: 100%; height: 100%; object-fit: contain;" 
                alt="image"/>
              </v-avatar>
            </template>
            <!--  -->
            <template v-else-if="col.name==='Action'">
              <div class="d-flex justify-center  " style="gap: 16px">
            <v-tooltip>
              <template #activator="{ props }">
                <v-icon
                  v-bind="props"
                  v-if="icon1"
                  size="24"

                  class="text-primary cursor-pointer"
                  >{{ icon1 }}</v-icon
                >
              </template>
              {{ titleicon1 }}
            </v-tooltip>

            <v-tooltip>
              <template #activator="{ props }">
                <v-icon
                  v-bind="props"
                  v-if="icon2"
                  size="24"
                  class="text-error cursor-pointer"
                  >{{ icon2 }}</v-icon
                >
              </template>
              {{ titleicon2 }}
            </v-tooltip>
          </div>
            </template>
    
            <template v-else>
              {{ item[col.name] }}
            </template>
          </td>
         
        </tr>
 </template>
 <template v-else>
  <tr>
    <td :colspan="columns.length" class="text-center pa-8 bg-success ">

  
            <img  :src="nofilterdata" class="pt-10"/>
        <v-item-title class="d-block text-primary font-weight-bold text-h5 pt-5">
{{ titlenodata}}        </v-item-title>

</td>
  </tr>



      </template>
      </tbody>
      

    </v-table>
  
</template>


<style lang="scss" scoped>
// .role-autocomplete {
//   width:60px !important; 
//   height: 40px !important;  
//   color:white !important;
// }
</style>
