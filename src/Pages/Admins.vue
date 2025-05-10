<!-- Parent.vue -->
<script setup>
import Templatepage from "../components/Templatepage.vue";
import Paginationtable from "../components/Paginationtable.vue";
import Pagetitle from "../components/Pagetitle.vue";
import Primarybutton from "../components/Primarybutton.vue";
import Table from "../components/Table.vue";
import { computed, watch } from "vue";
// import templateeeror from "../components/Templateerror.vue";
import { useAdminStore } from '../Store/AdminStore';
import { pagination } from "../Store/Pagination";
import { ref, onBeforeMount,onMounted } from "vue";
const admincolumnsName = ref([
  { name: "_id", label: "Id" },
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Email" },
  { name: "role", label: "Role" },
  { name: "Action", label: "Action" },
]);
const adminStore = useAdminStore();

const datapagination = computed(() => adminStore.Product_data);

const paginationdata = pagination(datapagination, 5);

// onBeforeMount(() => {
//   adminStore.resourse("admins");

//   adminStore
//     .fetchproduct()
//     .then(() => {
//       console.log("Data fetched successfully:", adminStore.Product_data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// });

// watch(() => route.fullPath, () => {
//   adminStore.resourse("admins");
//   adminStore.fetchproduct();
// });
onBeforeMount(() => {
  adminStore.fetchproduct();
});

onMounted(() => {
  console.log('Data fetched on mount:', adminStore.Product_data);
});


</script>

<template>
  <div class="text-center">
    <Templatepage  :statusfetch="adminStore.status" :length="adminStore.datalength" >
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
