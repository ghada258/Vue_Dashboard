<!-- Parent.vue -->
<script setup>
import Templatepage from "../components/Templatepage.vue";
import Paginationtable from "../components/Paginationtable.vue";
import Pagetitle from "../components/Pagetitle.vue";
import Primarybutton from "../components/Primarybutton.vue";
import Table from "../components/Table.vue";
import { useStore } from "../Store/Productstore";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

// import { useAdminStore } from '../Store/AdminStore';
import { pagination } from "../Store/Pagination";
import { ref, onBeforeMount } from "vue";
const route = useRoute();
const admincolumnsName = ref([
  { name: "_id", label: "Id" },
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Email" },
  { name: "role", label: "Role" },
  { name: "Action", label: "Action" },
]);
// const adminStore = useAdminStore()
const productStore = useStore();

const datapagination = computed(() => productStore.Product_data);

const paginationdata = pagination(datapagination, 5);

onBeforeMount(() => {
  productStore.resourse("admins");

  productStore
    .fetchproduct()
    .then(() => {
      console.log("Data fetched successfully:", productStore.Product_data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// watch(() => route.fullPath, () => {
//   productStore.resourse("admins");
//   productStore.fetchproduct();
// });
</script>

<template>
  <div class="text-center">
    <Templatepage>
      <template #partone>
        <Pagetitle title="Admins" />
      </template>
      <template #parttwo>
        <div class="d-flex justify-end bg-success">
          <Primarybutton icon="mdi-plus" title="Add New Admin" />
        </div>
      </template>
      <template #partthree>
        <Table
          :columns="admincolumnsName"
          :tableData="paginationdata.paginationitem.value"
          icon2="mdi-trash-can-outline"
          titleicon2="Delete"
        />
      </template>
      <template #partfour>
        <Paginationtable
          :totalpage="paginationdata.totalpage.value"
          v-model:page="paginationdata.page.value"
          :itemperpage="paginationdata.itemperpage"
        />
      </template>
    </Templatepage>
  </div>
</template>
