<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Primarybutton from '../components/Primarybutton.vue';
import Table from '../components/Table.vue';
import { useAdminStore } from '../Store/AdminStore';
import { pagination } from '../Store/Pagination';
import { ref } from 'vue';
const adminStore = useAdminStore()
const datapagination=ref(adminStore.admin_data)
const paginationdata=pagination(datapagination,5)

</script>

<template>
  <div class="text-center">
    <Templatepage>
        <template #partone>
            <Pagetitle title="Admins"/>
        </template>
        <template #parttwo>
          <div class="d-flex justify-end bg-success	">
          
            <Primarybutton icon="mdi-plus" title="Add New Admin"/>
            </div>
            </template>
      <template #partthree>
        <Table :columns="adminStore.admincolumnsName" :tableData="paginationdata.paginationitem.value"  icon2="mdi-trash-can-outline" titleicon2="Delete"/>
      </template>
      <template #partfour>
        <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage"/>
      </template>
    </Templatepage>
  </div>
</template>
