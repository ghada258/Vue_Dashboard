<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const items = ["Customer", "Admin"];
const selected = ref(["Customer"]);

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
});

const show_more = "/icons/more_details.svg";
</script>

<template>
  <div>
    <v-table>
      <thead>
        <tr class="text-success bg-primary">
          <th
            v-for="col in columns"
            :key="col.name"
            class="text-center text-body-1 font-weight-semibold"
          >
            {{ col.label }}
          </th>
          <th class="text-left text-body-1 font-weight-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td
            v-for="col in columns"
            :key="col.name"
            class="text-center font-weight-semibold text-neutral"
            style="font-size: 16px"
          >
            <template v-if="col.name === 'Status'">
              <span
                class="w-50 text-center d-inline-block pr-2 pl-2 pt-1 pb-1 rounded-lg cursor-default"
                :class="{
                  'text-success bg-error  ': item[col.name] === 'Inactive',
                  ' text-success bg-lightGray ': item[col.name] === 'Active',
                  'text-success bg-warning  ': item[col.name] === 'Vip',
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
                v-model="selected"
                :items="items"
                label="To"
                hide-details
                hide-no-data
                single-line
              
              class="role-autocomplete"

              density="comfortable"

              ></v-select>
              </div>
             
            </template>

            <template v-else-if="col.name === 'Image'">
              <v-img
                :src="item[col.name]"
                width="60"
                height="60"
                contain
              ></v-img>
            </template>
            <template v-else>
              {{ item[col.name] }}
            </template>
          </td>
          <td class="d-flex justify-start" style="gap: 10px">
            <v-tooltip>
              <template #activator="{ props }">
                <v-icon
                  v-bind="props"
                  v-if="icon1"
                  style="padding-top: 25px"
                  class="text-error cursor-pointer"
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
                  style="padding-top: 25px"
                  class="text-primary cursor-pointer"
                  >{{ icon2 }}</v-icon
                >
              </template>
              {{ titleicon2 }}
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>


<style lang="scss" scoped>
.role-autocomplete {
  width: 60px !important;   
  color:white !important
}

</style>
